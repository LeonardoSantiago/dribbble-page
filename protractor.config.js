exports.config = {
  specs: [
		`test/*.spec.js`
	],
  baseUrl: 'http://localhost:8080',
  allScriptsTimeout: 300000,
  capabilities: {
    browserName: 'chrome'
  }
}
