import * as S from './styles';

const Main = () => {
  return (
    <S.Wrapper>
      <S.Logo
        src="/images/logo.svg"
        alt="Imagem de um átomo e React Avançado escrito ao lado"
      />
      <S.Title>React Avançado</S.Title>

      <S.Description>
        TypeScript, ReactJS, NextJS e Styled-Components
      </S.Description>

      <S.Illustration
        src="/images/hero-illustration.svg"
        alt="Desenvolvedor sentado de frente à uma tela com código"
      />
    </S.Wrapper>
  );
};

export default Main;
