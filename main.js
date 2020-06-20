let sw = new StopWatch();

const startPauseButton = document.getElementById("startButton");
const resetButton = document.getElementById("resetButton");
const lapButton = document.getElementById("lapButton");

resetButton.style.opacity = 0.3;
lapButton.style.opacity = 0.3;

// Play Button logic

startPauseButton.addEventListener("click", function () {
	if (!sw.isRunning) {
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
	if (!sw.isRunning) {
		sw.resetClock();
		resetButton.style.opacity = 0.3;
        lapButton.style.opacity = 0.3;
        lapContainer.innerHTML = "";
        lapCount.innerText = "";
        counter = 0;
	} else {
		throw new Error("Please pause the clock before reseting");
	}
});

// Lap count button login

let lapContainer = document.querySelector('.lapContainer');
let lapCount = document.querySelector('.lapCount')
let counter = 0;

lapButton.addEventListener("click", function(){
    counter++;
    let el = document.createElement("tr");
    
    el.innerHTML =
     `<th scope = "row">
        <td>${counter}</td>
        <td>${sw.formattedTime}</td>
      </th>`;

    lapContainer.appendChild(el);
    lapCount.innerText = counter;


});

// Function to create second marks inside the watch

function drawTicks() {
	for (let i = 1; i < 60; i++) {
		let el = document.createElement("div");
		el.setAttribute("class", "marker");
		el.style.width = "1px";
		el.style.zIndex = "1";
		el.style.margin = "0px";
		el.style.background =
			"linear-gradient(to top, transparent 97.5%, grey 2.5%)";
		el.style.transform = `rotate(${i * 6}deg)`;
		document.querySelector(".watchFrame").appendChild(el);
	}
};

drawTicks();
