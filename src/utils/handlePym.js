// Handles pym sendHeight and other functionality if needed

export const pymSendHeight = ({timeout=0, checkHeight=true}={}) => {
  /* Set options in object. Params:
  timeout: int. Sets milliseconds before pymChild sends height to parent.
  defaults to 0. 
  */

  setTimeout(() => pymChild.sendHeight(), timeout)
  // console.log("Scrolling to app...")
  // document.getElementById("app").scrollIntoView(false);

  if (checkHeight) {
    checkAppIsVisible()
  }
}

const checkAppIsVisible = () => {
  // INTERSECTION OBSERVER
  if ('IntersectionObserver' in window) {
    // supported
    let observer = new IntersectionObserver((entries) => {
      const elemVisib = entries[0].intersectionRatio
      if (elemVisib < 0.3) {
        console.log("Less than 0.3 of app is visible")
        console.log("Scrolling to top...")
        document.getElementById("app").scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
        console.log("Scrolled to top")
      } else if (elemVisib >= 0.7) {
        console.log("More than 0.6 of app is visible")
      }
      observer.disconnect()
      console.log("Intersection observer disconnected")
    });
    console.log("Intersection observer connected")
    observer.observe(document.querySelector('#app'))
  } else {
      console.log("Intersection is not supported")
  }
}

