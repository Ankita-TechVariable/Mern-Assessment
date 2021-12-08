import React, { useState } from "react";
import PropTypes from "prop-types";
import DiAutocompleteField from "../../components/DiAutocompleteField";
import { getWeather, searchQuery } from "../../apis/weather.apis";
import { Grid, Typography } from "@material-ui/core";

const WeatherPage = (props) => {
	const [locationData, setLocationData] = useState();
	const [weatherData, setWeatherData] = useState();

	const handleChange = (data) => {
		searchQuery(data)
			.then((res) => {
				console.log({ res });
				setLocationData(res);
			})
			.catch((err) => console.log({ err }));
	};

	const handleSelect = (val) => {
		console.log({ val });
		getWeather(val?.woeid)
			.then((res) => setWeatherData(res.consolidated_weather[0]))
			.catch((err) => console.log({ err }));
	};
	return (
		<Grid container justifyContent="center" style={{ padding: "2rem" }}>
			<Grid item xs={12}>
				<Typography variant="h6" align="center" style={{padding: "2rem"}}>
					WEATHER FORCASTER
				</Typography>
			</Grid>
			<Grid item xs={12}>
				<DiAutocompleteField
					placeholder={"Search Location..."}
					data={locationData}
					onChange={handleChange}
					onSelect={handleSelect}
					fieldName={"title"}
				/>
			</Grid>

			{weatherData && (
				<>
					<Grid
						item
						xs={12}
						style={{
							display: "flex",
							justifyContent: "center",
							marginTop: "7rem",
						}}
					>
						<img
							src={`https://www.metaweather.com/static/img/weather/png/64/${weatherData.weather_state_abbr}.png`}
						/>
					</Grid>
					<Grid item xs={12}>
						<Typography variant="h6" align="center">
							{weatherData.weather_state_name}
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Typography variant="h6" align="center">
							Humidity: {weatherData.humidity}
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Typography variant="h6" align="center">
							Temperature: {weatherData.the_temp}
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Typography variant="h6" align="center">
							Wind Speed: {weatherData.wind_speed}
						</Typography>
					</Grid>
				</>
			)}
		</Grid>
	);
};

WeatherPage.propTypes = {};

export default WeatherPage;
