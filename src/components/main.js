let rendered = false; // элемент еще не отрендерился

export const main  = (child) => {

  if(document.querySelector('main')){
    rendered = true;
    document.querySelector('main').append(child)
    return document.querySelector('main')

  }
  else{
    const el = document.createElement('main');
    el.append(child ?? '');
    rendered = true;
    return el; 
  }
  
  
  //document.body.append(el);

}
