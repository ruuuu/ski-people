

export const paginationData = (data, size) => {

  const paginationSized = [];

  for(let i = 0; i < data.length; i += size){
   // console.log('data.slice(i, i + size) ', data.slice(i, i + size));
    paginationSized.push(data.slice(i, i + size)); 
  }

  return paginationSized; // [Array(12), Array(12), Array(12), Array(12), Array(12), Array(12), Array(12), Array(12), Array(4)]
}