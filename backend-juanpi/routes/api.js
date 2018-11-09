var express = require('express');
var router = express.Router();
var request = require('request');

/* GET users listing. */
// router.post('/getIndex', function (req, res, next) {
// 	var url = 'https://webservice.juanpi.com/api/getGoods?page=1&zy_ids=p8_c4_l4&app_name=zhe&catname=tab_hpzc&flag=tab_hpzc'
// 	var requestData =  "{data:'" + good +"'}";
// 	request({
// 	    url: url,
// 	    method: "POST",
// 	    json: true,
// 	    headers: {
// 	        "content-type": "application/json",
// 	    },
// 	    body: JSON.stringify(requestData)
// 	}, function(error, response, body) {
// 	    if (!error && response.statusCode == 200) {
// 	    	console.log(body);
// 	    }
// 	});
// });

// module.exports = router;

router.get('/getIndex', function (req, res, next) {
    request(`https://webservice.juanpi.com/api/getGoods?page=1&zy_ids=p8_c4_l4&app_name=zhe&catname=tab_hpzc&flag=tab_hpzc?wsdl`, (err, reponse, body) => {
        res.send(body);
    })
});

module.exports = router;