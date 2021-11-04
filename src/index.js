

const newMenu = (menuDiv, menuButtonDiv, closedClass, transitionClass) => {

  menuDiv.classList.add(closedClass);
  menuDiv.classList.add(transitionClass);


  menuButtonDiv.addEventListener('mousedown', () => {
    if(menuDiv.classList.contains(closedClass)){
      menuDiv.classList.remove(closedClass);
    } else {
      menuDiv.addEventListener('transitionend', () => {
        menuDiv.classList.add(closedClass);
      }, {once: true});
    }
  })
  menuButtonDiv.addEventListener('mouseup', () => {
    menuDiv.classList.toggle(transitionClass);
  })

};

const menu = document.querySelector('.menu');
const button = document.querySelector('.button');

newMenu(menu, button, 'hidden', 'transition')

