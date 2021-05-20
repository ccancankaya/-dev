const db = require('../models')
const Ip_Info = db.ip_info
const axios = require('axios')
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {

  function getIp() {
    return axios.get('https://ifconfig.me/ip')
      .then(response => {
        return JSON.stringify(response.data)
      })
      .catch(error => {
        console.log(error);
        return Promise.reject(error);
      });
  }

  getIp().then(response => {
    res.render('index', { title: response },{list:response})
    Ip_Info.create({
      ip_address: response
    })
  });
});

module.exports = router;
