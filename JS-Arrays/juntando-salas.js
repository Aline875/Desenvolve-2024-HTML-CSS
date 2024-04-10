const alunos = ["Aline", "Arthur", "Yonara", "Vitória", "Betânia", "Antonio", "José", "Marilene", "Maria", "Samara", "Matheus", "Alcides", "Geovanna", "Juliana", "Carlos", "Eduardo", "Taina", "Vinicios", "Weldes", "Beatriz"];

const salaJS = alunos.slice(0, alunos.length / 2);
const salaPy = alunos.slice(alunos.length / 2);

console.log(salaJS)
console.log(salaPy)

const salasUnificadas = salaJS.concat(salaPy);

console.log(salasUnificadas);

//É basicamente o mesmo que concatenar strings só que com arrays.