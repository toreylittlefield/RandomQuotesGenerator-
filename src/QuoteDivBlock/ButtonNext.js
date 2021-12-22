

const ButtonNext = (props) => {

    return (
        <button onClick={props.onClick} style={{ backgroundColor: props.style }}>Next</button>
    )
}

export default ButtonNext;