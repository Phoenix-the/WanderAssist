import React from "react"
import { Autocomplete } from "@react-google-maps/api"
import { AppBar, Toolbar, InputBase, Box, Typography } from "@material-ui/core"
import SearchIcon from "@material-ui/icons/SearchRounded"
import useStyles from "./style.js"

const Header = () => {
	const classes = useStyles()

	return (
		<AppBar position='static'>
			<Toolbar className={classes.toolbar}>
				<Typography variant='h5' className={classes.title}>
					Wander Assist
				</Typography>
				<Box className={classes.box}>
					<Typography variant='h6' className={classes.title}>
						Explore new places
					</Typography>
					{/* <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}> */}
					<div className={classes.search}>
						<div className={classes.searchIcon}>
							<SearchIcon />
						</div>
						<InputBase
							placeholder='Search…'
							classes={{ root: classes.inputRoot, input: classes.inputInput }}
						/>
					</div>
					{/* </Autocomplete> */}
				</Box>
			</Toolbar>
		</AppBar>
	)
}

export default Header
