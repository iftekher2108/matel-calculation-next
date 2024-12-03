
function TextInput({type,id,placeholder,label,className,onChange}) {
    return (
        <>
            <div className="form-control">
                <label htmlFor={id} className="label">
                   {label}
                </label>
                <input onChange={onChange} type={type} id={id} className={"input input-primary focus:border-0 input-md " + className} placeholder={placeholder} />
            </div>
        </>
    )
}

export default TextInput
