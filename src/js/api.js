import { API_URL } from "./const.js";
import { paginationData } from "./paginationData.js";



export const getData = async (query) => { //  query то, что ввели в поле
  console.log('query:', query)

  try{
    const response = await fetch(API_URL);
    const obj = await response.json();
    console.log('obj:', obj) // [{}, {}, {}]

    if(query){
      console.log('сюда зашли ');
      const result = query.replace(/\+/g, " ");
      
      const querySearchArray = obj.filter((item) => {
        if(item.name && item.type){
          if(item.name.includes(result) || item.type.includes(result)){
            return item;
          } 
        }
      });   
        
        
      
      console.log('querySearchArray:', querySearchArray);
      
      return querySearchArray; // выход 
      
    }

    return paginationData(obj, 12); // [Array(12), Array(12), Array(12), Array(12), Array(12), Array(12), Array(12), Array(12), Array(4)]
  }
  catch(error){
    console.log('error', error)
    console.log('зашли в ошибочный блок');
    console.error();
  }
}