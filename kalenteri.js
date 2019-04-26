(function iife() {
    "use strict";
    function closestEl(el, selector) {
        var doc = el.document || el.ownerDocument;
        var matches = doc.querySelectorAll(selector);
        var i;
        while (el) {
            i = matches.length - 1;
            while (i >= 0) {
                if (matches.item(i) === el) {
                    return el;
                }
                i -= 1;
            }
            el = el.parentElement;
        }
        return el;
    }
    var modalBtns = document.querySelectorAll(".button");
    modalBtns.forEach(function addBtnClickEvent(btn) {
        btn.onclick = function showModal() {
            var modal = btn.getAttribute("data-modal");
            document.getElementById(modal).style.display = "block";
        };
    });

    var closeBtns = document.querySelectorAll(".close");
    closeBtns.forEach(function addCloseClickEvent(btn) {
        btn.onclick = function closeModal() {
            var modal = closestEl(btn, ".modal");
            modal.style.display = "none";
        };
    });

    window.onclick = function closeOnClick(event) {
        if (event.target.className === "modal") {
            event.target.style.display = "none";
        }
    };
}());
var openingDates = [new Date("October, 1, 1998 00:00:00"),
             new Date("May 20, 2019 00:00:01"), 
             new Date("May 27, 2019 00:00:01")]
var thisDay = new Date()
//onko kuluva hetki suurempi kuin viikon 1 avauspäivä
if (thisDay>=openingDates[1]){

} 
