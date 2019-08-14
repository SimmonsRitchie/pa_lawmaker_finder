// Handles pym sendHeight and other functionality if needed

export const pymSendHeight = ({timeout=0}={}) => {
  /* Set options in object. Params:
  timeout: int. Sets milliseconds before pymChild sends height to parent.
  defaults to 0. 
  */

  setTimeout(() => pymChild.sendHeight(), timeout)
  // console.log("Scrolling to app...")
  // document.getElementById("app").scrollIntoView(false);
}

