let root = document.documentElement;
root.className += " scroll";

function boxTop(idBox) {
  return $(idBox).offset().top;
}

function removeTyping(id) {
  setTimeout(function(){ 
    document.getElementById(id).classList.remove('typing');
  }, 2500);
}

function addTyping(id) {
  document.getElementById(id).classList.add('typing');
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
  const $target = $(".project-anime"),
    animationClass = "project-init",
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
        removeTyping('typing-overview');
      } else {
        $(this).removeClass(animationClass);
        addTyping('typing-overview');
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
        removeTyping('typing-projects');
      } else {
        $(this).removeClass(animationClass);
        addTyping('typing-projects');
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