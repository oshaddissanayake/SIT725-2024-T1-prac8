let express = require('express');
let router = express.Router();
let controller = require('../controllers/controller');

router.post('/', function (req, res) {
    controller.postMarvel(req, res);
});

router.get('/', (req, res) => {
    controller.getAllMarvel(req, res);
});

module.exports = router;

router.delete('/', (req,res)=>{
    controller.getAllMarvel(req,res);
});


module.exports = router;