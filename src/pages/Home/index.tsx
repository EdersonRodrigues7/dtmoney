import { Header } from '../../components/Header';

export function Home() {
  return (
    <>
      <Header />
      <div className="homeImage">{/* Inserir imagem ou animação */}</div>
      <div className="about">
        <div className="aboutText">
          <p></p>
        </div>
        <div className="aboutLinks">
          <a href="/login">Fazer Login</a>
          <p>
            Não tem uma conta? <a href="/register">Cadastre-se</a>{' '}
          </p>
        </div>
      </div>
    </>
  );
}
