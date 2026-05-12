// const nome = 'Eduardo'
// const sobrenome = 'Sá'

// const falaNome = () => nome + ' ' + sobrenome

// module.exports.nome = nome
// module.exports.sobrenome = sobrenome
// module.exports.falaNome = falaNome

// exports.nome = nome
// exports.sobrenome = sobrenome
// exports.falaNome = falaNome

class Pessoa {
  constructor(nome) {
    this.nome = nome
  }
}

exports.Pessoa = Pessoa