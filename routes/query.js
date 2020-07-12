var express = require('express');
var router = express.Router();

const query = require('./db/index').query

router.post('/', async function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  
  let vals = await query(req.body.sql || '', req.body.sqlParams || []);
  res.json(vals);
});

module.exports = router;