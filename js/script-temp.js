$(document).ready(function(){
  $('.hamburger').click(function(){
    $('.hamburger-menu').slideToggle('slow');
  });
});

//Styling for FAQ accordian questions
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    }
}

// Styling for Random Image in main header

var images1 = [
  'images/header-images/dog1.jpg',
  'images/header-images/dog2.jpg',
  'images/header-images/dog3.jpg',
  'images/header-images/dog4.jpg',
  'images/header-images/dogs5.jpg'
];

var i = Math.floor(Math.random() * images1.length);
$('.dogImage1').attr('src', images1[i]);

var images2 = [
  'images/header-images/dogs6.jpg',
  'images/header-images/dogs7.jpg',
  'images/header-images/dogs15.jpg',
  'images/header-images/dogs9.jpg'
];

var k = Math.floor(Math.random() * images2.length);
$('.dogImage2').attr('src', images2[k]);

var images3 = [
  'images/header-images/dogs11.jpg',
  'images/header-images/dogs12.jpg',
  'images/header-images/dogs14.jpg',
  'images/header-images/dogs20.jpg',
];

var l = Math.floor(Math.random() * images3.length);
$('.dogImage3').attr('src', images3[l]);

var images4 = [
  'images/header-images/dogs13.jpg',
  'images/header-images/dogs16.jpg',
  'images/header-images/dogs17.jpg',
  'images/header-images/dogs18.jpg',
  'images/header-images/dogs21.jpg'
];

var m = Math.floor(Math.random() * images4.length);
$('.dogImage4').attr('src', images4[m]);
