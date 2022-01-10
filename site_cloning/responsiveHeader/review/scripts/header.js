window.onload = () => {
  const btn_toggle = document.querySelector(".header-toggle-btn");
  const gnb_ctr = document.querySelector(".header-gnb");
  const link_ctr = document.querySelector(".header-links");


  btn_toggle.onclick = () => {
    const is_hidden = !gnb_ctr.style.display;

    if(is_hidden) {
      gnb_ctr.style.display = "none";
      link_ctr.style.display = "none";
    } else {
      gnb_ctr.style.display = "";
      link_ctr.style.display = "";
    }
  }
}