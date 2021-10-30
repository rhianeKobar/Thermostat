# Thermostat
---

A Thermostat! <br>
Use the search bar to check the temperature in your city. Is it cold? Turn up the heat! Is it warm? Make it nice and cool. You can also turn on power saving mode and reset the temperature to 20&#176;C.

![Thermostat functionality](/public/resources/Images/thermostat.gif "Thermostat functionality gif")

----
## Design 

Using Figma, and utilising icons from [Font Awesome](https://fontawesome.com/) I've created a hot/cold themed thermostat design. 

![Thermostat design](/public/resources/Images/thermostat.jpg "Thermostat figma design")



---

## Implementation

To implement the design and in order to have a clean consistent layout, a combination of the css features flexbox and grid were used. <br>
For functionality of the thermostat a javascript class Thermostat and a new instance of that class(thermostat) were created. Then, using the HTML DOM everything comes together. <br>
In order to save the state of thermostat, routing was done using [Sinatra](http://sinatrarb.com/documentation.html).

---

## Testing

Testing for this product was done initialially using the standalone version of [jasmine](https://jasmine.github.io/) and later on when saving state was enabled [RSpec](https://rspec.info/) and [capybara](https://teamcapybara.github.io/capybara/) were used to test the features available.






