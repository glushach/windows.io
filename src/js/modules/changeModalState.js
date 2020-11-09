import checkNumInputs from './checkNumInputs';
const changeModalState = (state) => {
  const windowForm = document.querySelectorAll('.balcon_icons_img '),
        windowWidth = document.querySelectorAll('#width'),
        windowHeigth = document.querySelectorAll('#height'),
        windowType = document.querySelectorAll('#view_type'),
        windowProfile = document.querySelectorAll('.checkbox');

  //call function
  checkNumInputs('#width');
  checkNumInputs('#height');

  function bindActionToElems(event, elem, property) {
    elem.forEach((item, i) => {
      item.addEventListener(event, () => {
        switch(item.nodeName) {
          case 'SPAN':
            state[property] = i;
            break;
          case 'INPUT':
            if(item.getAttribute('type') === 'checkbox') {
              i === 0 ? state[property] = "Холодное" : state[property] = "Теплое";
              elem.forEach((box, j) => {
                box.checked = false;
                if(i == j) {
                  box.checked = true;
                }
              });
            } else {
              state[property] = item.value;
            }
            break;
          case 'SELECT':
            state[property] = item.value;
            break;
        } //end switch
        console.log(state);
      }); //end event
    });
  } //end function

  bindActionToElems('click', windowForm, 'form');
  bindActionToElems('input', windowHeigth, 'height');
  bindActionToElems('input', windowWidth, 'width');
  bindActionToElems('change', windowType, 'type');
  bindActionToElems('change', windowProfile, 'profile');

}; //end module

export default changeModalState;