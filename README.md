# CloudDrive

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) in order to create a cloud file storage.

## Tests

In the project directory, you can run: 
### `npm test`

Which launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### Deploying to Azure

This app is deployed to azure thru CI (Continuous Integration) requiring the user to just run `npm i` and `npm run build` on Azure for its dependencies and creating the static content azure needs to display the page with the help of the webpack
<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>

Check the deployment scripts here: https://github.com/ulrikstrid/azure-appservice-static
And iisnode.yml (file in which we define default node version) + web.config at the bottom of this page: https://medium.com/@skoob13/deploying-react-app-with-node-js-rest-api-on-azure-9b389251150a

## This project has [No License](https://choosealicense.com/no-permission/) by Choice ❗❕❗
