let rendered = false; // элемент еще не отрендерился

export const main  = () => {


  // if(document.querySelector('main')){
  //   rendered = true;
  //   document.querySelector('main').append(child)
  //   return document.querySelector('main')

  // }
  // else{
  //   const el = document.createElement('main');
  //   el.append(child ?? '');
  //   rendered = true;
  //   return el; 
  // }
  

  if(rendered){
    return document.querySelector('main');
  }

  const el = document.createElement('main');
  document.body.append(el);

  rendered = true;

  return el;
  

}
