// module.exports = {
//     default: {
//         format: ['summary'],
//         require: ['tests/steps/*.js', 'tests/support/*.js'], // CommonJS `.js` extension
//         paths: ['features/*.feature'], // Path to your feature files
//     },
// };
module.exports = {
    default: {
        format: ['progress'], // Change to 'progress' for better output
        require: [
            'tests/steps/**/*.js',  // Ensures all step files are included
            'tests/support/**/*.js' // Ensures support files are included
        ],
        paths: ['features/**/*.feature'], // Ensures nested feature files are included
        publishQuiet: true  // Suppresses the "publish to reports" message
    },
};
