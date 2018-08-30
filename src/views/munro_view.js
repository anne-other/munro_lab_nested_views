// const PubSub = require('../helpers/pub_sub.js')

const MunroView = function (container, munro) {
  this.munroContainer = container;
  this.munro = munro;
}

MunroView.prototype.render = function () {
  const munroDiv = document.createElement('div');
  munroDiv.classList.add('munro');

  const name = this.createMunroHeading();
  munroDiv.appendChild(name);

  const munroDetailList = this.createMunroDetailList();
  munroDiv.appendChild(munroDetailList);

  this.munroContainer.appendChild(munroDiv);
};

MunroView.prototype.createMunroHeading = function () {
  const name = document.createElement('h3');
  name.classList.add('munro-name');
  name.textContent = this.munro.name;
  return name;
};

MunroView.prototype.createMunroDetailList = function () {
  const munroDetailList = document.createElement('ul');
  munroDetailList.classList.add('details');
  this.populateList(munroDetailList);
  return munroDetailList;
};

MunroView.prototype.populateList = function (list) {
  const meaning = document.createElement('li');
  meaning.textContent = `Meaning: ${this.munro.meaning}`;
  const height = document.createElement('li');
  height.textContent = `Height: ${this.munro.height}`;
  list.appendChild(meaning);
  list.appendChild(height);
};

module.exports = MunroView;
