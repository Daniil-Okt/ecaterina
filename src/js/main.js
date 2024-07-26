/**
 * !(i)
 * Код попадает в итоговый файл, только когда вызвана функция, например FLSFunctions.spollers();
 * Или когда импортирован весь файл, например import "files/script.js";
 * Неиспользуемый код в итоговый файл не попадает.

 * Если мы хотим добавить модуль следует его раскомментировать
 */
// import MousePRLX from './libs/parallaxMouse'
// import AOS from 'aos'
import Swiper, { Navigation, Pagination } from 'swiper';

import BaseHelpers from './helpers/base-helpers';
import PopupManager from './modules/popup-manager';
import BurgerMenu from './modules/burger-menu';
// import Tabs from './modules/tabs';
// import Accordion from './modules/accordion';

BaseHelpers.checkWebpSupport();
/* Добавление класса touch для HTML если браузер мобильный */
// BaseHelpers.addTouchClass();
/* Добавление loaded для HTML после полной загрузки страницы */
BaseHelpers.addLoadedClass();
/* Фиксированный header */
// BaseHelpers.headerFixed();


/** ===================================================================================
 * Открытие/закрытие модальных окон
 * Чтобы модальное окно открывалось и закрывалось
 * На окно повешай атрибут data-popup="<название окна>"
 * На кнопку, которая вызывает окно повешай атрибут data-type="<название окна>"

 * На обертку(.popup) окна добавь атрибут '[data-close-overlay]'
 * На кнопку для закрытия окна добавь класс '.button-close'
 * */
// new PopupManager();

/** ===================================================================================
 *  Модуль для работы с меню (Бургер)
 * */
new BurgerMenu().init();

/** ===================================================================================
 *  Библиотека для анимаций
 *  документация: https://michalsnik.github.io/aos
 * */
// AOS.init();

/** ===================================================================================
 * Параллакс мышей
 * */
// new MousePRLX();


/* ТАБЫ ================================================================================================
 	* На wrapper блока табов добавить атрибут data-tabs="название"
	* Для обертки title табов добавить класс "tabs__nav"
	* Для title таба добавить класс "tabs__trigger"
	* Для обертки body табов добавить класс "tabs__content"
	* Для body таба добавить класс "tabs__panel"
*/
// new Tabs('название', {
// 	onChange: (data) => {
// 		console.log(data);
// 	},
// });
/* АККАРДЕОН ===========================================================================================
 	* Класс wrapper блока аккардеона добавить в инициализацию аккардиона
	* Каждый элемент аккардеона обернуть в блок с классом "accordion__item"
	* Для title аккардеона добавить класс "accordion__header"
	* Для content аккардеона добавить класс "accordion__content"
*/
// new Accordion('.accordion', {
// 	shouldOpenAll: false, // true
// 	defaultOpen: [], // [0,1]
// 	collapsedClass: 'open',
// });

/* Динамический адаптив =================================================================================
* Что бы перебросить блок в другой блок, повешай на него атрибут:
* data-da="class блока куда нужно перебросить, брекпоинт(ширина экрана), позиция в блоке(цифра либо first,last)"
*/
/*Расскоментировать для использования*/
// import { useDynamicAdapt } from './modules/dynamicAdapt.js'
// useDynamicAdapt()

/* Маска для инпута tel =================================================================================
	* Добавить класс tel к нужному инпуту 
*/
// import { maskTel } from './modules/index.js'
// maskTel()

/* Cкрыть меню при клике на его ссылки ==================================================================
*/
import { toggleLinkMenuNoOpen } from './modules/index.js'
toggleLinkMenuNoOpen()

/* Cкрыть меню при клике вне его ========================================================================
	* Добавить к меню класс 'your-menu'
*/
// import { toggleLinkMenuNoOpen } from './modules/index.js'
// toggleOutClickMenuRemoveOpen()

/* Удалить класс _active при клике вне элемента =========================================================
	* Передать в функцию нужный элемент и класс который нужно удалить
*/
// import { removeClassOutClickElement } from './modules/index.js'
// const elements = document.querySelectorAll('.class'); 
// removeClassOutClickElement(elements, '.removeClass')

/* Инициализация  swiper =================================================================================
*/
const swiper = new Swiper('.records__swiper', {
  speed: 1300,
  spaceBetween: 20,
  slidesPerView: 1,
  modules: [Navigation, Pagination],
//   loop: true,
  initialSlide: 0,
//   autoplay: {
//     delay: 2500,
//     stopOnLastSlide: false,
//     disableOnIteration: false,
//   },
  navigation: {
    prevEl: ".records__button-prev",
    nextEl: ".records__button-next"
  },
//   pagination: {
//     el: ".card-slider__pagination",
//     dynamicBullets: true,
//     clickable: true,
//   },
  breakpoints: {
    1340: {
        slidesPerView: 'auto',
        spaceBetween: 20,
    }
  },
});

// const swiperGallery = new Swiper('.gallery__swiper', {
// 	speed: 1300,
// 	spaceBetween: 16,
// 	slidesPerView: 'auto',
// 	modules: [Navigation, Pagination],
// 	initialSlide: 0,
// 	navigation: {
// 	  prevEl: ".records__button-prev",
// 	  nextEl: ".records__button-next"
// 	},
// 	// breakpoints: {
// 	//   769: {
// 	// 	  slidesPerView: 'auto',
// 	// 	  spaceBetween: 20,
// 	//   }
// 	// },
//   });

/* Валидация формы ======================================================================================
* В константу записывает нужную форму
* В переменную formNAME передаем форму
* В переменную popupTranks передаем окно благодарности
* Добавить класс _email на input type='mail'
* Добавить класс tel на input type='tel'
* Добавить каласс _req на input которые нужно проверить
* Добавить класс .popup-thanks для модального окна спасибо
  Раскоментировать для использования
*/ 
// import { validForm } from './modules/validFrom.js'
// const popupTranks = document.querySelector('.popup-thanks')
// const formNAME = document.getElementById('form-NAME')
// validForm(fromName, popupTranks)
// =======================================================================================================

/* Добавление класса _active родителю при клике ==========================================================
	* Вызвать функцию и передать в нее массив нужных элементов
	* При клике на элемент, у всех элементов класс удаляется
*/
// import { toggleActiveClassParent } from './modules/index.js'
// const elementAll = document.querySelectorAll('.class');
// toggleActiveClassParent(elementAll)

/* Динамический класса _active элементу при клике ========================================================
	* Вызвать функцию и передать в нее массив нужных элементов
	* При клике на элемент, у всех элементов класс удаляется
*/
// import { toggleActiveClass } from './modules/index.js'
// const elementAll = document.querySelectorAll('.class');
// toggleActiveClass(elementAll)



const albumsItems = document.querySelectorAll('.albums-item')
if (albumsItems.length > 0) {
	albumsItems.forEach(item => {
		item.addEventListener('click', () => {
			item.classList.toggle('active')
		})
	});
}


//вставка видео ==========================================================
"use strict";
function r(f) {
  /in/.test(document.readyState)
    ? setTimeout(function () {
        r(f);
      }, 9)
    : f();
}

r(function () {
  if (!document.getElementsByClassName) {
    // IE8 support
    var getElementsByClassName = function (node, classname) {
      var a = [];
      var re = new RegExp("(^| )" + classname + "( |$)");
      var els = node.getElementsByTagName("*");
      for (var i = 0, j = els.length; i < j; i++)
        if (re.test(els[i].className)) a.push(els[i]);
      return a;
    };
    var videos = getElementsByClassName(document.body, "youtube");
  } else {
    var videos = document.getElementsByClassName("youtube");
  }

  var nb_videos = videos.length;
  for (var i = 0; i < nb_videos; i++) {
    // Based on the YouTube ID, we can easily find the thumbnail image
    videos[i].style.backgroundImage =
      "url(http://i.ytimg.com/vi/" + videos[i].id + "/sddefault.jpg)";

    // Overlay the Play icon to make it look like a video player
    var play = document.createElement("div");
    play.className = "play"; // Use `className` instead of `setAttribute("class", ...)`
    videos[i].appendChild(play);

    videos[i].onclick = function () {
      // Create an iFrame with autoplay set to true
      var iframe = document.createElement("iframe");
      var iframe_url =
        "https://www.youtube.com/embed/" +
        this.id +
        "?autoplay=1&autohide=1";
      if (this.getAttribute("data-params")) iframe_url += "&" + this.getAttribute("data-params");
      iframe.setAttribute("src", iframe_url);
      iframe.setAttribute("frameborder", "0");
	  iframe.setAttribute("allowfullscreen", "1");
	  iframe.setAttribute("autoplay", "1");
	  

      // The height and width of the iFrame should be the same as parent
      iframe.style.width = this.style.width;
      iframe.style.height = this.style.height;

      // Replace the YouTube thumbnail with YouTube Player
      this.parentNode.replaceChild(iframe, this);
	//   iframe.click();
    };
  }
});
