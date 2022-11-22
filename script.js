class Pessoa {
  // Composta por nome idade sexo
  nome;
  idade;
  sexo;

  // Por padrao para criar uma pessoa precisa ter os 3 atributos
  constructor(nome, idade, sexo) {
    this.nome = nome;
    this.idade = idade;
    this.sexo = sexo;
  }

  //existem os metodos gets e sets
  // get -> obter
  get retornarPessoa() {
    return `As caracteristicas dessa pessoa são: ${this.nome} - ${this.idade} - ${this.sexo}`;
  }

  set mudarPessoaNome(nome) {
     this.nome = nome;
  }
}

// Herança
class Funcionario extends Pessoa {
  cargo;

  constructor(nome, idade, sexo, cargo) {
    super(nome, idade, sexo);
    this.cargo = cargo;
  }

  // Reescrever um metodo ou um atributo que esta herdando.
  get retornarPessoa() {
    return `As caracteristicas desse funcionario são: ${this.nome} - ${this.idade} - ${this.sexo}`;
  }

  get dadosFuncionario() {
    return this.retornarPessoa + " - " + this.cargo;
  }
}

const pessoa = new Pessoa("Otto", 27, "M");
console.log("Primeiro log " + pessoa.retornarPessoa)
if (pessoa.nome === "Otto") {
    pessoa.mudarPessoaNome = "Otto Neto"
} else {
  pessoa.mudarPessoaNome = 'Ottinho'
}
console.log("Segundo log " + pessoa.retornarPessoa)
// const funcionario = new Funcionario("Neto", 32, "M", "Desenvolvedor");

// console.log(funcionario.dadosFuncionario);
