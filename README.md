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


## Project setup
```
npm install
cd client && npm install
```

### Démarrer le serveur pour l'API
Renommer .env.example par .env en renseignant les champs et lancer le server
```
npm start
```
### Démarrer le client
Dans le dossier client
```
npm run serve
```
View the website at: http://localhost:8080

### Compiler et minifier le client pour la production
Dans le dossier client
```
npm run build
```

### Lancer le linter et fix les fichiers
Dans le dossier client
```
npm run lint
```

