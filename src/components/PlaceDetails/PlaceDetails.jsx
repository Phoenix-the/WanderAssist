import React from "react"
import {
	Box,
	Typography,
	Button,
	Card,
	CardMedia,
	CardContent,
	CardActions,
	Chip,
} from "@material-ui/core"
import LocationOnIcon from "@material-ui/icons/LocationOn"
import PhoneIcon from "@material-ui/icons/Phone"
import Rating from "@material-ui/lab/Rating"

import useStyles from "./style.js"

const PlaceDetails = ({ place }) => {
	const classes = useStyles()

	return (
		<Card elevation={6}>
			<CardMedia
				style={{ height: 350 }}
				image={
					place.photo
						? place.photo.images.large.url
						: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
				}
				title={place.name}
			/>
			<CardContent>
				<Typography gutterBottom variant='h5'>
					{place.name}
				</Typography>
				<Box className={classes.box}>
					<Typography variant='subtitle1'>Price</Typography>
					<Typography gutterBottom variant='subtitle1'>
						{place.price_level}
					</Typography>
				</Box>
				<Box className={classes.box}>
					<Typography variant='subtitle1'>Ranking</Typography>
					<Typography gutterBottom variant='subtitle1'>
						{place.ranking}
					</Typography>
				</Box>
				{place?.cuisine?.map(({ name }) => (
					<Chip key={name} size='small' label={name} className={classes.chip} />
				))}
				{place?.address && (
					<Typography
						gutterBottom
						variant='subtitle2'
						color='textSecondary'
						className={classes.subtitle}>
						<LocationOnIcon />
						{place.address}
					</Typography>
				)}
				{place?.phone && (
					<Typography
						gutterBottom
						variant='subtitle2'
						color='textSecondary'
						className={classes.spacing}>
						<PhoneIcon />
						{place.phone}
					</Typography>
				)}

				<CardActions>
					<Button
						size='small'
						color='primary'
						onClick={() => window.open(place.web_url, "_blank")}>
						Trip Advisor
					</Button>
					<Button
						size='small'
						color='primary'
						onClick={() => window.open(place.website, "_blank")}>
						Website
					</Button>
				</CardActions>
			</CardContent>
		</Card>
	)
}

export default PlaceDetails
