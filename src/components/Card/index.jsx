import './style.css'

export function Card(props) {
    return (
        <div style={{ width: props.width }} className={'card ' + (props.className ?? '')}>
            { props.children }
        </div>
    )
}