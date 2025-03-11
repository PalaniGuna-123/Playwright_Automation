// module.exports = {
//     default: {
//         format: ['summary'],
//         require: ['tests/steps/*.js', 'tests/support/*.js'], // CommonJS `.js` extension
//         paths: ['features/*.feature'], // Path to your feature files
       
//     },
// };
// module.exports = {
//     default: {
//         format: ['summary'],
//         require: ['e2e-tests/steps/*.js', 'e2e-tests/support/*.js'], 
//         paths: ['e2e-tests/features/*.feature'], // Corrected path
//     },
// };

module.exports = {
    default: {
        format: ['summary'],
        require: [
            './e2e-tests/steps/**/*.js',  // Ensure step definitions are loaded
            './e2e-tests/support/**/*.js' // Ensure world file is loaded
        ],
        paths: ['./e2e-tests/features/*.feature'], // Path to feature files
    },
};

