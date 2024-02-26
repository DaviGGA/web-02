import './style.css'

export function Button(props) {
   return (
    <button style={{backgroundColor: props.backgroundColor}} className='button'>{props.text}</button>
   )
}