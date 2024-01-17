const analyzer = {
  // Função que conta o número de palavras em um texto
  getWordCount: (text) => {
    const words = text.split(/\s+/).filter(word => word !== '');
    return words.length;
  },

  // Função que conta o número total de caracteres em um texto
  getCharacterCount: (text) => {
    return text.length;
  },

  // Função que conta o número total de caracteres, excluindo espaços, em um texto
  getCharacterCountExcludingSpaces: (text) => {
    return text.replace(/\s/g, '').length;
  },

  // Função que conta o número de ocorrências de números em um texto
  getNumberCount: (text) => {
    const numbers = text.match(/\d+/g) || [];  // Utiliza uma expressão regular para encontrar todos os números na string
    return numbers.length;

    
  },

  // Função que calcula a soma de todos os números em um texto
  getNumberSum: (text) => {
    const numbers = text.match(/\d+/g) || []; // Utiliza uma expressão regular para encontrar todos os números na string
    let sum = 0;

    if (numbers.length > 0) {
      // Loop que percorre todos os números encontrados e realiza a soma
      for (let i = 0; i < numbers.length; i++) {
        sum += parseInt(numbers[i], 10);
      }
    }

    return sum;
  },

  // Função que calcula o comprimento médio das palavras em um texto
  getWordLengthAverage: (text) => {
    const words = text.split(/\s+/).filter(word => word !== '');
    let totalLength = 0;

    if (words.length > 0) {
      // Loop que percorre todas as palavras e acumula o comprimento total
      for (let i = 0; i < words.length; i++) {
        totalLength += words[i].length;
      }
      // Retorna a média do comprimento das palavras
      return totalLength / words.length;
    } else {
      // Retorna 0 se não houver palavras no texto
      return 0;
    }
  }
};

export default analyzer;
