var express    = require('express');
var enforce    = require('express-sslify');
var bodyParser = require('body-parser');
var cors       = require('cors');

var notes = require('./notes_db');
var port  = process.env.PORT ? JSON.parse(process.env.PORT) : 8042;

console.log('-- port:  ' + port);

notes.connect(process.env.MONGODB_URI);

var app  = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// Use enforce.HTTPS({ trustProtoHeader: true }) in case you are behind
// a load balancer (e.g. Heroku). See further comments below
if (process.env.PORT) {
  console.log('-- enforce SSL');
  app.use(enforce.HTTPS({ trustProtoHeader: true }));
}

app.get('/keys', function (req, res, next) {
  notes.keys(req, res, next);
});

app.get('/notes/:username', function (req, res, next) {
  notes.get(req, res, next);
});

app.post('/notes', function (req, res, next) {
  notes.post(req, res, next);
});

var mock = {
  what:'a simple notes server for the Github Note Taker app built in an egghead.io class',
  why:'wanted a simple solution that was not tied to firebase',
  who:'Richard Hess (aka. eswat2)',
  repo:'https://github.com/eswat2/faux-base',
  api:[
    { url:'/keys',       verb:'GET',  what:'list of keys' },
    { url:'/notes',      verb:'POST', what:'creates/updates a new note container' },
    { url:'/notes/:key', verb:'GET',  what:'fetch the note container for this key' }
  ]
};

// NOTE:  this traps all of the bogus notes api calls...
app.all('*', function (req, res, next) {
  res.json(mock);
})

app.listen(port, function () {
  console.log('FauxBase Server is running on port ' + port + '!');
});
