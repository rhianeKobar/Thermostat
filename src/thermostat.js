class Thermostat {

  constructor(){ 
	this.temperature = 20;
	this.MIN_TEMP = 10;
	this.maxTemp = 25;
	this.powerSave = true;

  }
	up(){
		this.temperature = this.temperature + 1;
	}

	down(){
		if (this.temperature > this.MIN_TEMP) {
			 this.temperature = this.temperature - 1
		}
	}

	switchPowerSave(){
		if (this.powerSave == true){
			this.powerSave = false;
			this.maxTemp = 32;
		}else{
			this.powerSave = true;
			this.maxTemp = 25;
		}
	}

	reset(){
		this.temperature = 20;
	}

	energyUsage(){
		if (this.temperature < 18 ) {
			return "low-usage";
		}else if (this.temperature <= 25 ) {
			return "medium-usage";
		}else{
			return "high-usage";
		}
	}
}