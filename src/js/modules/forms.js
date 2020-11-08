const forms = () => {
  const form = document.querySelectorAll('form'),
        input = document.querySelectorAll('input'),
        phoneInputs = document.querySelectorAll('input[name="user_phone"]');

  phoneInputs.forEach(item => {
    item.addEventListener('input', () => {
      item.value = item.value.replace(/\D/, '');
    }); //end input
  });

  const message = {
    loading: 'Загрузка...',
    success: 'Спасибо! Скоро мы с вами свяжемся',
    failure: 'Что-то пошло не так...'
  };

  const postData = async (url, data) => {
    document.querySelector('.status').textContent = message.loading;
    let result = await fetch(url, {
      method: "POST",
      body: data
    }); //end fetch
    return await result.text();
  };

  const clearInputs = () => {
    input.forEach(item => {
      item.value = '';
    });
  };

  form.forEach(item => {
    item.addEventListener('submit', (e) => {
      e.preventDefault();

      let statusMessage = document.createElement('div');
      statusMessage.classList.add('status');
      item.appendChild(statusMessage);

      const formData = new FormData(item);

      postData('assets/server.php', formData)
        .then(result => {
          console.log(result);
          statusMessage.textContent = message.success;
        })
        .catch(() => statusMessage.textContent = message.failure)
        .finally(()=> {
          clearInputs();
          setTimeout(()=> {
            statusMessage.remove();
          }, 5000);
        });
    }); //end event submit
  });
};

export default forms;