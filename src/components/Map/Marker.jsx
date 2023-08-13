import React from "react"
import { Paper, Typography, useMediaQuery } from "@material-ui/core"
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined"
import { Rating } from "@material-ui/lab"
import PhoneIcon from "@material-ui/icons/Phone"

import useStyles from "./style.js"

const Marker = ({ name, photo }) => {
	const classes = useStyles()
	const isDesktop = useMediaQuery("(min-width:600px)")

	return !isDesktop ? (
		<PhoneIcon />
	) : (
		<Paper elevation={3} className={classes.paper}>
			<Typography
				className={classes.typography}
				variant='subtitle2'
				gutterBottom>
				{name}
			</Typography>
			<img className={classes.pointer} src={photo} alt={name} />
		</Paper>
	)
}

export default Marker
