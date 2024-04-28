import './style.css'
import {CardSignin} from '../../components/CardSignin'
import {CardLogin} from '../../components/CardLogin'

export function Signin() {

    return (
        <>
            <CardSignin></CardSignin>
            <div className="separador"></div>
            <CardLogin></CardLogin>
        </>
    )
}