function random(min = 0, max = 3) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== "string") {
      reject("CAI NO ERRO");
      return;
    }
    setTimeout(() => {
      resolve(msg.toUpperCase() + " - Passei na promise");
    }, tempo);
  });
}

async function executar() {
  try {
    const resultado = await esperaAi("Conexão com o BD", random());
  console.log(resultado);

  const resultado2 = await esperaAi("Buscando dados da BASE", random());
  console.log(resultado2);

  const resultado3 = await esperaAi("Dados encontrados", random());
  console.log(resultado3);

  console.log("Fim do processo");
  } catch (e) {
    console.log("ERRO:", e);
  }
}
executar();