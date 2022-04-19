// if (durability === 0) {
//   inventory.slice(iceGun);
// }

let filter = {
  id: 1,
  nombre: "Filtro",
};

let fireGauntlet = {
  id: 1,
  nombre: "Guantelete Igneo",
  // power: 10,
  // durability: 1,
};

let iceGun = {
  id: 2,
  nombre: "Pistola de Hielo",
  // power: 10,
  // durability: 1,
};

let toxicMask = {
  id: 3,
  nombre: "Mascara Toxica"
};

let cotton = {
  id: 4,
  nombre: "Algodon AntiToxico"
};

let antiToxicMask = {
  id: 5,
  nombre: "Mascara AntiToxica"
};
module.exports = { filter, fireGauntlet, iceGun, toxicMask, cotton, antiToxicMask };
