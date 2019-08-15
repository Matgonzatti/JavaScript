"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//////CLASSES
var Usuario =
/*#__PURE__*/
function () {
  function Usuario(email, senha) {
    _classCallCheck(this, Usuario);

    this.email = email;
    this.senha = senha;
  }

  _createClass(Usuario, [{
    key: "isAdmin",
    value: function isAdmin() {
      return this.admin === true;
    }
  }]);

  return Usuario;
}();

var Admin =
/*#__PURE__*/
function (_Usuario) {
  _inherits(Admin, _Usuario);

  function Admin(email, senha) {
    var _this;

    _classCallCheck(this, Admin);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Admin).call(this, email, senha));
    _this.admin = true;
    return _this;
  }

  return Admin;
}(Usuario);

var User1 = new Usuario("gonzatti@gmail.com", "senha123");
var Adm1 = new Admin("gonzatti@gmail.com", "senha123");
console.log(User1.isAdmin());
console.log(Adm1.isAdmin()); /////VETORES

var usuarios = [{
  nome: "Matheus",
  idade: 23,
  empresa: "Gonzatti inc."
}, {
  nome: "Ribeiro",
  idade: 15,
  empresa: "Gonzatti inc."
}, {
  nome: "Gonzatti",
  idade: 30,
  empresa: "Facebook"
}];
var idades = usuarios.map(function (usuario) {
  return usuario.idade;
});
console.log(idades);
var funcGonzatti = usuarios.find(function (usuario) {
  return usuario.idade >= 18 && usuario.empresa === "Gonzatti inc.";
});
console.log(funcGonzatti);
var funcGoogle = usuarios.find(function (usuario) {
  return usuario.empresa === "Google";
});
console.log(funcGoogle);
var multIdade = usuarios.map(function (usuario) {
  return _objectSpread({}, usuario, {
    idade: usuario.idade * 2
  });
}).filter(function (usuario) {
  return usuario.idade <= 50;
});
console.log(multIdade); /////ARROW FUNCTIONS

var arr = [1, 2, 3, 4, 5];
var arr10 = arr.map(function (item) {
  return item + 10;
});
console.log(arr10);
var usuario = {
  nome: "Matheus",
  idade: 23
};

var mostraIdade = function mostraIdade(usuario) {
  return usuario.idade;
};

console.log(mostraIdade(usuario));
var nome = "Matheus";
var idade = 28;

var mostraUsuario = function mostraUsuario() {
  var nome = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Matheus";
  var idade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 18;
  return {
    nome: nome,
    idade: idade
  };
};

console.log(mostraUsuario(nome, idade));
console.log(mostraUsuario(nome));

var promise = function promise() {
  return new Promise(function (resolve, reject) {
    return resolve();
  });
}; //////DESESTRUTURAÇÃO


var empresa = {
  nomeEmpresa: "Gonzatti Inc.",
  endereco: {
    cidade: "Pato Branco",
    estado: "PR"
  }
};
var nomeEmpresa = empresa.nomeEmpresa,
    _empresa$endereco = empresa.endereco,
    cidade = _empresa$endereco.cidade,
    estado = _empresa$endereco.estado;
console.log(nomeEmpresa);
console.log(cidade);
console.log(estado);

function mostraInfo(usuario2) {
  var nomeUsuario = usuario2.nomeUsuario,
      idadeUsuario = usuario2.idadeUsuario;
  return "".concat(nomeUsuario, " tem ").concat(idadeUsuario, " anos.");
}

console.log(mostraInfo({
  nomeUsuario: "Matheus",
  idadeUsuario: 28
})); /////REST

var arr3 = [1, 2, 3, 4, 5, 6];
var x = arr3[0],
    y = arr3.slice(1);
console.log(x);
console.log(y);
var usuario3 = {
  nome: "Matheus",
  idade: 28,
  endereco: {
    cidade: "Pato Branco",
    uf: "PR",
    pais: "Brasil"
  }
};

var usuario4 = _objectSpread({}, usuario, {
  nome: "Gonzatti"
});

console.log(usuario3);
console.log(usuario4); /////TEMPLATE LITERALS

var usuarioTemplate = "Matheus";
var idadeTemplate = 28;
console.log("O usu\xE1rio ".concat(usuarioTemplate, " possui ").concat(idadeTemplate, " anos")); /////OBJECT SHORT SYNTAX

var nomeOSS = "Matheus";
var idadeOSS = 28;
var usuarioOSS = {
  nomeOSS: nomeOSS,
  idadeOSS: idadeOSS,
  cidadeOSS: "Pato Branco"
};
console.log(usuarioOSS);
