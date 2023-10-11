const contactForm = document.querySelector('#contact-form');
const submitBtn = document.querySelector('#submit');
const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')
const subjectInput = document.querySelector('#subject')
const messageInput = document.querySelector('#message')
// data from EmailJs
const serviceID = 'service_hp1i2yb';
const templateID = 'template_rqj4bgx';
// Add submit event to the form
contactForm.addEventListener('submit', e => {
  // prevent form default behaviour
  e.preventDefault();
  // change button text
  submitBtn.innerText = 'Just A Moment...';
  const templateParams = {
    name: nameInput.value ,
    email: emailInput.value ,
    subject: subjectInput.value ,
    message: messageInput.value
  }
  // send the email
  emailjs.send(serviceID, templateID, templateParams)
  .then(
    res =>{
      // change button input text
      submitBtn.innerText = 'Message Sent Successfully'
      // clear all input fields
      nameInput.value = ''
      emailInput.value = ''
      subjectInput.value = ''
      messageInput.value = ''
      console.log(res)
    }
  ).catch((error) => {
    console.log(error)
    // change button text
    submitBtn.innerText = 'Something went wrong'
  })
})