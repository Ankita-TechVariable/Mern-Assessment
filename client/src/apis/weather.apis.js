import Axios from "axios";

export const searchQuery = async (query) => {
	try {
		let response = await Axios.get(
			`https://www.metaweather.com/api/location/search/?query=${query}`
		);
		return response.data;
	} catch (err) {
		return err?.response?.data;
	}
};

export const getWeather = async (id) => {
	try {
		let response = await Axios.get(
			`https://www.metaweather.com/api/location/${id}/`
		);
		return response.data;
	} catch (err) {
		return err?.response?.data;
	}
};
