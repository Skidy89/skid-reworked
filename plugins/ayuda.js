let handler = async (m, { conn, args, usedPrefix }) => {
  const preguntas = [
    { pregunta: "¿Qué es la energía cinética?", respuesta: "Es la energía que posee un objeto debido a su movimiento" },
    { pregunta: "¿Cómo se calcula la energía cinética?", respuesta: "La energía cinética se calcula mediante la fórmula E_cinética = 0.5 * m * v^2, donde m es la masa y v es la velocidad" },
    { pregunta: "¿Qué factores influyen en la energía cinética?", respuesta: "La masa y la velocidad son los dos factores que influyen en la energía cinética" },
    { pregunta: "¿Qué pasa con la energía cinética durante una colisión inelástica?", respuesta: "Durante una colisión inelástica, la energía cinética se conserva parcialmente, ya que parte de la energía se pierde en forma de calor, sonido, etc." },
    { pregunta: "¿Qué pasa con la energía cinética durante una colisión elástica?", respuesta: "Durante una colisión elástica, la energía cinética se conserva totalmente, ya que los objetos rebotan y conservan la misma energía cinética que tenían antes de la colisión" }
  ];
  let randomIndex = Math.floor(Math.random() * preguntas.length);
  let selectedQuestion = preguntas[randomIndex];
  let timeout = 60; // tiempo en segundos

  let questionMessage = await conn.sendMessage(m.chat, `💬 ${selectedQuestion.pregunta}`, m);

  let timer = setInterval(() => {
    timeout--;
    conn.reply(m.chat,  `💬 ${selectedQuestion.pregunta} \n\n⏱ Tiempo restante: ${timeout} segundos`);
    if (timeout === 0) {
      clearInterval(timer);
      conn.reply(m.chat,  `💬 ${selectedQuestion.pregunta} \n\n🔴 El tiempo ha terminado! La respuesta correcta es: ${selectedQuestion.respuesta}`);
    }
  }, 1000);
};


handler.help = ["juego preguntas"];
handler.command = /^(100)$/i;

export default handler;
