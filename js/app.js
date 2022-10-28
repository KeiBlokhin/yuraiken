//Lightbox gallery

var $overlay = $('<div id="overlay"></div>');
var $image = $('<img>');
var $caption = $('<p></p>');

$overlay.append($image);

$overlay.append($caption);

$("body").append($overlay);


 $(".item a").click(function(event){
  event.preventDefault();
  var imageLocation = $(this).attr("href");
$image.attr("src", imageLocation); 
$overlay.show();
     
var captionText =$(this).children("p").text();
     $caption.text(captionText);
     
});

$overlay.click(function(){
    
    $overlay.hide();
});



//Automatic year change
var d = new Date();
var year = d.getFullYear()
$(".copy").text("Designed by Blokhin Sergey 又来軒 1990-"+year);

//Dropdown menu

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var d = 0; d < dropdowns.length; d++) {
      var openDropdown = dropdowns[d];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
        
  }
   }
}

var breakpoint = 481,
  id = 'mapcontainer',
  viewportWidth = window.innerWidth;
if (viewportWidth > breakpoint) {
  var mapElement = document.createElement('iframe'),
      mapLink = document.getElementById('maplink');
  mapElement.id = 'map';

  mapElement.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.096387521247!2d133.7647650501333!3d34.60172409592583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x355156415ff5f47f%3A0x8227519a3c439d54!2z5Lit5Zu95Zub5bed5paZ55CGIOWPiOadpei7kiDlgInmlbflpKnmuoDlsYvlupc!5e0!3m2!1sen!2sjp!4v1477365553233=embed';
  document.getElementById(id).insertBefore(mapElement,mapLink);
}


//Google map
 (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-65267292-2', 'auto');
  ga('send', 'pageview');











