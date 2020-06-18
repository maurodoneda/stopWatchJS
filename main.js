
let sw = new StopWatch();


const startPauseButton = document.getElementById("startButton");
const resetButton = document.getElementById("resetButton");
const pauseButton = document.getElementById("pauseButton");



// Play Button logic


startPauseButton.addEventListener("click", function () {

	if(!sw.isRunning){
		console.log(sw);
        sw.runClock();
        this.textContent = "Pause"
	} else {
        console.log(sw);
        sw.pauseClock();
        this.textContent = "Start"
    }
	

});

// // Reset Button Logic

 resetButton.addEventListener("click", function () {

    if(!sw.isRunning){
        sw.resetClock();
    } else {
        throw new Error("Please pause the clock before reseting")
    }
  
    
 });