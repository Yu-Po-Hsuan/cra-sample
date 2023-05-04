const Input = ({id, labelText, value, onChangeHandler}) => {
    return (<>
        <label htmlFor={id}>{labelText}</label>
        <input type="text" id={id}
            value={value}
            onChange={onChangeHandler}
        ></input>
    </>)
}

export default Input;