var ra, nome;

function Aluno(ra, nome) {
  this.ra = ra;
  this.nome = nome;
}

const objetoAluno = {
  ra: "0030482121004",
  nome: "João 123",
};

const obAluno = {
  ra: "0030482121023",
  nome: "Lucas",
  getNome() {
    return this.nome;
  },
  getRA() {
    return this.ra;
  },
};

const objectAluno = Object.create(obAluno);
