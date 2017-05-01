
/////////////////////////
// Hamburger Menu //////
/////////////////////////

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



//Handlebars for Our Dogs page
$(function () {
  var data = {
    books: [{
      name: "Astro",
      cover: "Astro",
      color: "teal",
      modal: 'modal-Astro'
    },{
      name: "Brook",
      cover: "Brook",
      color: "light-blue",
      modal: "modal-Brook"
    },{
      name: "Celine",
      cover: "Celine",
      color: "dark-blue",
      modal: "modal-Celine"
    },{
      name: "Cha Cha",
      cover: "Cha-Cha",
      color: "yellow",
      modal: "modal-Cha-Cha"
    },{
      name: "Chops",
      cover: "Chops",
      color: "orange",
      modal: "modal-Chops"
    },{
      name: "Copper",
      cover: "Copper",
      color: "teal",
      modal: "modal-Copper"
    },{
      name: "Dahlia",
      cover: "Dahlia",
      color: "light-blue",
      modal: "modal-Dahlia"
    },{
      name: "Darryl",
      cover: "Darryl",
      color: "dark-blue",
      modal: "modal-Darryl"
    },{
      name: "Dugar",
      cover: "Dugar",
      color: "yellow",
      modal: "modal-Dugar"
    },{
      name: "Duncan",
      cover: "Duncan",
      color: "orange",
      modal: "modal-Duncan"
    },{
      name: "Empress",
      cover: "Empress",
      color: "teal",
      modal: "modal-Empress"
    },{
      name: "Gavin",
      cover: "Gavin",
      color: "light-blue",
      modal: "modal-Gavin"
    },{
      name: "Katie",
      cover: "Katie",
      color: "dark-blue",
      modal: "modal-Katie"
    },{
      name: "Keller",
      cover: "Keller",
      color: "yellow",
      modal: "modal-Keller"
    },{
      name: "Lucky",
      cover: "Lucky",
      color: "orange",
      modal: "modal-Lucky"
    },{
      name: "Nova",
      cover: "Nova",
      color: "teal",
      modal: "modal-Nova"
    },{
      name: "Popcorn",
      cover: "Popcorn",
      color: "light-blue",
      modal: "modal-Popcorn"
    },{
      name: "Queen",
      cover: "Queen",
      color: "dark-blue",
      modal: "modal-Queen"
    },{
      name: "Quincy",
      cover: "Quincy",
      color: "yellow",
      modal: "modal-Quincy"
    },{
      name: "Tammy",
      cover: "Tammy",
      color: "orange",
      modal: "modal-Tammy"
    },{
      name: "Taylor",
      cover: "Taylor",
      color: "teal",
      modal: "modal-Taylor"
    },{
      name: "Tiki",
      cover: "Tiki",
      color: "light-blue",
      modal: "modal-Tiki"
    },{
      name: "Violet",
      cover: "Violet",
      color: "dark-blue",
      modal: "modal-Violet"
    },{
      name: "Wendy",
      cover: "Wendy",
      color: "yellow",
      modal: "modal-Wendy"
    },{
      name: "Zazzle",
      cover: "Zazzle",
      color: "orange",
      modal: "modal-Zazzle"
    },{
      name: "Zelda",
      cover: "Zelda",
      color: "teal",
      modal: "modal-Zelda"
    }]
  };

  var source = $.trim($("#book-example").html());
  var template = Handlebars.compile(source);
  var html = template(data);
  $("#dog-container").append(html);
});


$(function () {
  var source = $("#modal-example").html();
  var template = Handlebars.compile(source);

  var context = {
    modalBox: [{
      name: "Astro",
      modal: 'modal-Astro'
    },{
      name: "Brook",
      modal: "modal-Brook"
    },{
      name: "Celine",
      modal: "modal-Celine"
    },{
      name: "Cha Cha",
      modal: "modal-Cha-Cha"
    },{
      name: "Chops",
      modal: "modal-Chops"
    },{
      name: "Copper",
      modal: "modal-Copper"
    },{
      name: "Dahlia",
      modal: "modal-Dahlia"
    },{
      name: "Darryl",
      modal: "modal-Darryl"
    },{
      name: "Dugar",
      modal: "modal-Dugar"
    },{
      name: "Duncan",
      modal: "modal-Duncan"
    },{
      name: "Empress",
      modal: "modal-Empress"
    },{
      name: "Gavin",
      modal: "modal-Gavin"
    },{
      name: "Katie",
      modal: "modal-Katie"
    },{
      name: "Keller",
      modal: "modal-Keller"
    },{
      name: "Lucky",
      modal: "modal-Lucky"
    },{
      name: "Nova",
      modal: "modal-Nova"
    },{
      name: "Popcorn",
      modal: "modal-Popcorn"
    },{
      name: "Queen",
      modal: "modal-Queen"
    },{
      name: "Quincy",
      modal: "modal-Quincy"
    },{
      name: "Tammy",
      modal: "modal-Tammy"
    },{
      name: "Taylor",
      modal: "modal-Taylor"
    },{
      name: "Tiki",
      modal: "modal-Tiki"
    },{
      name: "Violet",
      modal: "modal-Violet"
    },{
      name: "Wendy",
      modal: "modal-Wendy"
    },{
      name: "Zazzle",
      modal: "modal-Zazzle"
    },{
      name: "Zelda",
      modal: "modal-Zelda"
    }]
  };

  var compiled = template(context);
  $('#dog-container').append(compiled);
});


// radnom images

$(document).ready(function () {
        $('.dogImage1').hide().fadeIn(3000);
    });

var images1 = [
  'images/header-images/dog1.jpg',
  'images/header-images/dog2.jpg',
  'images/header-images/dog3.jpg',
  'images/header-images/dog4.jpg',
  'images/header-images/dogs5.jpg'
];

var i = Math.floor(Math.random() * images1.length);
$('.dogImage1').attr('src', images1[i]);

$(document).ready(function () {
        $('.dogImage2').hide().fadeIn(3000);
    });

var images2 = [
  'images/header-images/dogs6.jpg',
  'images/header-images/dogs7.jpg',
  'images/header-images/dogs15.jpg',
  'images/header-images/dogs9.jpg'
];

var k = Math.floor(Math.random() * images2.length);
$('.dogImage2').attr('src', images2[k]);

$(document).ready(function () {
        $('.dogImage3').hide().fadeIn(3000);
    });

var images3 = [
  'images/header-images/dogs11.jpg',
  'images/header-images/dogs12.jpg',
  'images/header-images/dogs14.jpg',
  'images/header-images/dogs20.jpg',
];

var l = Math.floor(Math.random() * images3.length);
$('.dogImage3').attr('src', images3[l]);

$(document).ready(function () {
        $('.dogImage4').hide().fadeIn(2000);
    });

var images4 = [
  'images/header-images/dogs13.jpg',
  'images/header-images/dogs16.jpg',
  'images/header-images/dogs17.jpg',
  'images/header-images/dogs18.jpg',
  'images/header-images/dogs21.jpg'
];

var m = Math.floor(Math.random() * images4.length);
$('.dogImage4').attr('src', images4[m]);


// -------Matchmaker--------
$(".matchmaker-button").click(function(){
    $(".question-one").show();
});

$(".matchmaker-button").click(function(){
    $(".matchmaker-small").hide();
});

// $(document).ready(function () {
//         $('.dogImage1').hide().fadeIn(3000);
//     });
//
// var images1 = [
//   'images/header-images/dog1.jpg',
//   'images/header-images/dog2.jpg',
//   'images/header-images/dog3.jpg',
//   'images/header-images/dog4.jpg',
//   'images/header-images/dogs5.jpg'
// ];
//
// var i = Math.floor(Math.random() * images1.length);
// $('.dogImage1').attr('src', images1[i]);
//
// $(document).ready(function () {
//         $('.dogImage2').hide().fadeIn(3000);
//     });
//
// var images2 = [
//   'images/header-images/dogs6.jpg',
//   'images/header-images/dogs7.jpg',
//   'images/header-images/dogs15.jpg',
//   'images/header-images/dogs9.jpg'
// ];
//
// var k = Math.floor(Math.random() * images2.length);
// $('.dogImage2').attr('src', images2[k]);
//
// $(document).ready(function () {
//         $('.dogImage3').hide().fadeIn(3000);
//     });
//
// var images3 = [
//   'images/header-images/dogs11.jpg',
//   'images/header-images/dogs12.jpg',
//   'images/header-images/dogs14.jpg',
//   'images/header-images/dogs20.jpg',
// ];
//
// var l = Math.floor(Math.random() * images3.length);
// $('.dogImage3').attr('src', images3[l]);
//
// $(document).ready(function () {
//         $('.dogImage4').hide().fadeIn(2000);
//     });
//
// var images4 = [
//   'images/header-images/dogs13.jpg',
//   'images/header-images/dogs16.jpg',
//   'images/header-images/dogs17.jpg',
//   'images/header-images/dogs18.jpg',
//   'images/header-images/dogs21.jpg'
// ];
//
// var m = Math.floor(Math.random() * images4.length);
// $('.dogImage4').attr('src', images4[m]);
