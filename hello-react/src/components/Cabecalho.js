//sempre com LETRA MAIUSCULA

function Cabecalho(props) {

    
    
    return (
        <div className="cabecalho">
            <div className="iconstop">
            <img src={props.logo} id="logo" className="iconhead" alt="logo" />
            <img src={props.menu} id="menu"className="iconhead" alt="menu" />
            </div>
            <h1>{props.title}</h1>
            <p>{props.text}</p>
            <button>{props.botao}</button>
        </div>
    )
}

export default Cabecalho