$(document).ready(function () {
  // var gallery = new SimpleLightbox(".galeria a", {
  //   sourceAttr: "href",
  //   overlay: true,
  //   spinner: true,
  //   nav: true,
  //   navText: ["&larr;", "&rarr;"],
  //   captions: false,
  //   close: true,
  //   closeText: "X",
  //   swipeClose: true,
  //   showCounter: true,
  //   animationSlide: true,
  //   animationSpeed: 150,
  //   preloading: true,
  //   enableKeyboard: true,
  //   loop: true,
  //   rel: false,
  //   docClose: true,
  //   swipeTolerance: 50,
  //   fadeSpeed: 150,
  //   focus: true,
  // });

  document.querySelectorAll(".episodio .ver-mais").forEach((item) => {
    item.querySelector("button").addEventListener("click", () => {
      item.querySelector("p").classList.add("ativo");
    });
  });

  document
    .querySelector(".galeria .ver-mais button")
    .addEventListener("click", () => {
      document.querySelector(".galeria .ver-mais button").style.display =
        "none";
      document
        .querySelector(".galeria .galeria-conteudo.inactive")
        .classList.remove("inactive");
    });
});
