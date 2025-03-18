// Import Bootstrap JavaScript (optional, if you need Bootstrap's JS features)
import * as bootstrap from "bootstrap";

import "../styles/styles.scss";

console.log("Wedding Invitation Script Loaded!");

(function () {
  "use strict";

  // ============================
  // 1. PAGE LOADER
  // ============================
  $(window).on("load", function () {
    $(".loader")
      .delay(600)
      .fadeOut("slow", function () {
        $(".main")
          .css({ visibility: "visible" })
          .fadeTo("slow", 1, function () {
            // Recalculate parallax after fading in
            $(window).trigger("resize");

            const scrollSpy = new bootstrap.ScrollSpy(document.body, {
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

  // ============================
  // 2. FIXED NAVBAR ON SCROLL
  // ============================
  $(document).ready(function () {
    const navbar = $("#navbar");
    const offcanvasNav = new bootstrap.Offcanvas("#offcanvasNavbar");

    $(window).on("scroll", function () {
      if ($(window).scrollTop() > 100) {
        navbar.addClass("fixed-top");
      } else {
        navbar.removeClass("fixed-top");
      }
    });

    navbar.on("click", ".nav-link", function () {
      offcanvasNav.hide();
    });
  });

  // ============================
  // 3. COUNTER ANIMATION
  // ============================
  function animateCounter() {
    $(".js-counter").countTo({
      formatter: function (value, options) {
        return value.toFixed(options.decimals);
      },
    });
  }

  // ============================
  // 4. COUNTDOWN TIMER
  // ============================
  function startCountdown(id, targetDate) {
    const container = $("#" + id);
    if (!container.length) return;

    function updateCountdown() {
      const timeLeft = getTimeRemaining(targetDate);

      container.find(".days").text(timeLeft.days);
      container.find(".hours").text(("0" + timeLeft.hours).slice(-2));
      container.find(".minutes").text(("0" + timeLeft.minutes).slice(-2));
      container.find(".seconds").text(("0" + timeLeft.seconds).slice(-2));

      if (timeLeft.total <= 0) clearInterval(timerInterval);
    }

    function getTimeRemaining(endtime) {
      const total = Date.parse(endtime) - Date.parse(new Date());
      return {
        total,
        days: Math.floor(total / (1000 * 60 * 60 * 24)),
        hours: Math.floor((total / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((total / 1000 / 60) % 60),
        seconds: Math.floor((total / 1000) % 60),
      };
    }

    updateCountdown();
    var timerInterval = setInterval(updateCountdown, 1000);
  }

  // ============================
  // 5. ANIMATIONS ON SCROLL
  // ============================
  function animateOnScroll() {
    $(".animate-box").waypoint(
      function (direction) {
        if (
          direction === "down" &&
          !$(this.element).hasClass("animated-fast")
        ) {
          $(this.element).addClass("item-animate");

          setTimeout(function () {
            $(".animate-box.item-animate").each(function (index) {
              let effect = $(this).data("animate-effect") || "fade-in-up";
              $(this)
                .addClass(effect + " animated-fast")
                .removeClass("item-animate");
            });
          }, 100);
        }
      },
      { offset: "85%" }
    );
  }

  // ============================
  // 6. OWL CAROUSEL SETUP
  // ============================
  function setupOwlCarousel() {
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
  }

  // ============================
  // 7. FORM HANDLING
  // ============================
  function setupFormHandling() {
    $(".form-control").on("focus blur", function (event) {
      if ($(event.target).val() === "") {
        if (event.type === "focus") {
          $(event.target).next(".control-label").addClass("filled");
        } else if (event.type === "blur") {
          $(event.target).next(".control-label").removeClass("filled");
        }
      }
    });
    $("#contact-form").on("submit", function (event) {
      event.preventDefault();

      let formData = {
        name: $('input[name="form-name"]').val(),
        email: $('input[name="form-email"]').val(),
        attending: $('.switch-field input[type="radio"]:checked').attr("id"),
        guest: $(".guest-list input")
          .map(function () {
            return this.value;
          })
          .get()
          .join(", "),
      };

      $.ajax({
        type: "POST",
        url: "form.php",
        data: formData,
        dataType: "json",
      }).done(function (response) {
        if (response.success) {
          $("#contact-form").html(
            '<div class="message-success">' + response.message + "</div>"
          );
        } else {
          if (response.errors.name) {
            $("#name-field")
              .addClass("has-error")
              .find(".col-sm-6")
              .append(
                '<span class="help-block">' + response.errors.name + "</span>"
              );
          }
          if (response.errors.email) {
            $("#email-field")
              .addClass("has-error")
              .find(".col-sm-6")
              .append(
                '<span class="help-block">' + response.errors.email + "</span>"
              );
          }
        }
      });
    });
  }

  // ============================
  // 8. IMAGE GRID FILTERING (ISOTOPE)
  // ============================
  function setupIsotope() {
    let grid = $(".grid");
    if (!grid.length) return;

    grid.imagesLoaded(function () {
      grid.isotope({
        itemSelector: ".grid-item",
        percentPosition: true,
        masonry: { columnWidth: ".grid-sizer" },
      });
    });

    $(".filters-button-group").on("click", "button", function () {
      let filterValue = $(this).attr("data-filter");
      grid.isotope({ filter: filterValue });
    });

    $(".button-group").each(function () {
      $(this).on("click", "button", function () {
        $(this).siblings().removeClass("is-checked");
        $(this).addClass("is-checked");
      });
    });
  }

  // ============================
  // 9. INITIATE FUNCTIONS ON DOCUMENT READY
  // ============================
  $(function () {
    animateOnScroll();
    setupOwlCarousel();
    animateCounter();
    setupFormHandling();
    setupIsotope();
    startCountdown("timer", "May 11 2025 07:00:00 GMT+0700");
  });
})();
