import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    
    // 1. A nossa "memória" agora guarda os dados do formulário e a mensagem da tela
    this.state = {
      email: '',
      senha: '',
      mensagem: ''
    };

    // 2. Fazendo o bind para os métodos não perderem a referência do "this"
    this.capturarEmail = this.capturarEmail.bind(this);
    this.capturarSenha = this.capturarSenha.bind(this);
    this.fazerLogin = this.fazerLogin.bind(this);
  }

  // 3. Método executado toda vez que o usuário digita algo no campo E-mail
  capturarEmail(evento) {
    this.setState({ email: evento.target.value });
  }

  // 4. Método executado toda vez que o usuário digita algo no campo Senha
  capturarSenha(evento) {
    this.setState({ senha: evento.target.value });
  }

  // 5. Método do Botão Acessar: Faz a validação da regra de negócio
  fazerLogin() {
    // Verifica se os valores digitados batem com a regra
    if (this.state.email === 'gabriel.machado@pucpr.br' && this.state.senha === '123456') {
      this.setState({ mensagem: 'Acessado com sucesso!' });
    } else {
      this.setState({ mensagem: 'Usuário ou senha incorretos!' });
    }
  }

  render() {
    return (
      <div style={{ padding: '30px', fontFamily: 'Arial, sans-serif' }}>
        
        <h1>Login</h1>
        
        {/* Campo de E-mail */}
        <div style={{ marginBottom: '10px' }}>
          <input 
            type="text" 
            placeholder="E-mail"
            value={this.state.email}
            onChange={this.capturarEmail} // O gatilho que captura a digitação
            style={{ padding: '8px', fontSize: '16px', width: '250px' }}
          />
        </div>
        
        {/* Campo de Senha */}
        <div style={{ marginBottom: '15px' }}>
          <input 
            type="password" 
            placeholder="Senha"
            value={this.state.senha}
            onChange={this.capturarSenha} // O gatilho que captura a digitação
            style={{ padding: '8px', fontSize: '16px', width: '250px' }}
          />
        </div>
        
        {/* Botão de Validação */}
        <button 
          onClick={this.fazerLogin} 
          style={{ padding: '8px 20px', fontSize: '16px', cursor: 'pointer' }}
        >
          Acessar
        </button>
        
        {/* Label da Mensagem (Ficará vazia até o botão ser clicado) */}
        <h2 style={{ marginTop: '30px', fontWeight: 'normal' }}>
          {this.state.mensagem}
        </h2>

      </div>
    );
  }
}

export default App;