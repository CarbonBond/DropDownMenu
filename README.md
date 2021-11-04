# DropDownMenu
A simple drop down module that takes in four values. Main goal is to make it 
not limit classes.

newMenu(menu, button, closedClass, transitionClass)

menu: the element that you want to hide and display. You currently pass by
dom element.

button: what you click, which will then show or hide the menu. Again pass
in a dom element

closedClass: A class that is added when closed. 
  example: This will hide the element when closed
  .hidden{
    display: none;
  }
  All the function does is add this class when menu is closed.

transition is a class that has the start state of the menu. 
  You can style this however you like for before state animation


All items in the function do not change anything the user has made.
It only add/removes two classes. This way the user doesn't have to worry
about it changing any styles they would like.