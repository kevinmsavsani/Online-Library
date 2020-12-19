import axios from 'axios';


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

export default getData;