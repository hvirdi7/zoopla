# Zoopla project

The project was created to automate functional and regression tests suites using BDD scenarios.

#### Install the dependencies

    npm install

#### Start the app

   via the GUI -  `npx cypress open` in bash terminal
   via the headless terminal - `npx cypress run` command

## Release process

At the moment the release process involves the following steps

- once your feature is in master, merge master into release/x.x (current release)
- the pipeline will generate and push a new image to docker hub (with a new tag)
- use this image tag to do a release via the url/ dashboard (requires access)
### Test Environment Link

#### Test 1

- https://zoopla.co.uk (current website url)

### Versions

cypress 6.9.1
electron 87

### Issues

At the moment I am having difficulty with overcoming the cookies alerts on every page within the iframe. But once that is overcome I am confident that the tests I have implemented would be functional for all scenarios specified, as I have run each test successfully using 'npx cypress open' and manually accepted cookies on occasions to bypass the issues.  


