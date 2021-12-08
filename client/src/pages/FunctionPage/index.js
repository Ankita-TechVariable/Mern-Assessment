import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import resources from "../../res/resources";
import { numDescriptor, roomDetailer } from "../../res/functunality";
import { Button, Card, Grid, TextField, Typography } from "@material-ui/core";
import { uploadFile } from "../../apis/upload.apis";

const FunctionPage = (props) => {
	const [result, setResult] = useState();
	const hiddenFileInput = useRef();
	const [calcData, setCalcData] = useState("");

	const handleFileUpload = () => {
		hiddenFileInput.current.click();
	};

	const handleChange = (event) => {
		console.log("in handleChange");
		const fileUploaded = event.target.files[0];
		console.log({ fileUploaded });
		let data = new FormData();
		data.append("file", fileUploaded);
		uploadFile(data)
			.then((res) => setResult(res.result))
			.catch((err) => {
				console.log({ err });
			});
	};

	const handleValueChange = (e) => {
		setCalcData(numDescriptor(e.target.value));
	};
	return (
		<Grid
			container
			spacing={3}
			justifyContent="center"
			alignContent="center"
			style={{ padding: "7rem" }}
		>
			<Grid item xs={4}>
				<Card style={{ minHeight: "20rem", padding: "2rem" }}>
					<Typography variant="h6">Functionality 1</Typography>

					<ol>
						{resources.rooms.map((room) => (
							<li>{roomDetailer(room)}</li>
						))}
					</ol>
				</Card>
			</Grid>
			<Grid item xs={4}>
				<Card style={{ minHeight: "20rem", padding: "2rem" }}>
					<Typography variant="h6">Functionality 2</Typography>

					<TextField
						placeholder={"Enter Number"}
						onChange={handleValueChange}
					/>
					{calcData && (
						<Typography variant="h6"  style={{marginTop: '2rem'}}>Result : {calcData}</Typography>
					)}
				</Card>
			</Grid>
			<Grid item xs={4}>
				<Card style={{ minHeight: "20rem", padding: "2rem" }}>
					<Typography variant="h6">Functionality 3</Typography>

					<Button onClick={handleFileUpload} variant="outlined"> Bulk Upload </Button>
					<input
						type="file"
						ref={hiddenFileInput}
						onChange={handleChange}
						style={{ display: "none" }}
					/>
					{result && <Typography variant="h6" style={{marginTop: '2rem'}}>Result is: {result}</Typography>}
				</Card>
			</Grid>
		</Grid>
	);
};

FunctionPage.propTypes = {};

export default FunctionPage;
