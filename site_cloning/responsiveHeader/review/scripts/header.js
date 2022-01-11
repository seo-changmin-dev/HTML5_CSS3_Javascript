window.onload = () => {
  const btn_toggle = document.querySelector(".header-toggle-btn");
  const gnb_ctr = document.querySelector(".header-gnb");
  const link_ctr = document.querySelector(".header-links");


  btn_toggle.onclick = () => {
    gnb_ctr.classList.toggle('active');
    link_ctr.classList.toggle('active');
  }
}