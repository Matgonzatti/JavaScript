//////CLASSES
class Usuario {
  constructor(email, senha) {
    this.email = email;
    this.senha = senha;
  }

  isAdmin() {
    return this.admin === true;
  }
}

class Admin extends Usuario {
  constructor(email, senha) {
    super(email, senha);

    this.admin = true;
  }
}

const User1 = new Usuario("gonzatti@gmail.com", "senha123");
const Adm1 = new Admin("gonzatti@gmail.com", "senha123");

console.log(User1.isAdmin());
console.log(Adm1.isAdmin());

/////VETORES
const usuarios = [
  { nome: "Matheus", idade: 23, empresa: "Gonzatti inc." },
  { nome: "Ribeiro", idade: 15, empresa: "Gonzatti inc." },
  { nome: "Gonzatti", idade: 30, empresa: "Facebook" }
];

var idades = usuarios.map(usuario => usuario.idade);
console.log(idades);

var funcGonzatti = usuarios.find(
  usuario => usuario.idade >= 18 && usuario.empresa === "Gonzatti inc."
);
console.log(funcGonzatti);

var funcGoogle = usuarios.find(usuario => usuario.empresa === "Google");
console.log(funcGoogle);

var multIdade = usuarios
  .map(usuario => ({
    ...usuario,
    idade: usuario.idade * 2
  }))
  .filter(usuario => usuario.idade <= 50);
console.log(multIdade);

/////ARROW FUNCTIONS
const arr = [1, 2, 3, 4, 5];
var arr10 = arr.map(item => item + 10);
console.log(arr10);

const usuario = { nome: "Matheus", idade: 23 };
const mostraIdade = usuario => usuario.idade;

console.log(mostraIdade(usuario));

const nome = "Matheus";
const idade = 28;
const mostraUsuario = (nome = "Matheus", idade = 18) => ({
  nome,
  idade
});

console.log(mostraUsuario(nome, idade));
console.log(mostraUsuario(nome));

const promise = () => new Promise((resolve, reject) => resolve());

//////DESESTRUTURAÇÃO
const empresa = {
  nomeEmpresa: "Gonzatti Inc.",
  endereco: {
    cidade: "Pato Branco",
    estado: "PR"
  }
};

const {
  nomeEmpresa,
  endereco: { cidade, estado }
} = empresa;

console.log(nomeEmpresa);
console.log(cidade);
console.log(estado);

function mostraInfo(usuario2) {
  const { nomeUsuario, idadeUsuario } = usuario2;
  return `${nomeUsuario} tem ${idadeUsuario} anos.`;
}
console.log(mostraInfo({ nomeUsuario: "Matheus", idadeUsuario: 28 }));

/////REST
const arr3 = [1, 2, 3, 4, 5, 6];

const [x, ...y] = arr3;

console.log(x);
console.log(y);

const usuario3 = {
  nome: "Matheus",
  idade: 28,
  endereco: {
    cidade: "Pato Branco",
    uf: "PR",
    pais: "Brasil"
  }
};

var usuario4 = { ...usuario, nome: "Gonzatti" };
console.log(usuario3);
console.log(usuario4);

/////TEMPLATE LITERALS
const usuarioTemplate = "Matheus";
const idadeTemplate = 28;
console.log(`O usuário ${usuarioTemplate} possui ${idadeTemplate} anos`);

/////OBJECT SHORT SYNTAX
const nomeOSS = "Matheus";
const idadeOSS = 28;
const usuarioOSS = {
  nomeOSS,
  idadeOSS,
  cidadeOSS: "Pato Branco"
};

console.log(usuarioOSS);
