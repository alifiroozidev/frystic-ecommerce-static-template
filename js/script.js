
         
// search modal


var modal = document.getElementById("searchModal");
  var btn = document.getElementById("searchModalBtn");
  var span = document.getElementsByClassName("close")[0];
  btn.onclick = function() {
    modal.style.display = "block";
  }
  span.onclick = function() {
    modal.style.display = "none";
  }
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }


  
///darkmode memory
        var app = document.getElementsByTagName("BODY")[0];
      if (localStorage.lightMode == "dark") {
          app.setAttribute("light-mode", "dark");
      }

      function toggle_light_mode() {
          var app = document.getElementsByTagName("BODY")[0];
          if (localStorage.lightMode == "dark") {
              localStorage.lightMode = "light";
              app.setAttribute("light-mode", "light");
          } else {
              localStorage.lightMode = "dark";
              app.setAttribute("light-mode", "dark");
          }       
      }

  window.addEventListener("storage", function () {
    if (localStorage.lightMode == "dark") {
      app.setAttribute("light-mode", "dark");
    } else {
      app.setAttribute("light-mode", "light");
    }
  }, false);
  

///

/// top slider
        
        var swiper = new Swiper(".main-slider", {
          spaceBetween: 30,
          centeredSlides: true,
          autoplay: {
            delay: 5000,
            disableOnInteraction: false,
          },
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
            dynamicBullets: true,
          },
      hashNavigation: {
        watchState: true,
      },
        });



/// product sliders 

function dependsOnSize(){
  if((window.innerWidth >= 200 && window.innerWidth <= 499 )){ return 1.8; } else {
         if((window.innerWidth >= 500 && window.innerWidth <= 999 )){ return 3.5; } else {     
             if((window.innerWidth >= 1000 && window.innerWidth <= 1399 )){ return 4; } else {
                if((window.innerWidth >= 1400)){ return 5.5; }
  }}}};
                
        var swiper = new Swiper(".scrolling-wrapper", {
          spaceBetween: 0,
          freeMode: true,
          slidesPerView: dependsOnSize(),
          hashNavigation: {
              watchState: true,
           },
        });






///////////////////////////// The 01 Wrapper

  filterSelection("all")
  function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("filter01");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
      w3RemoveClass(x[i], "show");
      if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    }
  }
  
  function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
    }
  }
  
  function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      while (arr1.indexOf(arr2[i]) > -1) {
        arr1.splice(arr1.indexOf(arr2[i]), 1);     
      }
    }
    element.className = arr1.join(" ");
  }
  
  // Add active class to the current button (highlight it)
  var btnContainer = document.getElementById("BtnContainer01");
  var btns = btnContainer.getElementsByClassName("btn01");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function(){
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }






  // When the user scrolls down 20px from the top of the document, slide down the navbar
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar-bg").style.top = "0";
  } else {
    document.getElementById("navbar-bg").style.top = "-100px";
  }
}




    document.onreadystatechange = function() {
             if (document.readyState !== "complete") {
                 document.querySelector(
                   "body").style.visibility = "";
                 document.querySelector(
                   "#loader").style.visibility = "visible";
             } else {
                 document.querySelector(
                   "#loader").style.display = "none";
                 document.querySelector(
                   "body").style.visibility = "";
             }
         };


