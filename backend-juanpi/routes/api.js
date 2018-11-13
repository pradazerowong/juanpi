var express = require('express');
var router = express.Router();
var request = require('request');


router.get('/getCategories', function (req, res, next) {
    request(`http://108.61.219.68:8000/goods/type_index`, (err, reponse, body) => {
        res.send(body);
    })
});
router.get('/getCode', function (req, res, next) {
    request(`http://108.61.219.68:8000/user/verifycode/`, (err, reponse, body) => {
        res.send(body);
    })
});

router.get('/getIndex', function (req, res, next) {
    request(`http://108.61.219.68:8000/goods/index`, (err, reponse, body) => {
        res.send(body);
    })
});


router.post('/signup', function (req, res, next) {
    var csrftoken = req.body["X-CSRFToken"];
    delete req.body["X-CSRFToken"];
    var requestData = req.body
request({
    url:`http://108.61.219.68:8000/user/register/`,
    method:"POST",
    json:true,
    header:{
        'X-CSRFToken': csrftoken
        },
    body:JSON.stringify(requestData)
}, (err, reponse, body) => {
            res.send(body);
        })
});





router.get('/register', function (req, res, next) {
    request(`http://108.61.219.68:8000/user/csrf/`, (err, reponse, body) => {
        console.log(body)
        res.send(body);
    })
});


router.get('/getDetail', function (req, res, next) {
    console.log(req.query);
    var goodsId = req.query.goodsId;
    request(`http://108.61.219.68:8000/goods/detail/${goodsId}`, (err, reponse, body) => {
        res.send(body);
    })
});

module.exports = router;