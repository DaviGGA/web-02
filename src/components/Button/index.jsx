import './style.css'

export function Button(props) {
   return (
      <button
         style={{backgroundColor: props.backgroundColor}}
         className={(props.className ?? '') + ' button'}
         onClick={props.onClick ?? null}>
         {props.text}
      </button>
   )
}