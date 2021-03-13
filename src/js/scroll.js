var root = document.documentElement;
root.className += " scroll";

var scrollYOld = 0;

const navbar = document.getElementById("navbar");
const nameScroll = document.getElementById("name-scroll");
const screenUp = document.getElementById("scroll-up");
const menu = document.getElementById("menu");
const overview = document.getElementById("overview");

$('.a[href^="#"]').on('click', function(e) {
	e.preventDefault();
	var link = $(this).attr('href'),
		targetOffset = $(link).offset().top;
			
	$('html, body').animate({ 
		scrollTop: targetOffset - 100
	}, 500);
});

window.onscroll = () => {
  if(scrollYOld == 0) {
    scrollYOld = window.scrollY;
  }

  hidden();

  if(!scrollUp(window.scrollY) || !window.scrollY > 0) {
    navbar.classList.add("hidden");
    nameScroll.classList.add("hidden");
  }else {
    navbar.classList.remove("hidden");
    nameScroll.classList.remove("hidden");
  }
}

function hidden() {
  if(window.scrollY > 0) {
    screenUp.classList.remove("hidden");
    menu.classList.remove("hidden");
    overview.classList.remove("hidden");
  }else {
    screenUp.classList.add("hidden");
    menu.classList.add("hidden");
    overview.classList.add("hidden");
  }
}

function scrollUp(scroll) {
  if(scroll == 0) {
    scrollYOld = scroll;
    return false;
  }

  if(scroll < scrollYOld) {
    scrollYOld = scroll;
    return true;
  }else {
    scrollYOld = scroll;
    return false;
  }
}

function boxTop(idBox) {
  return $(idBox).offset().top;
}

$(document).ready(function () {
  const $target = $(".anime"),
    animationClass = "anime-init",
    windowHeight = $(window).height(),
    offset = windowHeight - windowHeight / 4;

  function animeScroll() {
    const documentTop = $(document).scrollTop();
    $target.each(function () {
      if (documentTop > boxTop(this) - offset) {
        $(this).addClass(animationClass);
      } else {
        $(this).removeClass(animationClass);
      }
    });
  }

  animeScroll();

  $(document).scroll(function () {
    setTimeout(function () {
      animeScroll();
    }, 150);
  });
});

$(document).ready(function () {
  const $target = $(".anime-opacity"),
    animationClass = "init-opacity",
    windowHeight = $(window).height(),
    offset = windowHeight - windowHeight / 4;

  function animeScroll() {
    const documentTop = $(document).scrollTop();
    $target.each(function () {
      if (documentTop > boxTop(this) - offset) {
        $(this).addClass(animationClass);
      } else {
        $(this).removeClass(animationClass);
      }
    });
  }

  animeScroll();

  $(document).scroll(function () {
    setTimeout(function () {
      animeScroll();
    }, 150);
  });
});

$(document).ready(function () {
  const $target = $(".typing-anime"),
    animationClass = "typing-init",
    windowHeight = $(window).height(),
    offset = windowHeight - windowHeight / 4;

  function animeScroll() {
    const documentTop = $(document).scrollTop();

    $target.each(function () {
      if (documentTop > boxTop(this) - offset) {
        $(this).addClass(animationClass);
      } else {
        $(this).removeClass(animationClass);
      }
    });
  }

  animeScroll();

  $(document).scroll(function () {
    setTimeout(function () {
      animeScroll();
    }, 150);
  });
});