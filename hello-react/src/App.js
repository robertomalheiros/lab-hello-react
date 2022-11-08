import './App.css';
import Cabecalho from './components/Cabecalho';
import ElementsBody from './components/ElementsBody';
import Icon1 from './images/icon1.png' 
import Icon2 from './images/icon2.png'
import Icon3 from './images/icon3.png'
import Icon4 from './images/icon4.png'
import Logo from './images/logo.png'
import Menu from './images/menu.png'

const head = {

  logo: Logo,
  menu: Menu,
  title: "Say hello to ReactJS",
  text: `You will learn how to use
  the most popular frontend li,
  and become a super Ninja developer.`,
  botao: "Awesome!"
}

const listElements = [

  {
    icon: Icon1,
    title: 'Declarative', 
    text: 'React makes it painless to create interactive UIs.'
  },
  {
    icon: Icon2,
    title: 'Components',
    text: 'Build encapsulated componets that manage their state'
  },
  {
    icon: Icon3,
    title: 'Single-Way',
    text: "A set immutable values are passed to the component's."
  },
  {
    icon: Icon4,
    title: 'JSX',
    text: 'Statically-typed, designed to run on modern browsers.'
  }
]

function App() {

  /*JAVASCRIPT*/

  return (
    
    /*HTML*/
    <div id="corpo"> 

        <Cabecalho logo={head.logo} menu={head.menu} 
        title={head.title} text={head.text} botao={head.botao}/>

        <div className="cElements">
        {listElements.map((element) => {
          return <ElementsBody icon={element.icon}
            title={element.title} text={element.text}/> 
        })}
        </div>
    </div>
  )
}

export default App;
