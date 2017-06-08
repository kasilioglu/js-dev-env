# js-dev-env
Javascript development environment. Built from Cory House's [original version](https://github.com/coryhouse/javascript-development-environment)

## Usage
Clone this repo and run **npm install** to install required modules. Run **npm start** to run development server.

## Dev Dependencies
See Cory House readme file [here](https://github.com/coryhouse/javascript-development-environment/blob/master/README.md)

## Available Npm scripts 

You can run following root scripts to perform different tasks. Use **-s** option to discard some noise from terminal (ex. npm start -s).

- npm start : Starts development server(srcServer .js). Hot reload, linting, security check and mock data available.
  - prestart : Runs before start script. Calling startMessage .js to display some startup message using **chalk** package.
  - security-check : Node securşty check to detect package vulnerabilities. Requires **nsp** package globally installed.
  - open:src : Runs development server script that is powered by **express**.
  - lint:watch : Enable **eslint** and watch for changes. Calls lint script that uses eslint and pass files and folders as parameter together with **--color** option that colorizes eslint messages. **--watch** prefix enables **webpack hot reload** for changes in files and runs lint again.
  - test:watch : Perform mocha tests and watch test files for changes. Calls test script and passes parameters; reporter parameter set as progress, setup file parameter set as testSetup .js that registers babel to transpile ES6 before tests run and path parameter to perform tests for any file ends with ***.test.js**.
  - prestart-mockapi : Runs before following **start-mockapi** script. It also calls another script **generate-mock-data** that uses a script generateMockData .js. This script reads schema (mockDataSchema .js) and generates mock data by using **json-schema-faker** package and than uses node file system to write this generated data to db.json file as a fake repository. Note that the schema contains api paths and the model definition that should be return. 
  - start-mockapi : Uses **json-server** package (better suits to mocking as its simpler than express) to start fake rest api server. db.json passed as parameter and --watch enables auto detect changes and restart api server. To use this fake server, pass a qstring **useMockApi** to url which is defined in baseUrl .js, this file simply manipulates url and redirects calls to fake api url. 

- npm run share : Starts development server and shares it using **localtunnel** package. This package must be installed globally(npm install -g localtunnel). After running this script, see terminal to get generated link. Note that local tunnel actually enables internet users to reach your server, so it must be up. An other option is using [now](https://zeit.co/now#whats-now) which enables you to upload your site to cloud so that anyone can use it without reaching your local machine.
   - open:src : Described above.
   - local-tunnel : Calls local tunnel like **lt --port 3000 --subdomain kasil**, here subdomain name should be available.

- npm run build : Generates dist folder that contains minified bundles and resources(build .js) and than starts production server(distServer .js).
   - prebuild: Called before build script, calls clean-dist script to clean dist folder, calls lint script and test script those've been described above.
   - postbuild : Called after build script, starts production server.

