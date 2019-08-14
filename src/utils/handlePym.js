// Handles pym sendHeight and other functionality if needed

const scrollToTop = (changes, observer) => {
  console.log("APP isn't visible - scroll to top")
  document.getElementById("app").scrollIntoView(false);
}

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
    const options = {
      root: document.querySelector('#app'), // relative to document viewport 
      rootMargin: '0px', // margin around root. Values are similar to css property. Unitless values not allowed
      threshold: 0.1 // visible amount of item shown in relation to root
    };
    let observer = new IntersectionObserver(scrollToTop, options);
    observer.observe(document.querySelector('#app'))
} else {
    console.log("Intersection is not supported")
}

}

