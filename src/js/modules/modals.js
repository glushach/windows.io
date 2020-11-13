const modals = () => {
  function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {
    const trigger = document.querySelectorAll(triggerSelector),
          modal = document.querySelector(modalSelector),
          close = document.querySelector(closeSelector),
          windows = document.querySelectorAll('[data-modal]'),
          scroll = calcScroll();

    //CLICK ON TRIGGER - OPEN MODAL
    trigger.forEach(item =>{
      item.addEventListener('click', (e) => {
        if(e.target) {
          e.preventDefault();
        }

        //close all modal
        windows.forEach(item => {
          item.style.display = 'none';
        });

        //open modal
        modal.style.display = "block";
        document.body.style.overflow = "hidden";
        document.body.style.marginRight = `${scroll}px`;
        // document.body.classList.add('modal-open');
      });
    }); //end CLICK ON TRIGGER

    //CLICK ON CROSS - CLOSE MODAL
    close.addEventListener('click', () => {
      //close all modal
      windows.forEach(item => {
        item.style.display = 'none';
      });

      modal.style.display = "none";
      document.body.style.overflow = "";
      document.body.style.marginRight = `0px`;
      // document.body.classList.remove('modal-open');
    });

    //CLICK ON SUBSTRATE - CLOSE MODAL
    modal.addEventListener('click', (e)=>{
      if(e.target === modal && closeClickOverlay) {
        //close all modal
        windows.forEach(item => {
          item.style.display = 'none';
        });

        modal.style.display = "none";
        document.body.style.overflow = "";
        document.body.style.marginRight = `0px`;
      // document.body.classList.remove('modal-open');
      }
    }); //end event click
  } //end bindModal

  function showModalByTime(selector, time) {
    setTimeout(() => {
      document.querySelector(selector).style.display = 'block';
      document.body.style.overflow = "hidden";
    }, time);
  }

  function calcScroll() {
    let div = document.createElement('div');

    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';

    document.body.appendChild(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();

    return scrollWidth;
  }

  //call function bindModal
  bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
  bindModal('.phone_link', '.popup', '.popup .popup_close');
  bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');

  //inner modal calc cost
  bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
  bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);

  //call function showModalByTime
  // showModalByTime('.popup', 60000);
};

export default modals;