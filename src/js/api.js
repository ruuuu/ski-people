import { API_URL } from "./const.js";
import { paginationData } from "./paginationData.js";



export const getData = async (query) => { //  query то, что ввели в поле
  console.log('query ', query)

  try{
    const response = await fetch(API_URL);
    const obj = await response.json();
    console.log('obj ', obj) // [{}, {}, {}]

    if(query){
      console.log('сюда зашли ');
      const result = query.replace(/\+/g, " ");
      console.log('result ', result); // Ботинки

      const querySearchArray = obj.filter((item) => item.name.includes(result) || item.type.includes(query)); // [{},{}]
      console.log('querySearchArray ', querySearchArray);
      return querySearchArray;
      //return paginationData(querySearchArray, 12); // выход из функции
    }

    //console.log('paginationData(obj, 12) in api ', paginationData(obj, 12))
    return paginationData(obj, 12); // [Array(12), Array(12), Array(12), Array(12), Array(12), Array(12), Array(12), Array(12), Array(4)]
  }
  catch(error){
    console.error()
  }
}