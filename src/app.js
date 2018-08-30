const Munros = require('./models/munros.js');
const MunrosListView = require('./views/munros_list_view')

document.addEventListener('DOMContentLoaded', () => {

const munrosListContainer = document.querySelector('#munros')
const munrosListView = new MunrosListView(munrosListContainer);
munrosListView.bindEvents();

const munros = new Munros('https://munroapi.herokuapp.com/api/munros');
munros.getData();
})
