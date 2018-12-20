module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-mocha-test');
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		mochaTest: {
			unitTests: {
				options: {
					reporter: 'mocha-jenkins-reporter',
					reporterOptions: {
						junit_report_name: "Unit Tests",
						junit_report_path: "tests/unitTestResults.xml",
						junit_report_stack: 1
					},
					reqire: 'babel-register',
					quiet: false,
					clearRequireCache: true,
				},
				src: [
					'tests/unit/*.js'
				]
			}
		}
	});
	grunt.registerTask('default', ['mochaTest']);
};