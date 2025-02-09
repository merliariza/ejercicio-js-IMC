document.getElementById('imcForm').addEventListener('submit', function (event) {
  event.preventDefault();

 
  const name = document.getElementById('name').value;
  const weight = parseFloat(document.getElementById('weight').value);
  const height = parseFloat(document.getElementById('height').value);


  if (isNaN(weight) || isNaN(height) || height <= 0) {
    alert('Por favor, ingresa valores válidos.');
    return;
  }


  const imc = (weight / (height ** 2)).toFixed(1);
  let category = '';
  let imageUrl = '';

  
  if (imc < 18.5) {
    category = 'Bajo peso';
    imageUrl = 'https://us.123rf.com/450wm/alex1618/alex16182007/alex1618200700037/150826013-mujer-est%C3%A1-de-pie-en-la-ilustraci%C3%B3n-de-vector-de-escalas-perder-peso-s%C3%ADntoma-de-c%C3%A1ncer-personajes.jpg';  
  } else if (imc < 25) {
    category = 'Peso normal';
    imageUrl = 'https://img.freepik.com/vector-premium/chica-dibujos-animados-medir-perder-peso_24877-11181.jpg';  
  } else if (imc < 30) {
    category = 'Sobrepeso';
    imageUrl = 'https://img.freepik.com/vector-premium/concepto-mujer-sobrepeso-joven-gorda-escalas-problema-comer-problemas-mentales-psicologicos-persona-conmocionada-triste-elemento-grafico-sitio-web-ilustracion-vector-plano-dibujos-animados_118813-18185.jpg';  
  } else if (imc < 35) {
    category = 'Obesidad I';
    imageUrl = 'https://static.vecteezy.com/system/resources/previews/016/742/675/non_2x/fat-woman-standing-on-weigh-scales-oversize-girl-obesity-weight-control-concept-overweight-female-cartoon-character-full-length-illustration-vector.jpg';  
  } else if (imc < 40) {
    category = 'Obesidad II';
    imageUrl = 'https://static.vecteezy.com/system/resources/previews/019/605/991/non_2x/plus-size-woman-in-underwear-and-measuring-tape-oversize-fatty-girl-obesity-weight-control-concept-overweight-female-cartoon-character-full-length-illustration-vector.jpg';  
  } else {
    category = 'Obesidad III';
    imageUrl = 'https://img.freepik.com/vector-premium/mujer-gorda-sobrepeso-corriendo-o-trotando-ilustracion-vectorial-plana-aislada_181313-1989.jpg?w=360';  
  }

 
  const resultText = document.getElementById('result');
  resultText.textContent = `${name}, tu IMC es ${imc} (${category})`;

  const resultImage = document.getElementById('resultImage');
  resultImage.src = imageUrl;
  resultImage.style.display = 'block';
});