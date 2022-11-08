
function ElementsBody(props) {
    
    return (


            <div className="Elements-Body">
            <img src={props.icon} className="icon" alt="icon" />
            <h2 className="title" >{props.title}</h2>
            <p className="text">{props.text}</p>
            </div>
        
    )
}

export default ElementsBody