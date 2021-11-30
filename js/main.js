document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.swiper', {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  })
  const tabsItems = document.querySelectorAll('.tabs__item');
  const tabsContents = document.querySelectorAll('.tabs__content');
  tabsItems.forEach(item => {
    item.addEventListener('click', () => {
      removeClassActive(tabsItems);
      item.classList.add('active');
      let index = item.dataset.tab;

      removeClassActive(tabsContents);
      tabsContents[index].classList.add('active')

    })
  })

  function removeClassActive(mass) {
    mass.forEach(item => item.classList.remove('active'));
  }
  const mapClose = document.querySelector('.map__close');
  const contactsMap = document.querySelector('.contacts__map');
  const map = document.querySelector('.map');
  contactsMap.addEventListener('click', () => {
    map.classList.add('active')
  });
  mapClose.addEventListener('click', () => map.classList.remove('active'));

  const tabs__content = document.querySelectorAll('.tabs__content img');
  window.addEventListener('mousemove', (e) => {
    let x = e.clientX / 50;
    let y = e.clientY / 50;
    tabs__content.forEach(item => {
      item.style.transform = `translate(${x}px, ${y}px)`
    })

  })

  const footerLogo = document.querySelector('.footer__logo');
  let a = 0;
  let b = 255;
  let c = 11;
  setInterval(() => {
    /* footerLogo.style.backgroundColor = `rgb(${GetRandom()},${GetRandom()},${GetRandom()})` */
    footerLogo.style.backgroundColor = `rgb(${a++},${b--},${c++})`
  }, 100);

  function GetRandom() {
    return Math.floor(Math.random() * (255 - 0) + 0);
  }
})