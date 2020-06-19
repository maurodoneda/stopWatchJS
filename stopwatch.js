class StopWatch {
	
	constructor() {}

	time = 0;
	timeStarted = 0;
	formattedTime;
	interval;
	isRunning = false;
	displayTime = document.getElementById("timer");
	pointer = document.getElementById("pointer");


//Run the clock if it is not runnig and set an interval calling the upadate method of this class to start the counting on the watch

	runClock = function () {
		if(!this.isRunning){

			this.timeStarted = Date.now();
			this.isRunning = true;
			this.interval = setInterval(this.updateClock.bind(this), 87);
		}
	};

// Puase the clock and clear the interval to stop the counting.

	pauseClock = function(){
		if(this.isRunning){
		this.isRunning = false;
		clearInterval(this.interval);
	 }
	}

// Set all properties to default values, clear the interval to stop the counting and return the zeros on the display.

	resetClock = function () {
		
		this.time = 0;
		this.timeStarted = 0;
		this.formattedTime = null;
		this.lapCount = 0;
		this.isRunning = false;
		clearInterval(this.interval);
		this.interval = null;
		this.pointer.style.transform = `rotate(${this.time}deg)`;
		
		return this.displayTime.innerHTML = this.formatTime(this.time);
	};


// Update method - sets the time of the clock to the delta(deltaInterval method) then formats the time and return it to the display.

	updateClock(){

		this.time += this.deltaInterval();
		this.formattedTime = this.formatTime(this.time);
		console.log(this.formattedTime);
		// For every sec move the pointer by 6 degrees;
		let timeInDegree = this.time/1000*6; 
		this.pointer.style.transform = `rotate(${timeInDegree}deg)`;

		return this.displayTime.innerHTML = this.formattedTime;
	};

// Delta interval method - get the time of the moment then calculates the diference between it and the starting time and returns this diference.

	deltaInterval(){
		let timeNow = Date.now();
		let timePassed = timeNow - this.timeStarted;
		this.timeStarted = timeNow;

		return timePassed;

	}

// Format time method - receives a time to be formated as needs of the display, add zeros to each time slot and returns the formated time as a concatened string to be displayed.

	formatTime = function (timeStamp) {

		let time = new Date(timeStamp);
		let minutes = time.getMinutes().toString();
		let seconds = time.getSeconds().toString();
		let milliseconds = time.getMilliseconds().toString();

		if (minutes.length < 2) {
			minutes = "0" + minutes;
		}

		if(seconds.length < 2){
			seconds = "0" + seconds;
		}

		while(milliseconds.length < 3){
			milliseconds = "0" + milliseconds;
		}

		return `${minutes} : ${seconds} . ${milliseconds}`;
	};


}



