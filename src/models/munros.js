const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const Munros = function (url) {
  this.munros = null;
  this.url = url;
}

Munros.prototype.getData = function () {
  const requestHelper = new RequestHelper(this.url);
  requestHelper.get().then((data) => {
    this.munros = data;
    console.log(this.munros);
  }).catch((err) => {
    console.error(err);
  })
};


module.exports = Munros;
