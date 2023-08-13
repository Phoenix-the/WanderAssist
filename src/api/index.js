import axios from "axios"

const URL = "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary"

const options = {
	params: {
		bl_latitude: "11.847676",
		tr_latitude: "12.838442",
		bl_longitude: "109.095887",
		tr_longitude: "109.149359",
	},
	headers: {
		"X-RapidAPI-Key": "54ba1dcf84mshad33eab96397552p1fd693jsn096397d43939",
		"X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
	},
}

export const getPlacesData = async (sw, ne) => {
	try {
		const {
			data: { data },
		} = await axios.get(URL, {
			params: {
				bl_latitude: sw.lat,
				tr_latitude: ne.lat,
				bl_longitude: sw.lng,
				tr_longitude: ne.lng,
			},
			headers: {
				"X-RapidAPI-Key": "7feea1865bmshadbf67a866f6a3dp15d34ajsn4dc6e08b1a80",
				"X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
			},
		})

		return data
	} catch (error) {
		console.log(error)
	}
}