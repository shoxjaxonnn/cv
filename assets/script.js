document.addEventListener("DOMContentLoaded", () => {
  let txt = "Shoxjaxon Raxmatillayev";
  let i = 0;
  let speed = 50;
  function typewWriter(){
    if(i < txt.length){
        document.getElementById("type-writer").innerHTML += txt.charAt(i)
        i++
        setTimeout(typewWriter , speed)
    }
  }
  typewWriter()
});
