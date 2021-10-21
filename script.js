"use strict";

const nav_trigger = document.querySelector(".nav-trigger");
const site_wrapper = document.querySelector(".site-content-wrapper");

nav_trigger.addEventListener("click", function () {
  site_wrapper.classList.toggle("scaled");
});

const hero_more = document.getElementById("hero-more");
const hero_btn = document.getElementById("hero-readbtn");
var i = 0;
function read() {
  if (!i) {
    hero_more.style.display = "inline";
    hero_btn.innerHTML = "Read Less";
    i = 1;
  } else {
    hero_more.style.display = "none";
    hero_btn.innerHTML = "Read More";
    i = 0;
  }
}

const meal_more = document.getElementById("meal-more");
const meal_btn = document.getElementById("meal-readbtn");
var j = 0;
function mread() {
  if (!j) {
    meal_more.style.display = "inline";
    meal_btn.innerHTML = "Read Less";
    j = 1;
  } else {
    meal_more.style.display = "none";
    meal_btn.innerHTML = "Read More";
    j = 0;
  }
}

const service1_more = document.querySelector(".service1-more");
const service1_btn = document.getElementById("service1-readbtn");

var k = 0;
function sread1() {
  if (!k) {
    service1_more.style.display = "inline";
    service1_btn.innerHTML = "Read Less";
    k = 1;
  } else {
    service1_more.style.display = "none";
    service1_btn.innerHTML = "Read More";
    k = 0;
  }
}

const service2_more = document.querySelector(".service2-more");
const service2_btn = document.getElementById("service2-readbtn");

var l = 0;
function sread2() {
  if (!l) {
    service2_more.style.display = "inline";
    service2_btn.innerHTML = "Read Less";
    l = 1;
  } else {
    service2_more.style.display = "none";
    service2_btn.innerHTML = "Read More";
    l = 0;
  }
}

const service3_more = document.querySelector(".service3-more");
const service3_btn = document.getElementById("service3-readbtn");

var s = 0;
function sread3() {
  if (!s) {
    service3_more.style.display = "inline";
    service3_btn.innerHTML = "Read Less";
    s = 1;
  } else {
    service3_more.style.display = "none";
    service3_btn.innerHTML = "Read More";
    s = 0;
  }
}

const n1_hidden = document.getElementById("n1-hidden");
const n2_hidden = document.getElementById("n2-hidden");
const n3_hidden = document.getElementById("n3-hidden");
const a_hide = document.getElementById("a-hide");

const news_btn = document.getElementById("news-viewbtn");

var p = 0;
function news() {
  if (!p) {
    n1_hidden.style.display = "block";
    n2_hidden.style.display = "block";
    n3_hidden.style.display = "block";
    news_btn.innerHTML = "View Less";
    a_hide.href = "#";
    p = 1;
  } else {
    n1_hidden.style.display = "none";
    n2_hidden.style.display = "none";
    n3_hidden.style.display = "none";
    news_btn.innerHTML = "View More";
    a_hide.href = "#blog111";
    p = 0;
  }
}

const foot_more = document.getElementById("foot-more");
const foot_btn = document.getElementById("foot-readbtn");

var q = 0;
function foot() {
  console.log("jjjjj");
  if (!q) {
    foot_more.style.display = "inline";
    foot_btn.innerHTML = "Read Less";
    q = 1;
  } else {
    foot_more.style.display = "none";
    foot_btn.innerHTML = "Read More";
    q = 0;
  }
}



// -----------------countdown timer-----------------------
const countdown = () =>{
  const futureDate = new Date("October 30, 2021 00:00:00").getTime();
  const currentDate = new Date().getTime();
  const gap = futureDate - currentDate;

  //time in ms
  const oneSec = 1000;
  const oneMin = oneSec * 60;
  const oneHour = oneMin * 60;
  const oneDay = oneHour * 24;

    //remaining time
    const day = Math.floor(gap/oneDay);
    const hour = Math.floor((gap % oneDay)/oneHour);
    const min = Math.floor((gap % oneHour)/oneMin);
    const sec = Math.floor((gap % oneMin)/oneSec);

  document.querySelector(".days").textContent = day;
  document.querySelector(".hours").textContent = hour;
  document.querySelector(".mins").textContent = min;
  document.querySelector(".secs").textContent = sec;

}

setInterval(countdown,1000);