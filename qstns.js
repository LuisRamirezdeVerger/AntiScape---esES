const colors = require("colors");

const tutorial = [
  {
    type: "text",
    nombre: "prologe",
    message:
      "- De viaje de verano, te has comprado un viaje a Sevilla, tu guía, está esperándote en el aeropuerto.",
  },
];

const prologe = [
  {
    type: "input",
    nombre: "charnombre",
    message: `*silbido* FIUUU! Miarma! Por aquí, que se me ha olvidao' er cartelito pero yo soy tu guía. Yo soy er Wito, encanta'o. ¿Tú como te llama', corasón?`,
  },
];

const room00 = [
  {
    type: "input",
    nombre: "room00",
    message: "What you wanna do now? >>".green,
  },
];

const room01 = [
  {
    type: "input",
    nombre: "room01",
    message: "What you wanna do now? >>".green,
  },
];

const room02 = [
  {
    type: "input",
    nombre: "room02",
    message: "What you wanna do now? >>".green,
  },
];

const room03 = [
    {
      type: "input",
      nombre: "room03",
      message: "What you wanna do now? >>".green,
    },
];

module.exports = {
  tutorial,
  prologe,
  room00,
  room01,
  room02,
  room03,
};
