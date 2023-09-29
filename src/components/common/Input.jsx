const Input = ({ type, name, handler }) => {
    return <input type={type} name={name} onChange={handler}
        className="border-2" />
}

export default Input