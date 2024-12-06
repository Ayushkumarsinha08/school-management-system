const express = require('express');
const { listpage, listSchool } = require('../controllers/controllers');
const listRouter=express.Router();

listRouter.route("/listSchool")
.get(listpage)
.post(listSchool);

module.exports={
    listRouter,
}