Clone this javascript file to start a node project
Type npn init, change main file and add the start script.
--------------------------------------------------------------------------------------------
STEP1: Paste these lines of code in the terminal:
npm i dotenv express mongoose jsonwebtoken http-status-codes express-async-errors bcryptjs  --save
npm i nodemon --save-dev
npm install cors helmet xss-clean express-rate-limit --save
---------------------------------------------------------------------------------------------
STEP 2: set the url and access_token in the global environment of the postman. For the access token, paste the following codes in the test section of the login or register;

const jsonData = pm.response.json()
pm.globals.set("accessToken", jsonData.token);

For the url, go to the eye icon on the top right of the postman. Click on add and provide the details of the localhost and save.
