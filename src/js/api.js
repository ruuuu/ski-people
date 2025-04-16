import { API_URL } from "./const.js";



export const getData = async (query) => { //  query то, что ввели в поле

  try{
    const response = await fetch(API_URL);
    const obj = await response.json();

    if(query != '' && query != null){
      const querySearchArray = obj.filter((item) => item.name === query || item.type === query); // [{},{}]

      console.log('querySearchArray ', querySearchArray) 
      return querySearchArray;
    }

   
    //console.log('obj ', obj) 
    return obj; // [{},{}]
  }
  catch(error){
    console.error()
  }
}