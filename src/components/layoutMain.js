
export const layoutMain  = (child, className) => {
  
  const el = document.createElement('div');
  el.classList.add('container');

  if(className){
      el.classList.add(className);
  }

  el.innerHTML = child;

  return el; // <div class="container"> ... </div>
}
