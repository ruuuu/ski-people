
export const layout  = (child, className) => {
  
  const el = document.createElement('div');
  el.classList.add('container');

  if(className){
      el.classList.add(className);
  }

  el.innerHTML = child;

  return el; // <div class="container"> <dic class="catalog__list">.. </div>
}
