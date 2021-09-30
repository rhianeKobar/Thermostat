//declare class instance

let thermostat = new Thermostat();

//event objects

let tempMonitor = document.getElementById('tempMonitor')
let btnUp = document.getElementById('btnUp')
let btnDown = document.getElementById('btnDown')
let btnEnergySave = document.getElementById('btnEnergySave')
let btnReset = document.getElementById('btnReset')
let usageIndicator = document.getElementById('usageIndicator')
let energyIcon = document.getElementById('btnEnergyIcon')


//event functions

let currentTemp = () => {
	tempMonitor.innerText = thermostat.getCurrentTemp();
}
let increaseTemp = () => {
	thermostat.up();
	tempMonitor.innerText = thermostat.getCurrentTemp();
}
let decreaseTemp = () => {
	thermostat.down();
	tempMonitor.innerText = thermostat.getCurrentTemp();
}
let switchPowerSaver = () => {
	if (energyIcon.style.color === 'black'){
		energyIcon.style.color = 'aliceblue';
	}else{
		energyIcon.style.color = 'black';
	}
	thermostat.switchPowerSave();
	tempMonitor.innerText = thermostat.getCurrentTemp();
}
let resetTemp = () => {
	thermostat.reset();
	tempMonitor.innerText = thermostat.getCurrentTemp();
}
let  changeIndication = () => {
	thermostat.energyUsage();
	if(thermostat.energyUsage() ===  "low-usage") {
		usageIndicator.style.background = 'radial-gradient(50% 50% at 50% 50%, #B5F8BC 2.08%, #128D1E 100%)';
	}else if(thermostat.energyUsage() ===  "medium-usage") {
		usageIndicator.style.background = 'radial-gradient(50% 50% at 50% 50%, #77736C 1.04%, #000000 63.54%)';
	}else if(thermostat.energyUsage() ===  "high-usage") {
		usageIndicator.style.background = 'radial-gradient(50% 50% at 50% 50%, #F49191 2.08%, #F11B1B 100%)';
	}
}


//event listeners
 
window.addEventListener("load", currentTemp);
btnUp.addEventListener("click", increaseTemp);
btnDown.addEventListener("click", decreaseTemp);
btnEnergySave.addEventListener("click", switchPowerSaver);
btnReset.addEventListener("click", resetTemp);
document.addEventListener("click", changeIndication)

