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


})