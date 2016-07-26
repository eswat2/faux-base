# faux-base
[![Dependency Status](https://dependencyci.com/github/eswat2/faux-base/badge)](https://dependencyci.com/github/eswat2/faux-base)
[![Heroku](https://heroku-badge.herokuapp.com/?app=faux-base&style=flat&svg=1)](https://faux-base.herokuapp.com)

a simple notes server to support the Github Note Taker app from the egghead.io course...

```
npm install -g foreman
npm install -g nodemon

npm install
sh demon
```

### Features:

- simple notes api built on [**mongoose**](http://mongoosejs.com/)
- api supports CORS
- notes are persisted to [**mlab**](https://mlab.com/)
- code to enforce SSL, leveraging heroku's certs
- default response is JSON describing the server api


### Deployed:

the server has been deployed and is running here:  [faux-base](https://faux-base.herokuapp.com/)

```json
{
  "what": "a simple notes server for the Github Note Taker app built in an egghead.io class",
  "why": "wanted a simple solution that was not tied to firebase",
  "who": "Richard Hess (aka. eswat2)",
  "repo": "https://github.com/eswat2/faux-base",
  "api": [
    {
      "url": "/keys",
      "verb": "GET",
      "what": "list of keys"
    },
    {
      "url": "/notes",
      "verb": "POST",
      "what": "creates/updates a new note container"
    },
    {
      "url": "/notes/:key",
      "verb": "GET",
      "what": "fetch the note container for this key"
    }
  ]
}
```

### Reference:

- [foreman](https://www.npmjs.com/package/foreman)
- [nodemon](https://www.npmjs.com/package/nodemon)
