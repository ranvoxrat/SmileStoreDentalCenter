"use strict";


// DOM Element Selection
const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
const mobileMenuOverlay = document.getElementById("mobile-menu-overlay");
const mobileMenuContainer = document.getElementById("mobile-menu-container");
const mobileMenuClose = document.getElementById("close-button");
const preLoader = document.querySelector(".preload-container");
const sections = document.querySelectorAll(".section");
const servicesItem = document.querySelectorAll(".services-item");
const servicesContents = document.querySelector(".services-contents");
const servicesMoreButton = document.querySelector(".services-more");
const aElement = document.querySelectorAll("a");

const newPatientCheckbox = document.getElementById('new-patient');
const referralWrapper = document.getElementById('referral-source-wrapper');

// PreLoader
window.addEventListener("load", function(){
    this.setTimeout(function(){
        preLoader.classList.add("preload-hidden");
    }, 2000);
    this.setTimeout(function(){
        preLoader.remove();
    }, 3000);
});


// Mobile Menu Handler
const mobileMenuShow = function() {
    mobileMenuOverlay.classList.remove("hidden");
    mobileMenuContainer.style.left = "0px";
};
const mobileMenuHidden = function() {
    mobileMenuOverlay.classList.add("hidden");
    mobileMenuContainer.style.left = "-320px";
};
mobileMenuToggle.addEventListener("click", mobileMenuShow);
mobileMenuOverlay.addEventListener("click", mobileMenuHidden);
mobileMenuClose.addEventListener("click", mobileMenuHidden);


// SwiperJS
const swiperTestimonial = new Swiper('.swiper-1', {
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 2000,
        pauseOnMouseEnter: true,
    },
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

const swiperBlogPost = new Swiper('.swiper-2', {
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 2000,
        pauseOnMouseEnter: true,
    },
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
        1280: {
            slidesPerView: 4,
        }
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});


// Services Fade Animation
servicesItem.forEach(function(item, i, arr){
    item.addEventListener("mouseenter", function(){
        arr.forEach(function(item){
            item.style.opacity = "0.5";
        });
        item.style.opacity = "1";
        servicesContents.style.opacity = "0.5";
        servicesMoreButton.style.opacity = "0.5";
    });
});

servicesItem.forEach(function(item, i, arr){
    item.addEventListener("mouseleave", function(){
        arr.forEach(function(item){
            item.style.opacity = "1";
        });
        servicesContents.style.opacity = "1";
        servicesMoreButton.style.opacity = "1";
    });
});


// Section fade in Animation
sections.forEach(function(param) {
    param.classList.add("section-fade");
});
const sectionEffectCallback = function(entries) {
    const [entry] = entries;
    if (entry.isIntersecting) {
        entry.target.classList.remove("section-fade");
        sectionEffect.unobserve(entry.target);
    };
};
const sectionEffect = new IntersectionObserver(sectionEffectCallback, {
    root: null,
    threshold: 0,
});
sections.forEach(function(param) {
    sectionEffect.observe(param);
});


// <a> Element PreventDefault
aElement.forEach(function(item){
    item.addEventListener("click", function(e){
        e.preventDefault();
    });
});



    
    document.addEventListener('DOMContentLoaded', () => {
    // Toggle hidden services
    const toggleButton = document.getElementById('toggleServices');
    const hiddenServices = document.querySelectorAll('#services-list .services-item.hidden');
    let expanded = false;

    if (toggleButton) {
        toggleButton.addEventListener('click', () => {
            expanded = !expanded;
            hiddenServices.forEach(item => item.classList.toggle('hidden', !expanded));
            toggleButton.innerHTML = expanded
                ? `Show less <svg class="w-5 h-5"><use href="#arrow-right-circle"></use></svg>`
                : `View all service list <svg class="w-5 h-5"><use href="#arrow-right-circle"></use></svg>`;
        });
    }

    // Booking modal open/close
    window.openBookingModal = function () {
        document.getElementById('bookingModal')?.classList.remove('hidden');
    };
    window.closeBookingModal = function () { 
        document.getElementById('bookingModal')?.classList.add('hidden');
    };

    // Appointment modal open/close
    window.toggleModal = function (close = false) {
        const modal = document.getElementById('appointment-wrapper');
        if (!modal) return;
        modal.classList.toggle('hidden', close);
    };
});

  document.addEventListener('DOMContentLoaded', () => {
    const newPatientCheckbox = document.getElementById('new-patient');
    const referralWrapper = document.getElementById('referral-source-wrapper');

    newPatientCheckbox.addEventListener('change', function () {
        if (this.checked) {
            referralWrapper.classList.remove('hidden');
            setTimeout(() => referralWrapper.classList.add('opacity-100'), 10);
            referralWrapper.classList.remove('opacity-0');
        } else {
            referralWrapper.classList.remove('opacity-100');
            referralWrapper.classList.add('opacity-0');
            setTimeout(() => referralWrapper.classList.add('hidden'), 300);
        }
    });
});