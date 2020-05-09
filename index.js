"use strict";

document.addEventListener("DOMContentLoaded", function () {
    // var popupBtn = document.querySelector(".js-btn-popup");
    // var popup = document.querySelector(".js-popup-wrapper");
    // var popupClose = document.querySelectorAll(".js-popup-close");

    // function popupShow(clickElement, showElement) {
    //     if (clickElement) {
    //         clickElement.addEventListener("click", function () {
    //             showElement.classList.remove("js-popup--hidden");
    //         });
    //     } else {
    //         return false;
    //     }
    // }

    // function popupHide(clickElement, hideElement) {
    //     for (var i = 0; i < clickElement.length; i++) {
    //         clickElement[i].addEventListener("click", function () {
    //             hideElement.classList.add("js-popup--hidden");
    //         });
    //     }
    // }

    // popupShow(popupBtn, popup);
    // popupHide(popupClose, popup);

    // ________________________________________________________________________________________________

    // var modalOpenBtn = document.querySelectorAll(".js-btn-popup");
    // var modalPopup = document.querySelectorAll(".js-popup-wrapper");
    // var modalCloseBtn = document.querySelectorAll(".js-popup-close");

    // function popupArr(element, func) {
    //     for (var i = 0; i < element.length; i++) {
    //         element[i].addEventListener("click", func);
    //     }
    // }

    // popupArr(modalOpenBtn, modalShow);

    // function modalShow() {
    //     for (var i = 0; i < modalPopup.length; i++) {
    //         if (modalPopup[i].classList.contains("js-popup--hidden")) {
    //             modalPopup[i].classList.remove("js-popup--hidden");
    //         } else {
    //             return false;
    //         }
    //     }
    // }

    // function modalClose() {
    //     for (var i = 0; i < modalPopup.length; i++) {
    //         if (!modalPopup[i].classList.contains("js-popup--hidden")) {
    //             modalPopup[i].classList.add("js-popup--hidden");
    //         } else {
    //             return false;
    //         }
    //     }
    // }

    // popupArr(modalCloseBtn, modalClose);

    var modalOpenBtn = document.querySelectorAll(".js-btn-popup");
    var modalPopup = document.querySelectorAll(".js-popup-wrapper");
    var modalCloseBtn = document.querySelectorAll(".js-popup-close");

    function popupArr(element, func) {
        for (var i = 0; i < element.length; i++) {
            element[i].addEventListener("click", func);
        }
    }

    function modalShow() {
        var data = this.getAttribute("data-open");
        document.querySelector(`.js-popup-wrapper[data-${data}="${data}"]`).classList.remove("js-popup--hidden");
    }

    function modalClose() {
        var data = this.getAttribute("data-close");
        document.querySelector(`.js-popup-wrapper[data-${data}="${data}"]`).classList.add("js-popup--hidden");
    }

    popupArr(modalOpenBtn, modalShow);
    popupArr(modalCloseBtn, modalClose);
});
