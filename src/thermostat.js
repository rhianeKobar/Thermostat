class Thermostat {

  constructor(){ 
	this.temperature = 20;
	this.MIN_TEMP = 10;

  }
	up(){
		this.temperature = this.temperature + 1;
	}

	down(){
		if (this.temperature > this.MIN_TEMP) {
			 this.temperature = this.temperature - 1
		}
	}
}