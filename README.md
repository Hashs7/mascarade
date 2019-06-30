# Projet Mascarade
[![Netlify Status](https://api.netlify.com/api/v1/badges/b9d21598-bdc9-42d6-806c-330021b14adb/deploy-status)](https://app.netlify.com/sites/mascarade/deploys)
[![Tests Status](https://travis-ci.com/Hashs7/mascarade.svg?token=4iexNTB5mpzz4SKFFb2q&branch=develop)](https://travis-ci.com/Hashs7/mascarade)

## Ecosystem

| Dependancy | Description |
|---------|-------------|
| [vuejs]               | Vue.js is a JavaScript framework |
| [vue-router]          | Single-page application routing |
| [vuex]                | Large-scale state management |
| [express]             | Fast, minimalist web framework for node |
| [mongoDB]             | NoSQL Database |
| [mongoose]            | MongoDB ODM designed to work in an asynchronous environment |
| [socket.io]           | Realtime application framework |
| [JsonWebToken]        | Authentification for node.js API |

[vuejs]: https://github.com/vuejs/vue
[vue-router]: https://github.com/vuejs/vue-router
[vuex]: https://github.com/vuejs/vuex
[express]: https://github.com/expressjs/express
[mongoDB]: https://github.com/mongodb/mongo
[mongoose]: https://github.com/Automattic/mongoose
[socket.io]: https://github.com/socketio/socket.io
[JsonWebToken]: https://github.com/auth0/node-jsonwebtoken

## Architecture
This project is using MVC pattern

### Models 🏗
A model represents a set of structured data, called records. Models usually correspond to a collection in a database, attributes correspond to fields, and records correspond to documents.
In this project, there is 4 models : Flash, Session, Student, Teacher
they're represent each "collections" in database

```
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mySchema = new Schema({
    student: {
        type: Schema.Types.ObjectId,
        ref: 'Student',
        required: true
    },
    total: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('MySchema', mySchema);
```

### Controllers 🕹
Controllers are the principal objects in our application that are responsible for responding to requests from a web browser. They often act as a middleman between your models and views. Controllers will orchestrate the bulk of the project’s business logic.
To simplify communicate with MongoDB, we're using mongoose as ODM.

```
exports.myController = (req, res, next) => {
    //Get all data in request body
    const {studentId, sessionId, total} = req.body;
    
    //Find current student in DB with ID
    Student.findById(studentId)
        .populate()
        .then(student => {
            //Update his value
            student.total = total;
            return student.save()
        })
        .then(result => {
            //Payload datas for response
            const payload = {
                studentId,
                sessionId,
                total
            };

            //Emit socket event to update admin view
            io.getIO().emit('updateCharity', payload);
            
            //Send API response
            res.status(201).json({
                message: 'myController a été mis à jour',
                payload
            });
        })
        .catch(err => {
            //Catch if an error occured
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};
```

### Routes 🛣
To access to theses controllers, we expose differents routes for the REST API.
For each models, we have routes which can be called.   
Call getSessionById controller with the route GET "/student/:sessionId"
```
router.get('/student/:sessionId', sessionController.getSessionById);
```

### Middlewares 🛂
We have single middlewares to check Token on restricted routes.

### Views 🖥
To manage dynamic and interactive views, we choose vue.js framework in client folder

#### Assets
In this folder, there are all icons, images and fonts which are loaded in the website
 
#### Components
In order to modularize the code, we created different type of reusable components. They are in respective folders according to their type.

#### Plugins
We are using [Vuetify](https://vuetifyjs.com/en/), wich is Material Design Component Framework. They are mainly use in admin dashboard.

#### Router
In this SPA, we need to manage differents url to access to different views. We are using default vue-router.
For dashboard page, we had to check if the user is authenticated to show view. There is method "redirectIfNotAuth" to validate token.

#### Views
[Vue-router](https://github.com/vuejs/vue-router)
This folder contains all the views connected to the router. We separate the dashboard and student parts.

#### Store
We're using [Vuex](https://github.com/vuejs/vuex) to have global store which contains all application datas. The components are connected to this store and are refreshed when data change.  
**State** : is the main object with datas  
**Actions** : are methods call async to perform API action   
**Mutations** : change the current state after actions is done.  
**Getters** : are usefull when you need to compute derived state based on store state.

#### Style 
We defined global style for the entire of application. Mainly for layout, variables, buttons and scenes.

#### Translations
On the landing page, we needed to translate all the content. We're using [vuex-i18n](https://github.com/dkfbasel/vuex-i18n) to create 2 files for each languages and swap the content instantly.




## Project setup
```
npm install
cd client && npm install
```

### Start server for API
Create MongoDB database with [Mongo Atlas](https://www.mongodb.com/cloud/atlas)
 
Rename .env.example by .env with correct field and start server
```
npm start
```
### Start client
In client folder
```
npm run serve
```
Site is alive at : http://localhost:8080

### Compile and minify client part for production
In client folder
```
npm run build
```

### Deployement
To deploy client, you only need to push on upstream repository or create new pull request
```
git remote add upstream git@github.com:Hashs7/mascarade.git
git add yourcommitfiles
git commit -m "Your commit message"
git push upstream develop
```
To deploy API, you need to push on heroku repository
```
git remote add heroku https://git.heroku.com/mascarade.git
git add yourcommitfiles
git commit -m "Your commit message"
git push heroku origin
```


