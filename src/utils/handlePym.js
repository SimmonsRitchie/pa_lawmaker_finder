// Handles pym sendHeight and other functionality if needed

export const pymSendHeight = () => {
  pymChild.sendHeight();
  console.log("Scrolling to app...")
  document.getElementById("app").scrollIntoView(false);
}

