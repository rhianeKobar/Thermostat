describe("Thermostat", function(){
  var thermostat
  beforeEach(function() {
    thermostat = new Thermostat();
  })
  it("should be set at 20 degrees", function(){
		expect(thermostat.temperature).toEqual(20)
  });
	
	it("should increase the temperature", function(){
		thermostat.up()
		expect(thermostat.temperature).toEqual(21)
  });

  it("should decrease the temperature", function(){
		thermostat.down()
		expect(thermostat.temperature).toEqual(19)
  });

	it("shouldn't allow the temperature to drop below 10", function(){
		for(let i = 12; i > 0; i--){
			thermostat.down();
		}
		expect(thermostat.temperature).toEqual(10);
  });

  it("should be 25 degrees if power save is on", function(){
		expect(thermostat.maxTemp).toEqual(25);
  });

	it("should be 32 degrees if power save is off", function(){
		thermostat.switchPowerSave();
		expect(thermostat.maxTemp).toEqual(32);
  });


}); 

