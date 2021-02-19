
function randomGame(){

    let num = 10;
    let times = 0;
    let timer = setInterval(function(){
    num = Math.random();
    times++
    if(num > .75) {
      clearInterval(timer);
      console.log("It took " + times + " try/tries.");
    }
  },1000)
}
randomGame();
