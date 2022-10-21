const linksToModule = {
  "main": '.main_display',
  "aboutUs": '.about_us_display',
  "rules": '.rules_display',
  "contact": '.contact_display',
  "etc": '.etc_display',
  "service1" : '.service_first',
  "service2" : '.service_second',
  "service3" : '.service_third'
}

let selectedModule = document.querySelector('.visible_block');

function changeBlock(selectedTab) {
  if (selectedTab) {
    const key = selectedTab.dataset.menu;
    let elSelector = linksToModule[key];
    const el = document.querySelector(elSelector);
    if (el) {
      if (selectedModule) {
        selectedModule.classList.remove('visible_block');
      }
      selectedModule = el;
      selectedModule.classList.add('visible_block');
    }
  }
}

const navMenu = document.getElementsByClassName('nav');
for(const menu of navMenu){
  menu.addEventListener('click', function (event) {
    const target = event.target; 
  
    if (target?.tagName === 'A') {
      changeBlock(target);
    }
  })
}

emailInput.onblur = function () {
  if (!emailInput.value.includes('@')) {
    emailInput.classList.add('invalid');
  }
};

emailInput.onfocus = function () {
  if (this.classList.contains('invalid')) {
    this.classList.remove('invalid');
  }
}

/* let tooltipElem;

    document.onmouseover = function(event) {
      let target = event.target;

      let tooltipHtml = target.dataset.tooltip;
      if (!tooltipHtml) return;

      tooltipElem = document.createElement('div');
      tooltipElem.className = 'tooltip';
      tooltipElem.innerHTML = tooltipHtml;
      document.body.append(tooltipElem);

      let coords = target.getBoundingClientRect();

      let left = coords.left + (target.offsetWidth - tooltipElem.offsetWidth) / 2;
      if (left < 0) left = 0; 

      let top = coords.top - tooltipElem.offsetHeight - 5;
      if (top < 0) { 
        top = coords.top + target.offsetHeight + 5;
      }

      tooltipElem.style.left = left + 'px';
      tooltipElem.style.top = top + 'px';
    };

    document.onmouseout = function(e) {

      if (tooltipElem) {
        tooltipElem.remove();
        tooltipElem = null;
      }

    };
*/
