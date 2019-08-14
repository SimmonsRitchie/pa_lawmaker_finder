// Handles pym sendHeight and other functionality if needed

export const pymSendHeight = ({timeout=0}={}) => {
  /* Set options in object. Params:
  timeout: int. Sets milliseconds before pymChild sends height to parent.
  defaults to 0. 
  */

  setTimeout(() => pymChild.sendHeight(), timeout)
  // console.log("Scrolling to app...")
  // document.getElementById("app").scrollIntoView(false);

  // INTERSECTION OBSERVER
  if ('IntersectionObserver' in window) {
    // supported
    console.log("Intersection observer is supported")
    let observer = new IntersectionObserver((entries) => {
      const elemVisib = entries[0].intersectionRatio
      if (elemVisib >= 0 && elemVisib < 0.5) {
        console.log("Less than a half of app is visible")
        console.log("Scrolling to top...")
        document.getElementById("app").scrollIntoView(false);
        console.log("Scrolled to top")
      } else if (elemVisib >= 0.3) {
        console.log("More than half of app is visible")
      }
    });
    observer.observe(document.querySelector('#app'))
} else {
    console.log("Intersection is not supported")
}

}

