module.exports = {
	lintOnSave: false,
	devServer: {
		port: 6999,
		hot: true,
		// open: true,
		proxy: process.env.VUE_APP_URL
	}
}