/**
 * ☔️.
 *
 */

const searchFormEl = document.querySelector("#search-form");
const appEl = document.querySelector(".app");
const spinnerEl = document.querySelector("#spinner");
const forecastEl = document.querySelector("#forecast");

const renderCurrentWeather = (data) => {
    forecastEl.innerHTML = `
		<img src="assets/images/forecast-banner.png" class="card-img-top">
		<div class="card-body">
			<h5 class="card-title" id="location">
				<span id="city">${data.name}</span>,
				<span id="country">${data.sys.country}</span>
			</h5>
			<p class="temp">
				<span id="temperature">${data.main.temp}</span>
				&deg;C
			</p>
			<p class="humidity">
				<span id="humidity">${data.main.humidity}</span>
				&percnt; humidity
			</p>
			<p class="wind">
				<span id="windspeed">${data.wind.speed}</span>
				m/s
			</p>
		</div>
	`;
};

searchFormEl.addEventListener("submit", async (e) => {
    e.preventDefault();

    forecastEl.innerHTML = "";
    spinnerEl.classList.remove("hide");

    const query = document.querySelector("#query").value.trim();

    if (query.length < 3) {
        /**
         * @todo show error search too short
         */
        alert("Please enter at least 3 chars");
        return;
    }

    // do search
    console.log("Searching for city:", query);
    const data = await getCurrentWeather(query);

    console.log(data);
    if (!data.name) {
        //error
        alert(
            "Query failed with status code: " +
                data.cod +
                " and the message: " +
                data.message
        );
        return;
    }

    // render weather
    renderCurrentWeather(data);
    spinnerEl.classList.add("hide");
});
