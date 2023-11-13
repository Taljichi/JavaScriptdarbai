const recipes = [
    {
      Vistiena: 100,
      Brokoliai: 200,
      Pomidorai: 100,
      Salotos: 150,
      Druska: 20,
      Aliejus: 15,
      Citrina: 1,
    },
    {
      Miltai: 250,
      Kiausiniai: 1,
      Melynes: 100,
      Cukrus: 50,
    },
    {
      Mesa: 300,
      Makaronai: 700,
      Suris: 200,
      Druska: 20,
      Grietine: 100,
    },
  ];


let recipe = null;
function clearSVG() {
    document.getElementById("1svg").classList.add("hide");
    document.getElementById("2svg").classList.add("hide");
    document.getElementById("3svg").classList.add("hide");
}
// ===================================================================
document.getElementById("1").addEventListener("click", function () {
    clearSVG();
    recipe = 0;
    document.getElementById("1svg").classList.remove("hide");
    updateDisplay()
});
document.getElementById("2").addEventListener("click", function () {
    clearSVG();
    recipe = 1;
    document.getElementById("2svg").classList.remove("hide");
    updateDisplay()
});
document.getElementById("3").addEventListener("click", function () {
    clearSVG();
    recipe = 3;
    document.getElementById("3svg").classList.remove("hide");
    updateDisplay()
});
// ==============================================================
document.getElementById("vol").oninput = function () {
    document.getElementById("rangeDisplay").innerText = this.value;
    document.getElementById("rangeDisplay").style.left = this.value * 31 + "px";
    recipeCount = this.value;
};

function updateDisplay() {
    document.getElementById("recipeDisplay").innerText = document.getElementById("vol").value;
}