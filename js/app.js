const dcidade = document.querySelector('.input-cidade');
const botao = document.querySelector('.botão-busca');
const cidade = document.querySelector('.cidade');
const tempo = document.querySelector('.temp');
const textoPrevisao = document.querySelector('.texto-previsão');
const imagem = document.querySelector('.icone');
const key = '933555c8b766f3c3e7c10c651c01d01a'

//evento


botao.addEventListener('click', buscar_cidade)
// async é usada para a função esperar a API retornar algo
async function buscar_cidade(){
    const procura_cidade = dcidade.value;
    console.log(procura_cidade);//teste de recebimento
    //API usada
    //await faz o fecth esperar 
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${procura_cidade}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json()) // converte a resposta em JSON
    console.log(dados)
    cidade.textContent = `Tempo em ${dados.name}`;
    tempo.textContent = `${dados.main.temp.toFixed(0)}°C`
    textoPrevisao.textContent = `${dados.weather[0].description}`;
    imagem.src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}