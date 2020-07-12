var express = require('express');
var router = express.Router();

const query = require('./db/index').queryTest

router.get('/', async function(req, res, next) {
  let vals = await query();
  console.log(vals);
  res.json(vals);
});

module.exports = router;
