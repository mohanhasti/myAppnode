var express = require('express');
var router = express.Router();
var movieController=require ('../controllers/movieController');
/* GET users listing. */
router.get('/all', movieController.getAllMovies)
      .post('/add',movieController.addNewMovie);
module.exports = router;
