import React, { useEffect, useState } from "react"
import GoogleMapReact from "google-map-react"
import { Paper, Typography, useMediaQuery } from "@material-ui/core"
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined"
import { Rating } from "@material-ui/lab"
import PhoneIcon from "@material-ui/icons/Phone"
import Marker from "./Marker.jsx"

import useStyles from "./style.js"

const Map = ({ setCoordinates, setBounds, coordinates, places }) => {
	const classes = useStyles()
	const isDesktop = useMediaQuery("(min-width:600px)")

	const [pla, setPla] = useState([
		{ latitude: "52.53", longitude: "13.4", name: "first" },
		{ latitude: "52.53159", longitude: "13.41703", name: "second" },
		{ latitude: "52.54159", longitude: "13.41703", name: "third" },
		{ latitude: "51.55159", longitude: "13.42703", name: "fourth" },
		{ latitude: "52.51159", longitude: "13.41703", name: "fifth" },
		{ latitude: "52.53159", longitude: "13.41803", name: "sixth" },
		{ latitude: "52.56159", longitude: "13.41703", name: "seventh" },
	])

	// useEffect(() => {
	// 	const x = places.map((place) => ({
	// 		latitude: Number(place.latitude),
	// 		longitude: Number(place.longitude),
	// 		name: place.name,
	// 		photo: place?.photo?.images?.large?.url,
	// 	}))

	// 	setPla(x)
	// }, [places, coordinates])

	useEffect(() => {}, [places])

	console.log("exe", places)

	return (
		<div className={classes.mapContainer}>
			<GoogleMapReact
				bootstrapURLKeys={{
					key: KEy,
				}}
				defaultCenter={coordinates}
				center={coordinates}
				// yesIWantToUseGoogleMapApiInternals
				defaultZoom={14}
				margin={[50, 50, 50, 50]}
				options={""}
				onChange={(e) => {
					setCoordinates({
						...coordinates,
						lat: e.center.lat,
						lng: e.center.lng,
					})
					setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw })
				}}
				onChildClick={""}>
				{/* {pla && pla.length && (
					<div
						className={classes.markerContainer}
						lat={Number(pla[0].latitude)}
						lng={Number(pla[0].longitude)}>
						{!isDesktop ? (
							<PhoneIcon color='primary' fontSize='large' />
						) : (
							<Paper elevation={3} className={classes.paper}>
								<Typography
									className={classes.typography}
									variant='subtitle2'
									gutterBottom>
									{"comp  1 "}
								</Typography>
								{console.log("hello")}
								<img
									className={classes.pointer}
									src={
										"https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
									}
									alt={"h"}
								/>
							</Paper>
						)}
					</div>
				)} */}
				{places &&
					places.length &&
					places.map((place) => (
						<div
							className={classes.markerContainer}
							lat={Number(places[0].latitude)}
							lng={Number(places[0].longitude)}>
							{!isDesktop ? (
								<>
									<PhoneIcon color='primary' fontSize='large' />
									{console.log(place)}
								</>
							) : (
								<Paper elevation={3} className={classes.paper}>
									<Typography
										className={classes.typography}
										variant='subtitle2'
										gutterBottom>
										{"hello"}
									</Typography>
									{console.log(place)}
									<img
										className={classes.pointer}
										src={
											"https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
										}
										alt={"y"}
									/>
								</Paper>
							)}
						</div>
					))}
			</GoogleMapReact>
		</div>
	)
}
export default Map

// import React from "react"
// import GoogleMapReact from "google-map-react"
// import { Paper, Typography, useMediaQuery } from "@material-ui/core"
// import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined"
// import Rating from "@material-ui/lab/Rating"

// import useStyles from "./style.js"

// const Map = ({ coords, places, setCoords, setBounds }) => {
// 	const matches = useMediaQuery("(min-width:600px)")
// 	const classes = useStyles()

// 	return (
// 		<div className={classes.mapContainer}>
// 			<GoogleMapReact
// 				bootstrapURLKeys={{ key: "AIzaSyBxrkuZnT1tZUFfe-8WVp5fvWxYtoA2OYM" }}
// 				defaultCenter={coords}
// 				center={coords}
// 				defaultZoom={14}
// 				margin={[50, 50, 50, 50]}
// 				options={""}
// 				onChange={(e) => {
// 					setCoords({ lat: e.center.lat, lng: e.center.lng })
// 					setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw })
// 				}}
// 				onChildClick={""}>
// 				{places.length &&
// 					places.map((place, i) => (
// 						<div
// 							className={classes.markerContainer}
// 							lat={Number(place.latitude)}
// 							lng={Number(place.longitude)}
// 							key={i}>
// 							{!matches ? (
// 								<LocationOnOutlinedIcon color='primary' fontSize='large' />
// 							) : (
// 								<Paper elevation={3} className={classes.paper}>
// 									<Typography
// 										className={classes.typography}
// 										variant='subtitle2'
// 										gutterBottom>
// 										{" "}
// 										{place.name}
// 									</Typography>
// 									<img
// 										className={classes.pointer}
// 										src={
// 											place.photo
// 												? place.photo.images.large.url
// 												: "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
// 										}
// 										alt={place.name}
// 									/>
// 									{/* <Rating
// 										name='read-only'
// 										size='small'
// 										value={Number(place.rating)}
// 										readOnly
// 									/> */}
// 								</Paper>
// 							)}
// 						</div>
// 					))}
// 				{/* {weatherData?.list?.length &&
// 					weatherData.list.map((data, i) => (
// 						<div key={i} lat={data.coord.lat} lng={data.coord.lon}>
// 							<img
// 								src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}
// 								height='70px'
// 							/>
// 						</div>
// 					))} */}
// 			</GoogleMapReact>
// 		</div>
// 	)
// }

// export default Map
