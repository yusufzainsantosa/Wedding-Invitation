/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 510:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(336);
// Import Bootstrap JavaScript (optional, if you need Bootstrap's JS features)




console.log("Wedding Invitation Script Loaded!");

!(function () {
  "use strict";

  $(window).on("load", function () {
    $(".loader")
      .delay(600)
      .fadeOut("slow", function () {
        $(".main")
          .css({ visibility: "visible" })
          .fadeTo("slow", 1, function () {
            // Recalculate parallax after fading in
            $(window).trigger("resize");

            const scrollSpy = new bootstrap__WEBPACK_IMPORTED_MODULE_0__/* .ScrollSpy */ .I6(document.body, {
              target: "#navbar",
              offset: 70, // Adjust based on navbar height
            });
            scrollSpy.refresh();
          });
      });

    setTimeout(function () {
      $(".cover .display-tc").addClass("fade-in-up");
    }, 800);
  });

  document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.getElementById("navbar");
    const offcanvasNavbar = new bootstrap.Offcanvas("#offcanvasNavbar");

    window.addEventListener("scroll", function () {
      if (window.scrollY > 100) {
        navbar.classList.add("fixed-top");
      } else {
        navbar.classList.remove("fixed-top");
      }
    });

    navbar.addEventListener("click", function (event) {
      if (event.target.classList.contains("nav-link")) {
        console.log(event.target);
        offcanvasNavbar.hide();
      }
    });
  });

  var counterFunction = function () {
    $(".js-counter").countTo({
      formatter: function (value, options) {
        return value.toFixed(options.decimals);
      },
    });
  };

  var countdownFunction = function () {
    if (document.querySelector(".countdown")) {
      function initializeCountdown(elementId, endDate) {
        var countdownElement = document.getElementById(elementId);
        var daysElement = countdownElement.querySelector(".days");
        var hoursElement = countdownElement.querySelector(".hours");
        var minutesElement = countdownElement.querySelector(".minutes");
        var secondsElement = countdownElement.querySelector(".seconds");

        function updateCountdown() {
          var timeRemaining = calculateTimeRemaining(endDate);
          var days = String(timeRemaining.days).split("");
          var hours = String(("0" + timeRemaining.hours).slice(-2)).split("");
          var minutes = String(("0" + timeRemaining.minutes).slice(-2)).split(
            ""
          );
          var seconds = String(("0" + timeRemaining.seconds).slice(-2)).split(
            ""
          );

          daysElement.innerHTML = "";
          hoursElement.innerHTML = "";
          minutesElement.innerHTML = "";
          secondsElement.innerHTML = "";

          days.forEach(function (day) {
            var span = document.createElement("span");
            span.innerHTML = day;
            daysElement.appendChild(span);
          });

          hours.forEach(function (hour) {
            var span = document.createElement("span");
            span.innerHTML = hour;
            hoursElement.appendChild(span);
          });

          minutes.forEach(function (minute) {
            var span = document.createElement("span");
            span.innerHTML = minute;
            minutesElement.appendChild(span);
          });

          seconds.forEach(function (second) {
            var span = document.createElement("span");
            span.innerHTML = second;
            secondsElement.appendChild(span);
          });

          if (timeRemaining.total <= 0) {
            clearInterval(interval);
          }
        }

        function calculateTimeRemaining(endDate) {
          var total = Date.parse(endDate) - Date.parse(new Date());
          var seconds = Math.floor((total / 1000) % 60);
          var minutes = Math.floor((total / 1000 / 60) % 60);
          var hours = Math.floor((total / (1000 * 60 * 60)) % 24);
          var days = Math.floor(total / (1000 * 60 * 60 * 24));

          return {
            total: total,
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds,
          };
        }

        updateCountdown();
        var interval = setInterval(updateCountdown, 1000);
      }

      initializeCountdown("timer", "May 11 2025 08:00:00 GMT+0700");
    }
  };

  $(function () {
    $(".animate-box").waypoint(
      function (direction) {
        if (
          direction === "down" &&
          !$(this.element).hasClass("animated-fast")
        ) {
          $(this.element).addClass("item-animate");
          setTimeout(function () {
            $("body .animate-box.item-animate").each(function (index) {
              var element = $(this);
              setTimeout(
                function () {
                  var effect = element.data("animate-effect");
                  if (effect === "fade-in") {
                    element.addClass("fade-in animated-fast");
                  } else if (effect === "fade-in-left") {
                    element.addClass("fade-in-left animated-fast");
                  } else if (effect === "fade-in-right") {
                    element.addClass("fade-in-right animated-fast");
                  } else {
                    element.addClass("fade-in-up animated-fast");
                  }
                  element.removeClass("item-animate");
                },
                200 * index,
                "easeInOutExpo"
              );
            });
          }, 100);
        }
      },
      {
        offset: "85%",
      }
    );

    $(".owl-carousel-fullwidth").owlCarousel({
      items: 1,
      loop: true,
      margin: 0,
      responsiveClass: true,
      nav: false,
      dots: true,
      smartSpeed: 800,
      autoHeight: true,
    });

    counterFunction();

    if ($("#counter").length > 0) {
      $("#counter").waypoint(
        function (direction) {
          if (direction === "down" && !$(this.element).hasClass("animated")) {
            setTimeout(counterFunction, 400);
            $(this.element).addClass("animated");
          }
        },
        {
          offset: "90%",
        }
      );
    }

    countdownFunction();

    // Event details
    const title = encodeURIComponent("Yusuf & Latifah Wedding");
    const details = encodeURIComponent("Join us for our special day!");
    const location = encodeURIComponent(
      "Lemah Ledok Garden Resto, DIY, Indonesia"
    );
    const startDate = "20250511T010000Z"; // 08:00 AM GMT+7 → 01:00 AM UTC
    const endDate = "20250511T060000Z"; // 01:00 PM GMT+7 → 06:00 AM UTC

    // Google Calendar URL
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}&dates=${startDate}/${endDate}`;

    document.getElementById("saveToGoogle").href = googleCalendarUrl;

    var addButton = $(".add-button");
    var guestNameInput = $("#form-guest-name");
    var guestList = $(".guest-list");

    addButton.on("click", function (event) {
      event.preventDefault();
      var guestName = guestNameInput.val();
      var guestEntry =
        '<div><input class="form-control" type="text" value="' +
        guestName +
        '"/><a href="#" class="remove_field"><i class="fa fa-trash"></i></a></div>';
      if (guestName === "") {
        guestNameInput.focus();
      } else {
        guestList.append(guestEntry);
        guestNameInput.val("");
      }
    });

    $(".guest-list").on("click", ".remove_field", function (event) {
      event.preventDefault();
      $(this).parent("div").remove();
    });

    var grid = $(".grid");
    grid.imagesLoaded(function () {
      grid.isotope({
        itemSelector: ".grid-item",
        percentPosition: true,
        masonry: {
          columnWidth: ".grid-sizer",
        },
        getSortData: {
          moments: ".moments",
          category: "[data-category]",
          weight: function (element) {
            var weight = $(element).find(".weight").text();
            return parseFloat(weight.replace(/[\(\)]/g, ""));
          },
        },
      });
    });

    var filters = {
      numberGreaterThan50: function () {
        var number = $(this).find(".number").text();
        return parseInt(number, 10) > 50;
      },
      ium: function () {
        return $(this).find(".name").text().match(/ium$/);
      },
    };

    $(".filters-button-group").on("click", "button", function () {
      var filterValue = $(this).attr("data-filter");
      filterValue = filters[filterValue] || filterValue;
      grid.isotope({
        filter: filterValue,
      });
    });

    $(".button-group").each(function (index, group) {
      var buttonGroup = $(group);
      buttonGroup.on("click", "button", function () {
        buttonGroup.find(".is-checked").removeClass("is-checked");
        $(this).addClass("is-checked");
      });
    });

    var contactForm = $("#contact-form");
    $(".form-control").on("focus blur", function (event) {
      if ($(event.target).val() === "") {
        if (event.type === "focus") {
          $(event.target).next(".control-label").addClass("filled");
        } else if (event.type === "blur") {
          $(event.target).next(".control-label").removeClass("filled");
        }
      }
    });

    contactForm.submit(function (event) {
      event.preventDefault();
      console.log("submit form");

      // Disable the submit button
      var submitButton = $(this).find('button[type="submit"]');
      submitButton.prop("disabled", true);

      $(".form-group").removeClass("has-error");
      $(".help-block").remove();
      var guests = [];
      $(".guest-list input").each(function () {
        guests.push(this.value);
      });

      if (!$('.switch-field input[type="radio"]:checked').length) {
        $("#error-message").show(); // Show error message
        submitButton.prop("disabled", false); // Re-enable the submit button
        return;
      } else {
        $("#error-message").hide(); // Hide error message

        var formData = {
          name: $('input[name="form-name"]').val(),
          congratulations_message: $('input[name="form-congrat-msg"]').val(),
          attending: $('.switch-field input[type="radio"]:checked').val(),
          guest: guests,
        };

        // Define the Web App URL
        const webAppUrl =
          "https://script.google.com/macros/s/AKfycbyBd7fSXNlp9v9hK9AQL9OGtN1FL_ucd6J7rWHInFITY-87eJrg1PGs_7xj3IqT-cCEog/exec";

        // Send the data to the Google Apps Script
        fetch(webAppUrl, {
          method: "POST",
          headers: {
            "Content-Type": "text/plain;charset=utf-8",
          },
          body: JSON.stringify(formData),
        })
          .then((response) => response.text())
          .then((result) => {
            console.log("Success:", result);
            contactForm[0].reset();
            $(".guest-list").empty();
            $(".control-label").removeClass("filled");
          })
          .catch((error) => {
            console.error("Error:", error);
            alert("An error occurred. Please try again."); // Show error message
          })
          .finally(() => {
            submitButton.prop("disabled", false); // Re-enable the submit button
          });
      }
    });
  });
})();


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			792: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkwedding_invitation"] = self["webpackChunkwedding_invitation"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [336], () => (__webpack_require__(510)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;