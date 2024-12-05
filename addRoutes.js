const express = require('express');
const { addSchool, addpage } = require('../controllers/controllers');
const addRouter=express.Router();

addRouter.route("/addSchool")
.get(addpage)
.post(addSchool);

module.exports={
    addRouter,
}