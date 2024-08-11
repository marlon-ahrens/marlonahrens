
/*Name Input*/

document.querySelector('.name-input').addEventListener('focus', function() {
  document.querySelector('.placeholder-1').style.opacity = '0';
});

document.querySelector('.name-input').addEventListener('blur', function() {
  if (this.value === '') {
      document.querySelector('.placeholder-1').style.opacity = '1';
  }
});

/*Email Input*/

document.querySelector('.email-input').addEventListener('focus', function() {
  document.querySelector('.placeholder-2').style.opacity = '0';
});

document.querySelector('.email-input').addEventListener('blur', function() {
  if (this.value === '') {
      document.querySelector('.placeholder-2').style.opacity = '1';
  }
});

/*Message Input*/

document.querySelector('.message-input').addEventListener('focus', function() {
  document.querySelector('.placeholder-3').style.opacity = '0';
});

document.querySelector('.message-input').addEventListener('blur', function() {
  if (this.value === '') {
      document.querySelector('.placeholder-3').style.opacity = '1';
  }
});