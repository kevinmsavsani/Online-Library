import axios from 'axios';

let strr = [];

 function getData(method,url,data){
	return axios({
		method,
		url,
		data,
	})
	.then((response) => {
		return response.data;
	})
	.catch((error) => {
		throw error;
	});
}

export function getBookList(names,title) {
		let Url = 'http://localhost:5000/booklist?';
		Url += `names=${names}&title=${title}`;
		getData("GET",Url,{}).then((data) => { 

			for(let i=0;i<data.totalItems;i++){
				strr.push(data.items[i]);
			}
		});
		return strr;
}

export default strr;