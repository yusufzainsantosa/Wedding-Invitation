// Import Bootstrap JavaScript (optional, if you need Bootstrap's JS features)
import { ScrollSpy, Offcanvas } from "bootstrap";

import "../styles/styles.scss";

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

            const scrollSpy = new ScrollSpy(document.body, {
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
    const offcanvasNavbar = new Offcanvas("#offcanvasNavbar");

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

    // Handle different parameter
    const params = new URLSearchParams(window.location.search);
    const giftSection = document.getElementById("gift-section");

    // Check if URL contains ?invitation
    if (
      params.get("view") == "invitation" ||
      params.get("view") == "ngunduh-mantu"
    ) {
      giftSection.style.display = "block"; // Show the section
    } else {
      giftSection.style.display = "none"; // Hide the section
    }

    if (params.get("view") == "ngunduh-mantu") {
      document
        .querySelectorAll(".part-resepsi")
        .forEach((el) => (el.style.display = "none"));
      document
        .querySelectorAll(".part-ngunduh_mantu")
        .forEach((el) => (el.style.display = "block"));
      document
        .querySelector(".about_us-one")
        .classList.replace("order-1", "order-3");
      document
        .querySelector(".about_us-three")
        .classList.replace("order-3", "order-1");
    }

    const counter = document.querySelector(".days-together");

    // Start date: March 3, 2021
    const startDate = new Date(2021, 2, 3); // March (0-based index)
    const currentDate = new Date();

    // Calculate total days
    const timeDifference = currentDate - startDate;
    const totalDays = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    // Set `data-to` dynamically
    counter.setAttribute("data-to", totalDays);
    counter.textContent = totalDays; // Directly update the counter
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

      const params = new URLSearchParams(window.location.search);
      if (params.get("view") == "ngunduh-mantu") {
        initializeCountdown("timer", "May 17 2025 08:00:00 GMT+0700");
      } else {
        initializeCountdown("timer", "May 11 2025 08:00:00 GMT+0700");
      }
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
      autoplay: true, // Enables automatic sliding
      autoplayTimeout: 2000, // Time between slides (in milliseconds)
      autoplayHoverPause: true, // Pauses on hover
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
      const params = new URLSearchParams(window.location.search);
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
        var event = "resepsi";
        if (params.get("view") == "ngunduh-mantu") {
          event = "ngunduh mantu";
        }

        var formData = {
          name: $('input[name="form-name"]').val(),
          congratulations_message: $('input[name="form-congrat-msg"]').val(),
          attending: $('.switch-field input[type="radio"]:checked').val(),
          guest: guests,
          event: event,
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

    async function fetchData() {
      try {
        const sheetURL =
          "https://script.google.com/macros/s/AKfycbyBd7fSXNlp9v9hK9AQL9OGtN1FL_ucd6J7rWHInFITY-87eJrg1PGs_7xj3IqT-cCEog/exec";
        const response = await fetch(sheetURL);
        const data = await response.json();
        data.reverse();

        const $carousel = $(".owl-carousel-fullwidth");
        $carousel.trigger("destroy.owl.carousel"); // Destroy old carousel instance
        $carousel.empty(); // Clear old items

        // Add new items
        data.forEach((row) => {
          $carousel.append(`
            <div class="item">
              <div class="testimony-slide active text-center">
                <span>${row.Nama}</span>
                <blockquote>
                  <p>"${row["Ucapan Selamat"]}"</p>
                </blockquote>
              </div>
            </div>
          `);
        });

        // Reinitialize Owl Carousel
        $carousel.owlCarousel({
          items: 1,
          loop: true,
          margin: 0,
          responsiveClass: true,
          nav: false,
          dots: true,
          smartSpeed: 800,
          autoHeight: true,
          autoplay: true, // Enables automatic sliding
          autoplayTimeout: 2000, // Time between slides (in milliseconds)
          autoplayHoverPause: true, // Pauses on hover
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    // Just call the function directly
    fetchData();
  });
})();
