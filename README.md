## Forecastr
Sandbox weather app.

[![Circle CI](https://circleci.com/gh/slyg/forecastr-app.svg?style=svg)](https://circleci.com/gh/slyg/forecastr-app)

### In a nutshell

This repo contains a sandbox app using the following tools/services:

- **react, redux** for the app logic
- **webpack, sass** to bundle assets
- **docker** to build and test app in a container
- **circle ci** to make a build on git pushes and trigger the deployment
- **surge** to host the built static assets

This project is deployed at http://forecastr.surge.sh/.

### Build locally

Build files are placed in `./public`.

#### Using nodeJS

```
# install dependencies
$> npm install

# run tests
$> npm test

# build static assets in ./public
$> npm run build

# start local server
$> npm run dev
```

#### Using docker

```
$> docker-compose up
```
