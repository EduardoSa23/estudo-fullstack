function random(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== "string") {
      reject("Bad value");
      return;
    }
    setTimeout(() => {
      resolve(msg.toUpperCase() + " - Passei na promise");
    }, tempo);
  });
}

const promises = [
  esperaAi("Conexão com o BD", random(1, 3)),
  esperaAi("Buscando dados da BASE", random(1, 3)),
  esperaAi("Dados encontrados", random(1, 3)),
];

Promise.race(promises)
  .then((respostas) => {
    console.log(respostas);
  })
  .catch((e) => {
    console.log("ERRO:", e);
  });
