module.exports = {
    default: {
        require: [
            'features/stepDefinition/loginStepstp.ts',
            'features/stepDefinition/registrationStepstp.ts',
            'hooks/hookstp.ts'
        ],

        requireModule: [
            'ts-node/register'
        ],

        format: [
            'progress',
            'json:reports/cucumber-report.json'
        ],

        parallel: 1
    }
};