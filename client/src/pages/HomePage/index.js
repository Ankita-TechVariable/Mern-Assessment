import React from "react";
import PropTypes from "prop-types";
import { Button, Grid, Typography } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

const HomePage = (props) => {
	const navigate = useNavigate();
	return (
		<Grid
			container
			spacing={4}
			justifyContent="center"
			alignContent="center"
			style={{ minHeight: "100%", padding: "7rem" }}
		>
			<Grid item xs={12}>
				<Typography variant="h5" align="center"> 
					Click to Navigate
				</Typography>
			</Grid>
			<Grid item xs={4}>
				<Button
					fullWidth
					variant="outlined"
					onClick={() => navigate("/weather")}
				>
					Weather
				</Button>
			</Grid>
			<Grid item xs={4}>
				<Button
					fullWidth
					variant="outlined"
					onClick={() => navigate("/functions")}
				>
					Functunality
				</Button>
			</Grid>
		</Grid>
	);
};

HomePage.propTypes = {};

export default HomePage;
