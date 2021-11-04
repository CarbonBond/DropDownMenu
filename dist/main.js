/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/


const newMenu = (menuDiv, menuButtonDiv, hideClass, transitionClass) => {

  menuDiv.classList.add(hideClass);
  menuDiv.classList.add(transitionClass);


  menuButtonDiv.addEventListener('mousedown', () => {
    if(menuDiv.classList.contains(hideClass)){
      menuDiv.classList.remove(hideClass);
    } else {
      menuDiv.addEventListener('transitionend', () => {
        menuDiv.classList.add(hideClass);
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


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRUE7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxPQUFPLEdBQUcsV0FBVztBQUNyQjtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZHJvcGRvd25tZW51Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuXG5jb25zdCBuZXdNZW51ID0gKG1lbnVEaXYsIG1lbnVCdXR0b25EaXYsIGhpZGVDbGFzcywgdHJhbnNpdGlvbkNsYXNzKSA9PiB7XG5cbiAgbWVudURpdi5jbGFzc0xpc3QuYWRkKGhpZGVDbGFzcyk7XG4gIG1lbnVEaXYuY2xhc3NMaXN0LmFkZCh0cmFuc2l0aW9uQ2xhc3MpO1xuXG5cbiAgbWVudUJ1dHRvbkRpdi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoKSA9PiB7XG4gICAgaWYobWVudURpdi5jbGFzc0xpc3QuY29udGFpbnMoaGlkZUNsYXNzKSl7XG4gICAgICBtZW51RGl2LmNsYXNzTGlzdC5yZW1vdmUoaGlkZUNsYXNzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVudURpdi5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgKCkgPT4ge1xuICAgICAgICBtZW51RGl2LmNsYXNzTGlzdC5hZGQoaGlkZUNsYXNzKTtcbiAgICAgIH0sIHtvbmNlOiB0cnVlfSk7XG4gICAgfVxuICB9KVxuICBtZW51QnV0dG9uRGl2LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCAoKSA9PiB7XG4gICAgbWVudURpdi5jbGFzc0xpc3QudG9nZ2xlKHRyYW5zaXRpb25DbGFzcyk7XG4gIH0pXG5cbn07XG5cbmNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudScpO1xuY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbicpO1xuXG5uZXdNZW51KG1lbnUsIGJ1dHRvbiwgJ2hpZGRlbicsICd0cmFuc2l0aW9uJylcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9