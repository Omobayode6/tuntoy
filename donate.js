const contactForm = document.querySelector('#donate-form');
const submitBtn = document.querySelector('#submit');
const nameInput = document.querySelector('#name')
const phoneInput = document.querySelector('#phone')
const amountInput = document.querySelector('#amount')
const messageInput = document.querySelector('#message')
// data from EmailJs
const serviceID = 'service_hp1i2yb';
const templateID = 'template_de2n88g';
// Add submit event to the form
contactForm.addEventListener('submit', e => {
  // prevent form default behaviour
  e.preventDefault();
  // change button text
  submitBtn.innerText = 'Just A Moment...';
  const templateParams = {
    name: nameInput.value ,
    phone: phoneInput.value ,
    amount: amountInput.value ,
    message: messageInput.value
  }
  // send the email
  emailjs.send(serviceID, templateID, templateParams)
  .then(
    res =>{
      // change button input text
      submitBtn.innerText = 'Thank you for your donation'
      // clear all input fields
      nameInput.value = ''
      phoneInput.value = ''
      amountInput.value = ''
      messageInput.value = ''
      console.log(res)
    }
  ).catch((error) => {
    console.log(error)
    // change button text
    submitBtn.innerText = 'Something went wrong'
  })
})