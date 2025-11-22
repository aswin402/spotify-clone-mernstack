# BACKEND

## This is the backend for a spotify clone mern stack project. 

### To run this app, you need to have nodejs installed on your machine. You can download it from here: https://nodejs.org/en/download/  

### After installing nodejs, open terminal and navigate to the root directory of this project. Then type in `npm install` to install all dependencies. Once that's done, type in `npm start` to start the server. The server will be running at http://localhost:5000.

## installation instructions:

install dependencies by typing npm install in the terminal.
run the server using npm start command.

``` npm init -y ```
``` npm i express mongoose cors dotenv @clark/express cloudinary socket.io ```
``` npm i nodemon --save-dev ```

## How to use:
1. Clone or fork this repository.
2. Install dependencies with ```npm install```.
3. Run the server with ```npm run dev```.
4. Open browser and go to localhost:5000/api/v1/users/signup to create an account.
5. Login with the credentials created above.
6. Enjoy!


## Technologies used:
* Node.js
* Express.js
* MongoDB
* Mongoose ODM
* Socket.IO
* Cloudinary API
* Cors middleware
* Dotenv package
* Nodemon development tools



### SETUP ENVIRONMENT VARIABLES
Create a .env file in the root directory of your project and add the following variables:

PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.jjz9v.mongodb.net/<database>?retryWrites=true&w=majority

