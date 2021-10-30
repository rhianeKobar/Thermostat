
//fetches the data
function getWeatherData(url){
	return fetch(url).then(response => {
		return response.json();
	});
}


//filters the data
function renderResponse(responseData){
	let cityName = `<b>${responseData.name}</b>`;
	let cityTemp = responseData.main.temp;
	return `${cityName}: ${cityTemp}&#176; C`;
}


//uses the input data from the page to to return and render the results
let cityInput = document.getElementById('cityName');
cityInput.addEventListener("change", (e) =>{
	const cityName = e.target.value;
	const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=2c4642d2d77ebdccb8ca6984c1a349b2`

	getWeatherData(url).then(response =>{
		let results = renderResponse(response);
		console.log(results)
		document.getElementById('weatherResults').innerHTML = results
	});
});