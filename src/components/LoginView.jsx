import { useState }  from 'react';
import ImagePerson   from '../assets/images/person.png';
import ImageEmail    from '../assets/images/email.png';
import ImagePassword from '../assets/images/password.png';
import '../styles/LoginView.css';

const LoginView = () => {
  // Estados para armazenar os valores dos inputs
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Função para lidar com o envio do formulário
  const handleSubmit = async (event) => {
    event.preventDefault(); // Impede o comportamento padrão do formulário (recarregar a página)

    // Verifica se todos os campos estão preenchidos
    if (!username || !email || !password) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    const dados = JSON.stringify({
      email: email,
      password: password,
    });

    try {
      const response = await fetch('http://localhost:3000/v1/user/login', {
        method: 'POST',
        body: dados,
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Erro na requisição');
      }

      const data = await response.json();
      const token = data.token;
      localStorage.setItem('token', token); // Armazena o token no localStorage
      window.location.href = '/home'; // Redireciona para a página inicial após o login

    } catch (error) {
      console.error('Erro:', error);
      alert('Erro ao realizar login.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2 className="login-title">Identifique-se</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <img src={ImagePerson} alt="User Icon" width={40} height={40} />
            <input
              id="username"
              type="text"
              placeholder="Usuário"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <img src={ImageEmail} alt="Email Icon" width={40} height={40} />
            <input
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <img src={ImagePassword} alt="Password Icon" width={40} height={40} />
            <input
              id="password"
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="forgot-password">
            <a href="#">Esqueceu a senha?</a>
          </div>
          <button type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
};

export default LoginView;