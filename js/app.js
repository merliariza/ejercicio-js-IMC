document.getElementById('imcForm').addEventListener('submit', function (event) {
    event.preventDefault();
  
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
  
    if (isNaN(weight) || isNaN(height) || height <= 0) {
      alert('Por favor, ingresa valores válidos.');
      return;
    }
  
    const imc = (weight / (height ** 2)).toFixed(1);
    let category = '';
  
    if (imc < 18.5) {
      category = 'Bajo peso';
    } else if (imc < 25) {
      category = 'Peso normal';
    } else if (imc < 30) {
      category = 'Sobrepeso';
    } else if (imc < 35) {
      category = 'Obesidad I';
    } else if (imc < 40) {
      category = 'Obesidad II';
    } else {
      category = 'Obesidad III';
    }
  
    const data = {
      peso: weight,
      altura: height,
      imc: imc,
      categoria: category
    };

  
    const resultText = document.getElementById('result');
    const resultImage = document.getElementById('resultImage');
  
    resultText.textContent = `Tu IMC es ${imc} (${category})`;
  });
  