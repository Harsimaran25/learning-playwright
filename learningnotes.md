This file is to add notes for Playwright Understanding

these below can be used to run tests in CLI
Below command will run the browser in headed mode override any settings in 
config.js file
npx playwright test --headed  

to run a project directly
npx playwright test --project chromium

to run the specific test file
npx playwright test tests/example.spec.js