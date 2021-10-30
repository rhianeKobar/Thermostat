export class Thermostat {

  constructor(){ 
		this.temperature = 20;
		this.MIN_TEMP = 10;
		this.maxTemp = 25;
		this.powerSave = true;
		this.usage = "medium-usage"

  }

	getCurrentTemp(){
		if(this.temperature > this.maxTemp){
			this.temperature = this.maxTemp;
			return this.temperature;
		}else{
			return this.temperature;
		}
	}

	up(){
		if(this.temperature < this.maxTemp){
			this.temperature = this.temperature + 1;
		}
	}

	down(){
		if (this.temperature > this.MIN_TEMP) {
			 this.temperature = this.temperature - 1
		}
	}

	switchPowerSave(){
		
		switch(this.powerSave){
			case true:
				this.powerSave = false;
				this.maxTemp = 32;
				break;
			case false:
				this.powerSave = true;
				this.maxTemp = 25;
				break;
		}
	}

	reset(){
		this.temperature = 20;
	}

	energyUsage(){
		if (this.temperature < 18 ) {
			this.usage = "low-usage";
			return this.usage;
		}else if (this.temperature <= 25 ) {
			this.usage = "medium-usage";
			return this.usage;
		}else{
			this.usage = "high-usage";
			return this.usage;
		}
	}
}