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

  if (checkHeight && window.innerWidth < 500) {
    checkAppIsVisible({visibilityThreshold: 0.4})
  }
}

const checkAppIsVisible = ({visibilityThreshold=1}={}) => {
  // INTERSECTION OBSERVER
  if ('IntersectionObserver' in window) {
    // supported
    let observer = new IntersectionObserver((entries) => {
      const elemVisib = entries[0].intersectionRatio
      if (elemVisib < visibilityThreshold) {
        console.log(`Less than ${visibilityThreshold} of app is visible`)
        const el = document.getElementById("app")
        console.log("Scrolling to top of div...")
        el.scrollIntoView({
          behavior: "auto",
          block: "start",
          inline: "nearest"
        });
        console.log("Scrolling to offset location...")
        setTimeout(() => {
          el.scrollTop += 57
          console.log("Scrolled ot offset location")
          observer.disconnect()
          console.log("Intersection observer disconnected")
        }, 1000)
      } else {
        console.log(`More than ${visibilityThreshold} of app is visible`)
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
