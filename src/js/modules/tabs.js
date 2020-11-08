const tabs = (headerSelector, tabSelector, contentSelector, activeClass, display = 'block') => {
  const header = document.querySelector(headerSelector),
        tab = document.querySelectorAll(tabSelector),
        content = document.querySelectorAll(contentSelector);

  function hideTabContent() {
    content.forEach(item => {
      item.style.display = 'none';
    });

    tab.forEach(item => {
      item.classList.remove(activeClass);
    });
  } //end hideTabContent

  function showTabContent(i = 0) {
    content[i].style.cssText = `
    display: ${display};
    animation-name: fade;
    animation-duration: 3s;
  `;

    tab[i].classList.add(activeClass);
  } //end showTabContent

  hideTabContent();
  showTabContent();


  //Which tabs was click user
  header.addEventListener('click', (e) => {
    const target = e.target;
    if(target &&
      (target.classList.contains(tabSelector.replace(/\./, "")) ||
    target.parentNode.classList.contains(tabSelector.replace(/\./, "")))) {
      tab.forEach((item, i) => {
        if(target == item || target.parentNode == item) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  }); //end click
};

export default tabs;