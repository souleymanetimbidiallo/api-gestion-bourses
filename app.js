let express = require("express"),
  path = require("path"),  
  mongoose = require("mongoose"),
  cors = require("cors"),
  dbConfig = require("./database/db");

const Domaine = require('./models/domaine');
const Niveau = require('./models/niveau');    
const Document = require('./models/document');
const Etudiant = require('./models/etudiant');  
const Bourse = require('./models/bourse');  
const Candidature = require('./models/candidature');  
const loadData = require('./database/loadData');


global.__basedir = __dirname;
var indexRouter = require("./routes/index");
var apiRouter = require("./routes/api");

// Connecting with mongo db
mongoose
  .connect(dbConfig.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database sucessfully connected!"))
  .catch(() => console.log("Database could not connected !"));

// loadData(Domaine, require('./database/domaines.json'));
// loadData(Niveau, require('./database/niveaux.json'));
// loadData(Document, require('./database/documents.json'));

// loadData(Etudiant, require('./database/etudiants.json'));
// loadData(Bourse, require('./database/bourses.json'));
// loadData(Candidature, require('./database/candidatures.json'));


const app = express();
app.use(express.json());

//Manage CORS for data
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

// Static directory path
app.use(express.static(path.join(__dirname, "dist/local-library")));
app.use('/images', express.static(path.join(__dirname, 'images')));

//API root
app.use("/", indexRouter);
//app.use("/api/auth", userRouter);
app.use("/api/", apiRouter);

// 404 Handler
app.use((req, res, next) => {
  next(createError(404));
});

// Base Route
app.get("/", (req, res) => {
  res.send("invaild endpoint");
});
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/local-library/index.html"));
});

// error handler
app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});

module.exports = app;