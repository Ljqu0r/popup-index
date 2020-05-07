"use strict";

document.addEventListener("DOMContentLoaded", function () {
    var popupBtn = document.querySelector(".js-btn-popup");
    var popup = document.querySelector(".js-popup-wrapper");
    var popupClose = document.querySelectorAll(".js-popup-close");

    function popupShow(clickElement, showElement) {
        if (clickElement) {
            clickElement.addEventListener("click", function () {
                showElement.classList.remove("js-popup--hidden");
            });
        } else {
            return false;
        }
    }

    function popupHide(clickElement, hideElement) {
        for (var i = 0; i < clickElement.length; i++) {
            clickElement[i].addEventListener("click", function () {
                hideElement.classList.add("js-popup--hidden");
            });
        }
    }

    popupShow(popupBtn, popup);
    popupHide(popupClose, popup);
});
