import getData from '../services/apiWrapper';


let data = [];

export function getBookList(names,title) {
    let Url = 'http://localhost:5000/booklist?';
    Url += `names=${names}&title=${title}`;
    getData("GET",Url,{}).then((reponseData) => { 
        data = [];
        for(let i=0;i<reponseData.totalItems;i++){
            data.push(reponseData.items[i]);
        }
    });
    return data;
}

export default data;