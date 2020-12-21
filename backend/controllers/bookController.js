const request = require('axios');

function getData(url,method='get') {
	return new Promise(function(resolve, reject){
		request[method](url).then((res)=>{
			resolve(res.data);
		},(err) =>{
			console.log('Something went wrong:', err);
		});
	});	
};

module.exports = {
	booklist: function(req, res) {
		let Url = 'https://www.googleapis.com/books/v1/volumes?q=';
		Url += `inauthor:${req.query.names.split(',').join('+')}+intitle:${req.query.title}&maxResults=40`;
		getData(Url).then((data) => res.send(data) , (err)=> console.log(err));
	},
	bookDetail: function(req, res) {
		let Url = 'https://www.googleapis.com/books/v1/volumes/';
		Url += `${req.query.id}`;
		getData(Url).then((data) => res.send(data) , (err)=> console.log(err));
	}
};