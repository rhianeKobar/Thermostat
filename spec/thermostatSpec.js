describe("Thermostat", function(){
  var thermostat
  beforeEach(function() {
    thermostat = new Thermostat();
  })
  it("should be set at 20 degrees", function(){
		expect(thermostat.temperature).toEqual(20)
  });
}); 

