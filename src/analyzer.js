const analyzer = {
  // Função que conta o número de palavras em um texto. 
  getWordCount: (text) => {
    const words = text.split(/\s+/).filter(word => word !== ''); // filtro: espaços em branco não são palavras
    return words.length;
  },

  // Função que conta o número total de caracteres em um texto
  getCharacterCount: (text) => {
    return text.length;
  },

  // Função que conta o número total de caracteres, excluindo espaços, em um texto
  getCharacterCountExcludingSpaces: (text) => {
    return text.replace(/[^a-zA-Z0-9]/g, '').length;
  },
  

  // Função que conta o número de ocorrências de números em um texto
  getNumberCount: (text) => {
    // Atualizado para corresponder a números inteiros e decimais
    const numbers = text.match(/\b(\d+\.\d+|\d+)\b/g) || [];
    return numbers.length;
  },  
  

  getNumberSum: (text) => {
    // Atualizado para corresponder a números inteiros e decimais
    const numbers = text.match(/[-+]?\b\d+\b(?:\.\d+)?/g) || [];
    let sum = 0;
    
    if (numbers.length > 0) {
      for (let i = 0; i < numbers.length; i++) {
        // Verifique se o número é válido antes de somar
        const parsedNumber = parseFloat(numbers[i]);
        if (!isNaN(parsedNumber)) {
          sum += parsedNumber;
        }
      }
    }
  
    return sum;
  },
  
  
  // Função que calcula o comprimento médio das palavras em um texto
  getAverageWordLength: (text) => {
    const words = text.split(/\s+/).filter(word => word !== '');
    let totalLength = 0;
  
    if (words.length > 0) { 
      for (let i = 0; i < words.length; i++) {
        totalLength += words[i].length;
      }
  
      // Arredonda o resultado para duas casas decimais
      return parseFloat((totalLength / words.length).toFixed(2));
    } else {
      return 0;
    }
  }
  
};

export default analyzer;
