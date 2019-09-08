#  Warehouse Management System
A  warehouse management system built with MongoDB, Express, Node.js and ReactJS.

![Logo](https://res.cloudinary.com/dujqdfwzi/image/upload/v1567925665/wms/1f087f06-5b76-468d-8d3b-57c236755776_200x200.png)






* [Getting started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [About project](#about-project)
  * [Problem](#problem)
  * [Solution](#solution)
* [Planning](#planning)
  * [Audience](#audience)
  * [User stories](#user-stories)
  * [Entity Relationship Diagram](#entity-relationship-diagram)
    * [Version One](#version-one)
    * [Version Two](#version-two)
  * [Trello](#trello)
* [Design](#design)
  * [Wireframes](#wireframes)
  * [Prototype](#prototype)
* [Development](#development)
  * [Requirements](#requirements)
  * [Technologies](#technologies)
* [Challenges and final thoughts](#challenges-and-final-thoughts)
* [Team](#team)

## Getting started
These instructions will get you a copy of the project up and running on your local machine for development purposes.
### Prerequisites
#### Back-end:
- MongoDB
- Express
- Node.js

```json
  "dependencies": {
    "body-parser": "^1.18.2",
    "cors": "^2.8.4",
    "express": "^4.16.2",
    "jsonwebtoken": "^8.1.0",
    "moment": "^2.20.1",
    "moment-timezone": "^0.5.14",
    "mongoose": "^4.13.9",
    "passport": "^0.4.0",
    "passport-google-oauth20": "^1.0.0",
    "passport-jwt": "^3.0.1",
    "passport-local": "^1.0.0",
    "passport-local-mongoose": "^4.4.0"
  },
  "devDependencies": {
    "dotenv": "^4.0.0",
    "eslint": "^4.15.0",
    "eslint-config-prettier": "^2.9.0",
    "eslint-config-standard": "^11.0.0-beta.0",
    "eslint-plugin-import": "^2.8.0",
    "eslint-plugin-node": "^5.2.1",
    "eslint-plugin-prettier": "^2.4.0",
    "eslint-plugin-promise": "^3.6.0",
    "eslint-plugin-standard": "^3.0.1",
    "nodemon": "^1.14.10",
    "now": "^9.2.7",
    "prettier": "^1.10.2"
  }
```
#### Front-end:
- React.js
```json
  "dependencies": {
    "axios": "^0.17.1",
    "jwt-decode": "^2.2.0",
    "moment": "^2.20.1",
    "moment-timezone": "^0.5.14",
    "normalize.css": "^7.0.0",
    "query-string": "^5.0.1",
    "react": "^16.2.0",
    "react-datetime": "^2.11.1",
    "react-dom": "^16.2.0",
    "react-modal": "^3.1.11",
    "react-router-dom": "^4.2.2",
    "react-scripts": "1.0.17"
  },
    "devDependencies": {
    "autoprefixer-stylus": "^0.14.0",
    "concurrently": "^3.5.1",
    "stylus": "^0.54.5"
  }
```
### Installation
Clone the repo
```
git clone https://github.com/kamekazz/warehouse-management-system.git
```

Change to the `wms` folder and install development and production dependencies.

```
cd wms
npm install
```

Change to the `client` folder and install development and producation dependencies.
```
cd client
npm install
```

You will need to set up MongoDB. See [MongoDB](https://docs.mongodb.com/) for instructions
and setup a .env file and add.
MONGODB_URI=YOUR MONGODB DATA
```

For jwtToken  you will need to add  SECRET_OR_KEY=pppppp and PORT=5000

Go to the `wms` folder and start the server.
```
cd wms
npm run dev
```



Open in your browser and navigate to http://localhost:3000. You access the back-end on http://localhost:5000.

## About project
You are to design, build, deploy, and present an application built for a real world customer.

Find a business or organisation nearby to Coder Academy to build an application for.

Meet with the business owner or organisation manager to find out what challenges they face. Find a problem that you can solve with an application and present your ideas to the client.

### Problem

### Solution

## Planning



Using Trello we began adding all tasks and delegating work between each member of the team.

## Trello 
[Trello Board](https://trello.com/b/174yAXvn/ez-wms)



### Audience


### User Stories
**Note** The user stories which apply to lower-level users (for example, a basic user) also apply to high-level users.

#### All staff



#### Product Owner



#### Admin Users



#### Business Unit Representative



### Requirements
[x] Backend - Node.js
[x] Frontend - ReactJS
[x] MongoDB and Mongoose
[x] Authentication (Google OAuth)
[x] Authorisation
[x] Filtering capability
[x] User interface
[x] Deploye back-end, front-end and host database
[x] README

### Trello
![Trello | warehouse management System](https://res.cloudinary.com/dujqdfwzi/image/upload/v1567927026/wms/trilo.png)

### Technologies
- Node.js
- Express
- MongoDB
- Mongoose
- React.js
- Moment.js
- MomentTimezone.js
- Stylus
## Challenges and final thoughts

### Challenges


## Future developments
- Weekly and monthly views
- Searching
- User permissions
- CMS
- Google Calendar

## Team
- [kamekazz](https://github.com/kamekazz)

