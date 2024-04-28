import './style.css'

export function Button(props) {
   return (
      <button
         type={props.submit ?? null}
         style={{backgroundColor: props.backgroundColor}}
         className={(props.className ?? '') + ' button'}
         onClick={props.onClick ?? null}>
         {props.text}
         
      </button>
   )
}