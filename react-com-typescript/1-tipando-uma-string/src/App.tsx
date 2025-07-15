
import './App.css'
import { AvatarComImagem } from './components/AvatarComImagem'
import { BotaoComTextoDinamico } from './components/BotaoComTextoDinamico'
import { CartaoDeProduto } from './components/CartaoDeProduto'
import { ContadorDeNumero } from './components/ContadorDeNumero'
import { EstadoComString } from './components/EstadoComString'
import { MostrarIdade } from './components/MostrarIdade'
import { NomeComponent } from './components/NomeComponent'
import { UserCard } from './components/UserCard'
import { VisibilidadeTexto } from './components/VisibilidadeTexto'


// tipagem de um usuario
type User = {
  nome: string,
  idade: number,
}

// tipagem de um produto
type Produto = {
  nome: string,
  preco: number
}

// tipagem de um botão com texto dinamico
interface Botao {
  texto: string
}

//tipagem do avatar
type Avatar = {
  url: string
  alt: string
}

// tipagem do UserCard
interface IUserCard {
  nome: string,
  email: string,
  idade: number,
  url: string,
  alt: string
}

function App() {

  const user: User = {
    nome: "Leirisson",
    idade: 26
  }

  const vaivelBtn1: Botao = {
    texto: "Cadastrar"
  }

  const vaivelBtn2: Botao = {
    texto: "Excluir"
  }


  const avatarLeirisson: Avatar = {
    url: "http://github.com/leirisson.png",
    alt: "foto do perfil do github"
  }

  const cardUser1: IUserCard = {
    nome: "Leirisson",
    email: "Leirisson123@example.com",
    idade: 26,
    url: "http://github.com/leirisson.png",
    alt: "foto do perfil do GitHub"
  }

  const produto: Produto = {
    nome: "Teclado magnetico.",
    preco: 250.65
  }

  return (
    <>
      <h1>1 - Criando Componentes com TypeScript</h1>
      <hr />
      <div>
        <p>primeiro component</p>
        <NomeComponent nome="Leirisson" />
      </div>
      <hr /><hr />
      <div>
        <p>segundo component</p>
        <MostrarIdade
          nome={user.nome}
          idade={user.idade} />
      </div>
      <hr /><hr />
      <div>
        <p>Card de produto</p>
        <CartaoDeProduto
          nome={produto.nome}
          preco={produto.preco}
        />
      </div>
      <hr /><hr />
      <div>
        <p>Botão com texto dinâmico</p>
        <BotaoComTextoDinamico texto={vaivelBtn1.texto} /> <br />
        <BotaoComTextoDinamico texto={vaivelBtn2.texto} />
      </div>
      <hr /><hr />
      <div>
        <p>Avatar com imagem</p>
        <AvatarComImagem
          url={avatarLeirisson.url}
          alt={avatarLeirisson.alt}
        />
      </div>
      <hr /><hr />
      <div>
        <h1> Exercício 2: Crie um componente UserCard que receba nome, email e idade, e exiba as informações.</h1>
        <UserCard
          nome={cardUser1.nome}
          email={cardUser1.email}
          idade={cardUser1.idade}
          url={cardUser1.url}
          alt={cardUser1.alt}
        />
      </div>
      <hr /><hr />
      <h1> 2 - UseState com TypeScript</h1><hr />

      <div>
        <p>Contador de numeros</p>
        <ContadorDeNumero />
      </div>
      <hr /><hr />

      <div>
        <p>Exemplo 2: Estado de string</p>
        <EstadoComString />
      </div>
      <hr /><hr />

      <div>
        <p>
          Crie um componente VisibilidadeTexto com um botão que
        </p>

        <VisibilidadeTexto />
      </div>

    </>
  )
}

export default App
