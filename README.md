# Jarvis


## Getting Started

These are the steps to start using this project or implement more test cases to the suite.

## Prerequisites

To be able to use this project, below is the software stack required:
- node JS version 10+
- Browsers: Chrome, Firefox, IE

## Installing
Install the modules required by the project using below command
```
npm install
```

## Running the tests

To execute the test cases, below is the command. This command takes browser name, environment name, test-suite name, concurrency of execution, release id as arguments
```
inside the directoty:

node test-runner.js --browser=chrome --environment=QA1 --suite=test --concurrency=1 
```
- browser - values['chrome', 'chrome:headless', 'firefox', 'firefox:headless', 'ie', 'all']
- enviroment - values['QA1','QA2' ... 'PRD']
- suite - values['smoke','all', ... 'custom']
- concurrency - values[1 to 5]
