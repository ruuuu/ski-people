import { API_URL } from "./const.js";
import { paginationData } from "./paginationData.js";



export const getData = async (query) => { //  query то, что ввели в поле
  

  try{
    const response = await fetch(API_URL);
    const obj = await response.json();

    if(query){
      const result = query.replace(/\+/g, " ");
      const querySearchArray = obj.filter((item) => item.name.includes(result) || item.type.includes(query)); // [{},{}]
      return paginationData(querySearchArray, 12); // выход из функции
    }

    console.log('paginationData(obj, 12) in api ', paginationData(obj, 12))
    return paginationData(obj, 12); // [Array(12), Array(12), Array(12), Array(12), Array(12), Array(12), Array(12), Array(12), Array(4)]
  }
  catch(error){
    console.error()
  }
}