const subscribeBtn = document.querySelector('.channel_info > .subscribe_btn');

subscribeBtn.addEventListener('click', () => {
  subscribeBtn.classList.toggle('active');

  if(subscribeBtn.innerText === 'SUBSCRIBE') {
    subscribeBtn.innerText = 'SUBSCRIBED';
  } else {
    subscribeBtn.innerText = 'SUBSCRIBE'
  }
})