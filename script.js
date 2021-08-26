"use strict";

const nav_trigger = document.querySelector(".nav-trigger");
const site_wrapper = document.querySelector(".site-content-wrapper");

nav_trigger.addEventListener("click", function () {
  site_wrapper.classList.toggle("scaled");
});
