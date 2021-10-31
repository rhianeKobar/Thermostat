# Thermostat

A Thermostat! <br>
Use the search bar to check the temperature in your city. Is it cold? Turn up the heat! Is it warm? Make it nice and cool. You can also turn on power saving mode and reset the temperature to 20&#176;C.

![Thermostat functionality](/resources/Images/thermostat.gif "Thermostat functionality gif")

----
## Design 

Using Figma, and utilising icons from [Font Awesome](https://fontawesome.com/) I've created a hot/cold themed thermostat design. 

![Thermostat design](/resources/Images/thermostat.jpg "Thermostat figma design")




## Implementation

To implement the design and in order to have a clean, consistent layout, a combination of the css display options flexbox and grid were used. <br>
For functionality of the thermostat a javascript class Thermostat and a new instance of that class(thermostat) were created. Then, using the HTML DOM everything comes together. 




## Dependencies

### API

The [Open Weather API](https://openweathermap.org/api) is being used to retrieve the weather in the city.

### Testing

Testing for this product was done using the standalone version of [jasmine](https://jasmine.github.io/).

## Future development

- I'd like to extract more data from the return fetch request, like adding the current conditions in the city you've search for.

- Compiling the CSS through a SCSS file which can be better organised and elimate redundancies from the current css file using functions.

- Use [dotenv](https://github.com/motdotla/dotenv) to hide the API key.

