const Bouton = [...document.querySelectorAll(".bouton")];
const BoutonValeur = Bouton.map((elem) => elem.innerHTML);
const affichage = document.querySelector(".affichage");
const elem = document.querySelector(".touches");
let valeur = "";
document.addEventListener("keydown", (e) => {
  valeur = e.key;
  calculer(valeur);
});
elem.addEventListener("click", (e) => {
  valeur = e.target.innerHTML;

  calculer(valeur);
});
function calculer(valeur) {
  if (BoutonValeur.includes(valeur) || "Backspace" || "Enter")
    switch (valeur) {
      case "RESET":
        affichage.textContent = "";
        break;
      case "Backspace":
      case "DEL":
        affichage.textContent = affichage.textContent.substring(
          0,
          affichage.textContent.length - 1
        );
        break;
      case "Enter":
      case "=":
        let aff = [...affichage.innerHTML];
        for (let index = 0; index < aff.length; index++) {
          if (aff[index].includes("x")) aff.splice(index, 1, "*");
        }
        const calcul = eval(aff.join(""));
        if (calcul % 1 != 0) affichage.textContent = calcul.toFixed(3);
        else affichage.textContent = calcul;
        break;
      default:
        const indextouche = BoutonValeur.indexOf(valeur);
        const touche = Bouton[indextouche];
        affichage.textContent += touche.innerHTML;
        break;
    }
}

function changeTheme(number) {
  const selector = document.querySelector(".selector");
  console.log(selector);
  if (number == "one") {
    selector.style.left = "0.3em";
    document.getElementById("theme-switcher").href = "style.css";
  } else if (number == "two") {
    selector.style.left = "1.41em";
    document.getElementById("theme-switcher").href = "./themes/theme2.css";
  } else if (number === "three") {
    selector.style.left = "2.8em";
    document.getElementById("theme-switcher").href = "./themes/theme3.css";
  }
}
