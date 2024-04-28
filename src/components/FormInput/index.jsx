import './style.css'

export function FormInput(props) {
    return (
        <input className='form-input' placeholder={props.placeholder} type={props.type} value={props.value} onChange={props.onChange} required/>
    )
}

FormInput.defaultProps = {
    type: "text"  
};