import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import { makeStyles, TextField } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { debounce } from "lodash";
import Styles from "./DiAutocompleteField.style";

const useStyles = makeStyles(Styles);

const DiAutocompleteField = ({
	placeholder,
	data,
	onSelect,
	disable,
	onChange,
	isLoading,
	fieldName,
	textField,
	resetValue,
}) => {
	const [value, setValue] = useState();
	const [currentValue, setCurrentValue] = useState();
	const [hintText, setHintText] = useState("");
	console.log({ data });

	const { textfieldStyle } = useStyles();

	useEffect(() => {
		if (!data || !data.length) {
			if (!currentValue || (currentValue && currentValue.length < 3)) {
				setHintText("Enter 3 or more characters!");
			} else if (isLoading) setHintText("Loading...");
			else setHintText("No Country Found!");
		} else {
			setHintText("");
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [data, currentValue]);

	const handleSelect = (event, val) => {
		setValue(val);
	};

	const handleHit = (currValue) => {
		setCurrentValue(currValue);
		if (onChange && (currValue.length === 0 || currValue.length > 2)) {
			onChange(currValue);
		}
	};
	// const handleBlur = () => {
	//   setCurrentValue(undefined);
	//   if (onChange) onChange(undefined);
	// };

	const handleDebounce = useCallback(debounce(handleHit, 400), []);

	const handleChange = (event) => {
		handleDebounce(event.target.value);
	};

	useEffect(() => {
		if (value !== undefined && onSelect) onSelect(value);
	}, [value]);

	return (
		<Autocomplete
			options={data} // data is an Array
			// filterOptions={(options) => options}
			getOptionLabel={(option) => option.title}
			onChange={handleSelect}
			forcePopupIcon={false}
			autoComplete
			key={resetValue}
			fullWidth
			clearOnBlur={false}
			noOptionsText={hintText}
			disabled={disable}
			className={textfieldStyle}
			renderInput={(params) => (
				<TextField
					{...params}
					name={fieldName}
					// label={label}

					style={{
						background: "white",
					}}
					placeholder={placeholder}
					variant="outlined"
					fullWidth
					onChange={handleChange}
				/>
			)}
		/>
	);
};

DiAutocompleteField.propTypes = {
	placeholder: PropTypes.string,
	label: PropTypes.string,
	data: PropTypes.array,
	textField: PropTypes.string,
	onSelect: PropTypes.func,
	disable: PropTypes.bool,
	onChange: PropTypes.func,
	isLoading: PropTypes.bool,
	isAutofocused: PropTypes.bool,
	fieldName: PropTypes.string,
	resetValue: PropTypes.string,
};

DiAutocompleteField.defaultProps = {
	placeholder: undefined,
	label: "",
	data: [],
	textField: undefined,
	onSelect: undefined,
	disable: false,
	onChange: undefined,
	isLoading: undefined,
	isAutofocused: false,
	fieldName: undefined,
	resetValue: undefined,
};

export default DiAutocompleteField;
