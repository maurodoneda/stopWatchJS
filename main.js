
let sw = new StopWatch();


const startPauseButton = document.getElementById("startButton");
const resetButton = document.getElementById("resetButton");
const lapButton = document.getElementById("lapButton");

resetButton.style.opacity = 0.3;
lapButton.style.opacity = 0.3;

// Play Button logic


startPauseButton.addEventListener("click", function () {

    if(!sw.isRunning){
		console.log(sw);
        sw.runClock();
        $(this).toggleClass("fa-play-circle fa-pause-circle");
        console.log(this.classList);
        resetButton.style.opacity = 0.3;
        lapButton.style.opacity = 1;

	} else {
        console.log(sw);
        sw.pauseClock();
        $(this).toggleClass("fa-pause-circle fa-play-circle");
        console.log(this.classList);
        resetButton.style.opacity = 1;
        lapButton.style.opacity = 0.3;

    }
	

});

// // Reset Button Logic

 resetButton.addEventListener("click", function () {

    if(!sw.isRunning){
        sw.resetClock();
        resetButton.style.opacity = 0.3;
        lapButton.style.opacity = 0.3;

    } else {
        throw new Error("Please pause the clock before reseting")
    }
  
    
 });