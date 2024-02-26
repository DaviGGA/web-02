import './style.css'

export function FormInput(props) {
    return (
        <input className='form-input' placeholder={props.placeholder} type="text"/>
    )
}