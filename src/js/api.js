import { API_URL } from "./const.js";
import { paginationData } from "./paginationData.js";



export const getData = async (query) => { //  query то, что ввели в поле
 
  try{
    const response = await fetch(API_URL);
    const obj = await response.json(); // [{},{},{}]

    if(query != '' && query != null){
      const result = query.replace(/\+/g, " ");
      
      const querySearchArray = obj.filter((item) => {
        if(item.name && item.type){
          if(item.name.includes(result) || item.type.includes(result)){
            return item;
          } 
        }
      });   
      console.log('querySearchArray ', querySearchArray)
         
      return paginationData(querySearchArray, 12); // выход [{},{},{}]
    }
  

    return paginationData(obj, 12); // [Array(12), Array(12), Array(12), Array(12), Array(12), Array(12), Array(12), Array(12), Array(4)]
  }
  catch(error){
    console.log('error', error)
    console.log('зашли в ошибочный блок');
    console.error();
  }
}