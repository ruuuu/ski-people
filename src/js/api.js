import { API_URL } from "./const.js";




export const getData = async (query) => { //  query то, что ввели в поле
  
  console.log('query in getData ', query)

  try{
    const response = await fetch(API_URL);
    const obj = await response.json();

    if(query){
      const result = query.replace(/\+/g, " ");
      const querySearchArray = obj.filter((item) => item.name.includes(result) || item.type.includes(query)); // [{},{}]
     // console.log('querySearchArray ', querySearchArray) 
      return querySearchArray; // выход из функции
    }

    return obj; // [{},{}]
  }
  catch(error){
    console.error()
  }
}