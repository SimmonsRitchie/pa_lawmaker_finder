// Handles pym sendHeight and other functionality if needed

export const pymSendHeight = ({timeout=0, checkHeight=true}={}) => {
  /* Set options in object. Params:
  --timeout: int. Sets milliseconds before pymChild sends height to parent.
  defaults to 0. 
  --checkHeight: bool. If true, checks whether div is in viewport for small screens. 
  If not, scrolls to top of div. Defaults to true.
  */

  setTimeout(() => pymChild.sendHeight(), timeout)
  // console.log("Scrolling to app...")
  // document.getElementById("app").scrollIntoView(false);

  if (checkHeight) {
    checkAppIsVisible({visibilityThreshold: 0.5})
  }
}

const checkAppIsVisible = ({visibilityThreshold=1}={}) => {
  // INTERSECTION OBSERVER
  if ('IntersectionObserver' in window) {
    // supported
    let observer = new IntersectionObserver((entries) => {
      const elemVisib = entries[0].intersectionRatio
      if (elemVisib < visibilityThreshold) {
        console.log(`Less than ${visibilityThreshold} of app is visible so doing SOMETHING`)
        const el = document.getElementById("app")
        console.log("Scrolling to top of div...")
        el.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest"
        });
        console.log("Scrolling to offset location...")
        setTimeout(() => {
          window.parent.scrollBy(0,-57) // parent window of iframe
          console.log("BINGO - Scrolled to offset location")
          observer.disconnect()
          console.log("Intersection observer disconnected")
        }, 3000)
      } else {
        console.log(`More than ${visibilityThreshold} of app is visible so doing nothing`)
        observer.disconnect()
        console.log("Intersection observer disconnected")
      }
    });
    console.log("Intersection observer connected")
    observer.observe(document.querySelector('#app'))
  } else {
      console.log("Intersection is not supported")
  }
}


// FROM SO ANSWER: https://stackoverflow.com/questions/45098593/mobile-safari-scrollintoview-doesnt-work
// this doesn't appear to work
const scrollElementIntoView = (element: HTMLElement, behavior?: 'smooth' | 'instant' | 'auto') => {

  let scrollTop = window.pageYOffset || element.scrollTop

   // Furthermore, if you have for example a header outside the iframe 
   // you need to factor in its dimensions when calculating the position to scroll to
   const headerOutsideIframe = window.parent.document.getElementsByClassName('myHeader')[0].clientHeight

  const finalOffset = element.getBoundingClientRect().top + scrollTop + headerOutsideIframe

  window.parent.scrollTo({
    top: finalOffset,
    behavior: behavior || 'auto'
  })
}