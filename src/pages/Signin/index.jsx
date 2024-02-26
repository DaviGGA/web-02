import './style.css'
import {Card} from '../../components/Card'
import { FormInput } from '../../components/FormInput'
import { Button } from '../../components/Button'

export function Signin() {
    return (
        <div className='sign-in'>
            <div  className="card-wrapper" >      
                <Card width={'30%'}>
                    <form className='signin-form'>
                        <h3 className='form-title'>Seja bem-vindo!</h3>
                        <FormInput placeholder="Nome Completo"></FormInput>
                        <FormInput placeholder="E-mail"></FormInput>
                        <FormInput placeholder="Senha"></FormInput>
                        <FormInput placeholder="Confirmar senha"></FormInput>
                        <div className='justify-between'>
                            <p>Já tem conta? <a href="#">Clique aqui</a></p>
                            <Button
                                className="form-button"
                                text="Cadastrar-se"
                                backgroundColor="#000">
                            </Button>             
                        </div>
                    </form>
                </Card>
            </div>
        </div>
    )
}