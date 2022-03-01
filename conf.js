//6209650529
exports.config = {
    framework: 'jasmine',

    capabilities: {
        'browserName': 'chrome'
    },
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['spec.js'],

    jasmineNodeOpts: {
        defaultTimeoutInterval: 20000
    }

}