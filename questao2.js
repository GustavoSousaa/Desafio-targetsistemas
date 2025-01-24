function isFibonacciNumber(n) {
 
    function isPerfectSquare(x) {
      const numero = Math.floor(Math.sqrt(x));
      return numero * numero === x;
    }
  
    return isPerfectSquare(5 * n * n + 4) || isPerfectSquare(5 * n * n - 4);
  }
  
  function fibonacciSequenceUpTo(n) {
   
    const sequence = [0, 1];
    while (sequence[sequence.length - 1] < n) {
      const nextValue = sequence[sequence.length - 1] + sequence[sequence.length - 2];
      if (nextValue > n) break;
      sequence.push(nextValue);
    }
    return sequence;
  }
  
  
  const userInput = parseInt(prompt("Informe um número para verificar se ele pertence à sequência de Fibonacci: "), 10);
  
  if (isNaN(userInput) || userInput < 0) {
    console.log("Por favor, insira um número inteiro positivo.");
  } else {
    
    const fibonacciSequence = fibonacciSequenceUpTo(userInput);
  

    if (isFibonacciNumber(userInput)) {
      console.log(`O número ${userInput} pertence à sequência de Fibonacci.`);
    } else {
      console.log(`O número ${userInput} NÃO pertence à sequência de Fibonacci.`);
    }
  
    
    console.log(`Sequência de Fibonacci até ${userInput}: ${fibonacciSequence.join(", ")}`);
  }
  