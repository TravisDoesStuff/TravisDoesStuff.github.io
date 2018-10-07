require('dotenv').config({path: '../.env'});

const express = require("express");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const expressApp = express();
const router = express.Router();

const API_PORT = process.env.PORT || 3001;

expressApp.use(bodyParser.urlencoded({ extended: true }));
expressApp.use(bodyParser.json());
expressApp.use('/api', router);

mongoose.connect(process.env.REACT_APP_BIO_API_ADDRESS, { useNewUrlParser: true });

const Schema = mongoose.Schema;


const PersonSchema = new Schema({
    name: String,
    title: String,
    location: String,
    description: Array,
    quote: String,
    skills: Array,
    history: Array,
    image: String,
    versionKey: false
},{ collection: 'Person' });
var Person = mongoose.model('Person', PersonSchema);

router.get('/person', (req, res) => {
    Person.find((err, person) => {
        if(err) console.log(err);
        return res.json({ data: person });
    });
});


const ProjectSchema = new Schema({
    title: String,
    meta: String,
    description: String,
    link: String,
    image: String,
    githubLink: String,
    githubTitle: String,
    versionKey: false
},{ collection: 'Projects' });
var Projects = mongoose.model('Projects', ProjectSchema);

router.get('/projects', (req, res) => {
    Projects.find((err, projects) => {
        if(err) console.log(err);
        return res.json({ data: projects });
    });
});


const LinkSchema = new Schema({
    name: String,
    icon: String,
    link: String,
},{ collection: 'Links' });
var Links = mongoose.model('Links', LinkSchema);

router.get('/links', (req, res) => {
    Links.find((err, links) => {
        if(err) console.log(err);
        return res.json({ data: links });
    });
});


expressApp.listen(API_PORT, () =>{
    console.log(`Listening on port ${API_PORT}`);
});
