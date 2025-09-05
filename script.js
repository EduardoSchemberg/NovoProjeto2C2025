document.getElementById("gerar-estrelas").addEventListener("click", function() {
    var campoEstrelas = document.getElementById("campo-estrelas");
    campoEstrelas.innerHTML = '';  // Limpa o campo antes de gerar novas estrelas

    for (var i = 0; i < 100; i++) {
        var estrela = document.createElement("div");
        estrela.classList.add("estrela");
        estrela.style.top = Math.random() * 100 + '%';  // Posição aleatória no eixo Y
        estrela.style.left = Math.random() * 100 + '%'; // Posição aleatória no eixo X
        estrela.style.animationDelay = Math.random() * 2 + 's'; // Delay aleatório
        campoEstrelas.appendChild(estrela);
    }
});
 window.onload = function() {
    alert('Bem-vindo ao nosso site!');
  }
let count = 0;
  const button = document.getElementById('clickButton');
  const display = document.getElementById('clickCount');

  button.addEventListener('click', () => {
    count++;
    display.textContent = count;
  });

   const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;

  themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    if (body.classList.contains('dark-theme')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  });

   const form = document.getElementById('myForm');
  form.addEventListener('submit', function(event) {
    const nameField = document.getElementById('name');
    if (nameField.value.trim() === '') {
      alert('Por favor, insira o seu nome.');
      event.preventDefault();
    }
  });
  
// Efeito de estrela piscando
var style = document.createElement('style');
style.innerHTML = `
    .estrela {
        position: absolute;
        width: 3px;
        height: 3px;
        background-color: #fff;
        border-radius: 50%;
        animation: brilhar 2s infinite alternate;
    }

    @keyframes brilhar {
        0% {
            opacity: 0.2;
        }
        100% {
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);
