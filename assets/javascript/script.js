'use strict'

const menuSize = '250px';

let open = true;

document.querySelector('#bltmenu').addEventListener('click', e => {
    open = !open
    toggleMenu();
})

document.querySelector('#btnclose').addEventListener('click', e => {
   open = false;
   toggleMenu();

})

function toggleMenu() {
    if (open) {
        document.querySelector('#menu').style.marginLeft = 0;
        return; 
    }
     document.querySelector('#menu').style.marginLeft = `-${menuSize}`;

}