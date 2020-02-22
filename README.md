# Controller APP Microservice
Controller APP service is a microservice that allows customers to send messages to a list of preloaded users. The messages sent are added to a Redis queue.

## Table of Contents
1. <a href="#tech-used">Technologies Used</a>
2. <a href="#features">Features</a>
3. <a href="#usage">Usage</a>
4. <a href="#license">License</a>


## Technologies Used

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Body-parser](https://www.npmjs.com/package/body-parser)
- [Babel](https://babeljs.io) 
- [MongoDB](https://www.mongodb.com/)
- [Redis](https://redis.io/)
- [Bull](https://www.npmjs.com/package/bull)
- [Nodemon](https://www.npmjs.com/package/nodemon)
- [Mongoose](https://www.npmjs.com/package/mongoose)
- [JsonWebToken](https://www.npmjs.com/package/jsonwebtoken)

## Features

* Messages sent are added to the queue

## Usage

From the command line:

```bash
# Clone this repository
$ git clone https://github.com/teepha/controller-app.git

# Navigate into the cloned repository folder
$ cd controller-app

# Configuration
$ copy the content of .env.sample into a new file .env and provide all the required variables

# Install dependencies
$ npm install

# Run the app
$ npm start
```

## License

ISC

---
