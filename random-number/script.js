const button = document.getElementById("generate");

/**
 * Math.floor(Math.random()) -> sempre gera 0
 * Math.floor(Math.random() * 5) -> ira gerar valores entre 0 a 4
 * Math.floor(Math.random() * ( + 1)) -> ira gerar valores entre 0 a 5
 * Math.floor(Math.random() * (max - min + 1) + min) -> gera valores enter o min e o max que passar, respeitando o valor min ate o valor maximo
 *
 */

button.addEventListener("click", function () {
  const min = parseInt(document.getElementById("min").value);
  const max = parseInt(document.getElementById("max").value);

  let result = Math.floor(Math.random() * (max - min + 1) + min);
  if (isNaN(result)) {
    result = "Invalid Number";
  }
  document.querySelector("#result > span").textContent = result;
});
