const submitButton = document.getElementById('submit');

submitButton.addEventListener('click', () => {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  
    const message = `Novo lead:
Nome: ${name}
E-mail: ${email}
Telefone: ${phone}`;
  
  const whatsappURL = 'https://api.whatsapp.com/send?phone=5583987929287&text=' + encodeURIComponent(message);
  
  window.open(whatsappURL);
  
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('phone').value = '';
});
