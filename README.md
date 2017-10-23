# roombooking
1aim room booking challenge

## How run the project

Make sure you have Node.JS installed. Then clone this repository, go to the project folder and run ```npm install``` or ```yarn install```. After all dependencies are installed run ```npm serve``` to run a local server on ```http://localhost:8080/```.

## Main libraries/tools used and why I chose them

* React - to build the SPA, I chose React because it's the library that I'm most familiarized. Alternatives to React could be vanilla JS (on small project like this), Vue.js or Angular.
* Redux - this one was probably an overkill to a small problem like this, but I tried to solve like a real-world problem, meaning that in the future the SPA could become more complex.
* React Router - to manage the routing of the SPA.

For the dev environment

* webpack - to build and bundle the SPA
* webpack-dev-server - to run a local dev server
* Babel - to transpile JSX, ES2016 and ES2015 to current valid JS
* Jest - for testing
* PostCSS - to handle CSS