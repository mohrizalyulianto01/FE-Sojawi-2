const navbar = document.getElementsByTagName("nav")[0];
window.addEventListener("scroll", function () {
  console.log(window.scrollY);
  if (this.window.scrollY > 1) {
    navbar.classList.replace("bg-transparent", "nav-color");
  } else if (this.window.scrollY <= 0) {
    navbar.classList.replace("nav-color", "bg-transparent");
  }
});

const menu = document.querySelector(".navbar-nav");

menu.addEventListener("click", function (e) {
  const targetMenu = e.target;

  if (targetMenu.classList.contains("btn")) {
    const menuLinkActive = document.querySelector("ul li a.active");

    if (
      menuLinkActive !== null &&
      targetMenu.getAttribute("href") !== menuLinkActive.getAttribute("href")
    ) {
      menuLinkActive.classList.remove("active");
    }

    targetMenu.classList.add("active");
  }
});

function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}
