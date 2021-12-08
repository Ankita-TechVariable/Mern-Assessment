const { fileService } = require("../services");

module.exports = {
	fileExtractor: async (req, res) => {
		// const { file } = req.file;
		try {
			const sum = await fileService.sumCalculator(req.files.file);
			//   if (!userCreated) {
			return res.json({ status: "success", result: sum });
			//   }
		} catch (err) {
			return res.json({ status: typeof err.message === "object" ? JSON.stringify(err.message) : err.message });
		}
	},
};
