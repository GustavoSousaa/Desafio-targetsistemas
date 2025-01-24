
async function processarFaturamento() {
    try {
    
      const response = await fetch('faturamento.json');
      const data = await response.json();
  
      
      const faturamentoDiario = data.faturamentoDiario;
  
      const diasComFaturamento = faturamentoDiario.filter((valor) => valor > 0);
  
      
      const menorFaturamento = Math.min(...diasComFaturamento);
      const maiorFaturamento = Math.max(...diasComFaturamento);
  
      const somaFaturamento = diasComFaturamento.reduce((acc, valor) => acc + valor, 0);
      const mediaFaturamento = somaFaturamento / diasComFaturamento.length;
  
      const diasAcimaDaMedia = diasComFaturamento.filter((valor) => valor > mediaFaturamento).length;
  
     
      console.log("Menor faturamento:", menorFaturamento);
      console.log("Maior faturamento:", maiorFaturamento);
      console.log("Dias com faturamento acima da média:", diasAcimaDaMedia);
    } catch (error) {
      console.error("Erro ao processar o faturamento:", error);
    }
  }
  
  
  processarFaturamento();
  