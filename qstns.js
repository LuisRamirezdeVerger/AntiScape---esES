const colors = require("colors");

const tutorial = [
  {
    type: "text",
    nombre: "prologe",
    message:
      "Everything went too fast, after a flash throught your eyes, you felt the freedom in your soul, but, suddenly a force grab you...",
  },
];

const prologe = [
  {
    type: "input",
    nombre: "charnombre",
    message: `You hear a knock from someone who seems to be outside  *knock* *knock* *knock* Hey dude, are you okay? What's your nombre? >>`,
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
