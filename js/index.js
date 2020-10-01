const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//Append and Prepend Nav




//Selectors
let nav = document.querySelector('nav')
let navItems = document.querySelectorAll(".nav-item")
let h1 = document.getElementsByTagName('h1')
let button = document.getElementsByTagName('button')

let ctaImg = document.getElementById("cta-img")

let mainContent = document.querySelectorAll('.text-content')
let features = mainContent[0].children
let about = mainContent[1].children
let services = mainContent[2].children
let product = mainContent[3].children
let vision = mainContent[4].children

let middleImg = document.getElementById("middle-img")

let contact = document.querySelector('.contact').children

let footer = document.querySelector('footer').children


console.log(footer)






//Implimentations
navItems[0].innerHTML = siteContent["nav"]["nav-item-1"]
navItems[1].innerHTML = siteContent["nav"]["nav-item-2"]
navItems[2].innerHTML = siteContent["nav"]["nav-item-3"]
navItems[3].innerHTML = siteContent["nav"]["nav-item-4"]
navItems[4].innerHTML = siteContent["nav"]["nav-item-5"]
navItems[5].innerHTML = siteContent["nav"]["nav-item-6"]

let home = document.createElement('a')
home.setAttribute('class', 'nav-item')
home.setAttribute('href', '#')
home.textContent = 'Home'
nav.prepend(home)//prepend new nav element

let help = document.createElement('a')
help.setAttribute('class', 'nav-item')
help.setAttribute('href', '#')
help.textContent = 'Help'
nav.appendChild(help)//append new nav element

navItems = document.querySelectorAll('.nav-item')//refresh
navItems.forEach(item => item.style.color = "green")//Turn Nav Green

h1[0].textContent = siteContent["cta"]["h1"] //Not sure how to add <br>
button[0].textContent = siteContent['cta']['button']
ctaImg.setAttribute('src', 'img/header-img.png')

features[0].textContent = siteContent["main-content"]["features-h4"]
features[1].textContent = siteContent["main-content"]["features-content"]

about[0].textContent = siteContent["main-content"]["about-h4"]
about[1].textContent = siteContent["main-content"]["about-content"]

services[0].textContent = siteContent["main-content"]["services-h4"]
services[1].textContent = siteContent["main-content"]["services-content"]

product[0].textContent = siteContent["main-content"]["product-h4"]
product[1].textContent = siteContent['main-content']["product-content"]

vision[0].textContent = siteContent['main-content']["vision-h4"]
vision[1].textContent = siteContent['main-content']['vision-content']

middleImg.setAttribute('src', 'img/mid-page-accent.jpg')

contact[0].textContent = siteContent["contact"]["contact-h4"]
contact[1].textContent = siteContent["contact"]["address"]
contact[2].textContent = siteContent["contact"]["phone"]
contact[3].textContent = siteContent["contact"]["email"]

footer[0].textContent = siteContent["footer"]["copyright"]

