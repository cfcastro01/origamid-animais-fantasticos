//Navegação por tabs
function initTabNav() { 
  // colocar o código dentro de uma função caso queira usar uma const com mesmo nome.
  const tabMenu = document.querySelectorAll('.js-tabmenu img');
  const tabContent = document.querySelectorAll('.js-tabcontent section');

  if(tabMenu.length && tabContent.length) {
      tabContent[0].classList.add('ativo');

      function activeTab(index) {
        tabContent.forEach((section) => {
          section.classList.remove('ativo');
        }); 
        tabContent[index].classList.add('ativo');
      }

      tabMenu.forEach((imgMenu, index) => {
        imgMenu.addEventListener('click', function(){
          activeTab(index);
        })
      })
    }
}
initTabNav(); // iniciar a função;

// Accordion List
function initAccordion() {
  const accordionList = document.querySelectorAll('.js-accordion dt');
  const activeClass = 'ativo';
  
  if(accordionList.length) {
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);

    function activeAccordion() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }

    accordionList.forEach((item) => {
      item.addEventListener('click', activeAccordion);
    });
  }
}
initAccordion();

//Scroll suave para links internos

function initScrollSuave() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();

    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  });
}
initScrollSuave();
