module.exports = {
    default: {
        format: ['summary'],
        require: ['tests/steps/*.js', 'tests/support/*.js'], // CommonJS `.js` extension
        paths: ['features/*.feature'], // Path to your feature files
       
    },
};
