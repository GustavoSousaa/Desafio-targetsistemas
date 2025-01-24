function reverseString(str) {
    
    let reversed = "";
  
    
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i]; 
    }
  
    return reversed;
  }
  
  
  const userInput = prompt("Informe uma palavra para inverter:");
  
  if (userInput) {
    const reversedString = reverseString(userInput);
    console.log(`palavra original: ${userInput}`);
    console.log(`palavra invertida: ${reversedString}`);
  } else {
    console.log("Nenhuma palavra foi informada.");
  }
  