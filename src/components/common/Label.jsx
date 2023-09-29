const Label = ({ labelName, htmlfor }) => {
    return <label htmlFor={htmlfor} className="mr-4">{labelName}</label>
}

export default Label