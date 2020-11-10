const images = () => {
  const body = document.querySelector('body'),
        widthBody = body.clientWidth,
        bigImage = document.createElement('img'),
        workSection = document.querySelector('.works'),
        imgPopup = document.createElement('div');


  if(widthBody > 767) {
    imgPopup.classList.add('popup');
    imgPopup.classList.add('popup_modal');
    workSection.appendChild(imgPopup);

    imgPopup.style.justifyContent = 'center';
    imgPopup.style.alignItems = 'center';
    imgPopup.style.display = 'none';

    imgPopup.appendChild(bigImage);

    workSection.addEventListener('click', (e) => {
      e.preventDefault();

      let target = e.target;

      if(target && target.classList.contains('preview')) {
        imgPopup.style.display = 'flex';
        document.body.style.overflow = "hidden";
        const path = target.parentNode.getAttribute('href');
        bigImage.setAttribute('src', path);
      }
      if(target && target.matches('div.popup')) {
        imgPopup.style.display = 'none';
        document.body.style.overflow = "";
      }
    }); //end click

  } else {
    workSection.addEventListener('click', (e) => {
      e.preventDefault();

      let target = e.target;

      if(target && target.classList.contains('preview')) {
        document.body.style.overflow = "";
        const path = target.parentNode.getAttribute('href');
        bigImage.removeAttribute('src', path);
      }
    }); //end click
    
  } //end if/widthBody
};

export default images;