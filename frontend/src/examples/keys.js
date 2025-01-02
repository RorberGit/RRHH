const initial = {
  frm: "Forma",
  lgc: "Logica",
  mtc: "Matematica",
  prg: "Programacion",
};

const llave = Object.keys(initial).map((key) => initial[key]);

console.info("Constante", llave);
