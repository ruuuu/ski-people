let rendered = false; // элемент еще не отрендерился

export const main  = (child) => {
  
  const el = document.createElement('main');
  
  //el.append(child ?? '');
  document.body.append(el);

  rendered = true;

  return el; 
}
