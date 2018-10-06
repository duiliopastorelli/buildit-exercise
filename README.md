# buildit-exercise
Exercise requested by BuildIt as part of hiring process

## Configuration
The App is using an external service for getting the weather forecasts.

This services requires you to have an API key that you can obtain for free 
here: https://home.openweathermap.org/users/sign_up

Once you'll obtain your API, create a file "secrets.json" in the src folder 
like the example
```json
{
  "apiKey":"[yourApiKeyHere]"
}
```

Please note that this file is under .gitignore, so it **won't be committed**.

## Common commands

Start the App
```npm start```

Build the App for production
```npm build```

Test the App
```npm test```

Verify the test coverage
```npm run testCoverage```

Note: test coverage is set at 70% globally.