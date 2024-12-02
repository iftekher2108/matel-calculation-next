
function TextInput(props) {
    return (
        <>
            <div className="form-control">
                <label htmlFor={props.id} className="label">
                   {props.label}
                </label>
                <input type={props.type} id={props.id} className="input input-primary focus:border-0 input-md" placeholder={props.placeholder} />
            </div>
        </>
    )
}

export default TextInput
