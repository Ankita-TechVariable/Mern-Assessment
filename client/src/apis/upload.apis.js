import Axios from "axios";

export const uploadFile = async (payload) => {
	try {
		let response = await Axios.post(`http://localhost:8081/api/v1/file-extractor/parser`, payload, {
			headers: {
				"content-type": "multipart/form-data",
			},
		});
		return response.data;
	} catch (err) {
		return err?.response?.data;
	}
};

