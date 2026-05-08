function random(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== "string") reject("Bad value");
    setTimeout(() => {
      resolve(msg);
    }, tempo);
  });
}

esperaAi("Conexão com o BD", random(1, 3))
  .then((resposta) => {
    console.log(resposta);
    return esperaAi("Buscando dados da BASE", random(1, 3));
  })
  .then((resposta) => {
    console.log(resposta);
    return esperaAi("Dados encontrados", random(1, 3));
  })
  .then((resposta) => {
    console.log(resposta);
  })
  .then(() => {
    console.log("Fim do processo");
  })
  .catch((e) => {
    console.log("ERRO:", e);
  });
