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
}