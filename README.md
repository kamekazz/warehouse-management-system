![Logo](https://res.cloudinary.com/dujqdfwzi/image/upload/v1567925665/wms/1f087f06-5b76-468d-8d3b-57c236755776_200x200.png)
#  Warehouse Management System
A  warehouse management system built with MongoDB, Express, Node.js and ReactJS.


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
    "bcryptjs": "^2.4.3",
    "cors": "^2.8.5",
    "cross-env": "^5.2.0",
    "date-fns": "^2.0.1",
    "dotenv": "^7.0.0",
    "express": "^4.16.4",
    "faker": "^4.1.0",
    "gravatar": "^1.8.0",
    "jsonwebtoken": "^8.5.1",
    "lodash": "^4.17.15",
    "mongoose": "^5.5.0",
    "mui-datatables": "^2.8.1",
    "passport": "^0.4.0",
    "passport-jwt": "^4.0.0",
    "passport-local": "^1.0.0",
    "reactstrap": "^8.0.1",
    "styled-components": "^4.3.2"
  },
  "devDependencies": {
    "eslint": "^5.3.0",
    "eslint-config-airbnb": "^17.1.1",
    "eslint-config-node": "^4.0.0",
    "eslint-config-prettier": "^6.0.0",
    "eslint-plugin-import": "^2.18.0",
    "eslint-plugin-jsx-a11y": "^6.2.3",
    "eslint-plugin-node": "^9.1.0",
    "eslint-plugin-prettier": "^3.1.0",
    "eslint-plugin-react": "^7.14.2",
    "prettier": "^1.18.2",
    "concurrently": "^4.1.0"
  }
```
#### Front-end:
- React.js
```json
  "dependencies": {
    "@material-ui/core": "^4.3.2",
    "@material-ui/icons": "^4.2.1",
    "axios": "^0.19.0",
    "react": "^16.9.0",
    "react-dom": "^16.9.0",
    "react-redux": "^7.1.0",
    "react-router-dom": "^5.0.1",
    "react-scripts": "3.1.1",
    "redux": "^4.0.4",
    "redux-devtools-extension": "^2.13.8",
    "redux-thunk": "^2.3.0"
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
![alt text](https://res.cloudinary.com/dujqdfwzi/image/upload/v1567927026/wms/trilo.png)
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

