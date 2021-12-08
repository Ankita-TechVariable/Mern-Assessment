const fs = require("fs");

module.exports = (inputFilePath) => {
	const data = fs.readFileSync(inputFilePath).toString();
	const parseData = data
		.split("\n")
		.slice(1)
		.map((v) => v.split(","));
	return parseData.reduce((acc, val) => {

		if(val[2])
			return acc + Number(val[2]);
		else return acc;
	}, 0);
};
