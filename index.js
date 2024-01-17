import analyzer from './analyzer.js';


const textarea = document.querySelector('[name="user-input"]');
const button = document.getElementById("reset-button");
const wordCount = document.querySelector('[data-testid="word-count"]');
const characterCount = document.querySelector('[data-testid="character-count"]');
const characterNoSpaceCount = document.querySelector('[data-testid="character-no-spaces-count"]');
const numberCount = document.querySelector('[data-testid="number-count"]');
const numberSum = document.querySelector('[data-testid="number-sum"]');
const wordLengthAverage = document.querySelector('[data-testid="word-length-average"]');


button.addEventListener("click", limparMetricas);
textarea.addEventListener("keyup", metricas);
textarea.addEventListener("input", metricas);

function limparMetricas() {
  textarea.value = "";
  wordCount.textContent = "Contagem de caracteres: 0";
  characterCount.textContent = "Contagem de caracteres: 0";
  characterNoSpaceCount.textContent = "Contagem de caracteres sem espaços: 0";
  numberCount.textContent = "Contagem de números: 0";
  numberSum.textContent = "Soma total de números: 0";
  wordLengthAverage.textContent = "Comprimento médio das palavras: 0";

}

function metricas() {
  const text = textarea.value;
  wordCount.textContent = "Contagem de palavras: " + analyzer.getWordCount(text);
  characterCount.textContent = "Contagem de caracteres: " + analyzer.getCharacterCount(text);
  characterNoSpaceCount.textContent = "Contagem de caracteres sem espaços: " + analyzer.getCharacterCountExcludingSpaces(text);
  numberCount.textContent = "Contagem de números: " + analyzer.getNumberCount(text);
  numberSum.textContent = "Soma total de números: " + analyzer.getNumberSum(text);
  wordLengthAverage.textContent = "Comprimento médio das palavras: " + analyzer.getWordLengthAverage(text);

}



