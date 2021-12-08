const calc = require('../util/functunality/caluculateSum')

module.exports = {
	sumCalculator: async (file) => {
		const sum = calc(file.path);
		return sum;
	},
};
