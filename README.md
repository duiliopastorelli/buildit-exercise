# buildit-exercise
Exercise requested by BuildIt as part of hiring process

## Project description
The original request is to develop a responsive single HTML page displaying a
 5 day weather forecast, using API from OpenWeatherMap.
 
A general plan for the App development has been done using the 'project' tool
 on [GitHub.com](https://github.com/duiliopastorelli/buildit-exercise/projects/2)  

All the issues have been created in form of User Stories. From them is 
possible to foresee in which direction the project is moving.

A Sketch file can be found in the root of the project. It shows a general 
idea of the App style, and it has been designed with a mobile-first approach.
 Please note that this file does not represent a full design process, and 
 its purpose is only for development guidance.
 
## Tradeoffs
The general design has been kept minimalistic for favour the functionalities 
development. 

I decided to use React to present my experience gained from Udacity's 
React nanodegree studies.
 
The biggest tradeoff on the whole project has been to not write tests. As a 
further step I'd implement tests for each component using Jest and Enzyme.

## Frameworks and library used
The app has been created in React16, using create-react-app.

I choose React because I see advantages in developing a single-page project 
using it (or other single page frameworks) as this improves the UX.

## Tests
The tests have not been written so far. As soon as possible this project 
should switch to a TDD or BDD approach, and combine it with the existing 
Jenkins pipeline.
 
## Performance
The App scored on LightHouse:
- 93 on performance
- 46 on progressive web app
- 100 on accessibility
- 87 on best practices (mainly because served on http)
- 80 on SEO (robot.txt and meta desc are missing)

## Preview
The App can be previewed on danilomezgec.co.uk:3004
It is built automatically using a simple Jenkins pipeline that can be found 
in the repo (everything on that server runs inside Docker containers, 
orchestrated in a swarm).

## Common commands

Start the App
```npm start```

Build the App for production
```npm build```

Test the App
```npm test```

Please note that the App has an internal "caching system", once the forecasts
 for the current city have been retrieved, they get saved in the localStorage
 . No further requests are sent to the API unless the selected city changes 
 or the forecasts goes "out of date". To force a new fetch, please clear the 
 localStorage.