const Input = ({ type, name, handler, id }) => {
    return <input id={id} type={type} name={name} onChange={handler}
        className="border-2" />
}

export default Input