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
    navbar.classList.add("transform");
    nameScroll.classList.add("transform");
  }else {
    navbar.classList.remove("transform");
    nameScroll.classList.remove("transform");
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
    removeProgress();
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

const progress = document.querySelectorAll('.progress-done');

function addProgress(range = [0, 8]) {
  for(let i = range[0]; i <= range[1]; i++) {
    progress[i].style.width = progress[i].getAttribute('data-done') + '%';
  }
}

function removeProgress(range = [0, 8]) {
  for(let i = range[0]; i <= range[1]; i++) {
    progress[i].style.width = '100%';
  }
}

$(document).ready(function () {
  const $pizza = $(".pizza-progress"),
    windowHeightPizza = $(window).height(),
    offsetPizza = windowHeightPizza - windowHeightPizza / 4;

  const $textando = $(".textando-progress"),
    windowHeightTextando = $(window).height(),
    offsetTextando = windowHeightTextando - windowHeightTextando / 4;

  const $gitdex = $(".gitdex-progress"),
    windowHeightGitdex = $(window).height(),
    offsetGitdex = windowHeightGitdex - windowHeightGitdex / 4;

  const $targetAnime = $(".anime-opacity"),
    animationClassAnime = "init-opacity",
    windowHeightAnime = $(window).height(),
    offsetAnime = windowHeightAnime - windowHeightAnime / 4;

  const $targetTyping = $(".typing-anime"),
    animationClassTyping = "typing-init",
    windowHeightTyping = $(window).height(),
    offsetTyping = windowHeightTyping - windowHeightTyping / 4;

  const $target = $(".anime"),
    animationClass = "anime-init",
    windowHeight = $(window).height(),
    offset = windowHeight - windowHeight / 4;

  function animeScroll() {
    const documentTop = $(document).scrollTop();
    $pizza.each(function () {
      if (documentTop > boxTop(this) - offsetPizza) {
        addProgress([0, 2]);
      }
    });
    $textando.each(function () {
      if (documentTop > boxTop(this) - offsetTextando) {
        addProgress([3, 5]);
      }
    });
    $gitdex.each(function () {
      if (documentTop > boxTop(this) - offsetGitdex) {
        addProgress([6, 8]);
      }
    });
    $targetAnime.each(function () {
      if (documentTop > boxTop(this) - offsetAnime) {
        $(this).addClass(animationClassAnime);
      } else {
        $(this).removeClass(animationClassAnime);
      }
    });
    $targetTyping.each(function () {
      if (documentTop > boxTop(this) - offsetTyping) {
        $(this).addClass(animationClassTyping);
      } else {
        $(this).removeClass(animationClassTyping);
      }
    });
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