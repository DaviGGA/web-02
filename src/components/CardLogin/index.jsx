import './style.css'
import {Card} from '../Card'
import { FormInput } from '../FormInput'
import { Button } from '../Button'
import { useState } from 'react';
import {users} from '../../DB/db.js';

export function CardLogin() {



    function Form() {
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");

        const handleClickLogin = async (event) => {
            event.preventDefault();
            if (email in users){
                if (password === users[email].password){
                    try{
                        alert("Login efetuado com sucesso.")
                        localStorage.setItem('email', email);   
                        window.location.href = './';     
                    } catch (error){
                    console.log(error);
                    }
                } else alert('Senha incorreta.')
            }
            else alert("Usuário não cadastrado.")
        }

        return(
            <form className='login-form' onSubmit={handleClickLogin}>
                    <h3 className='form-title'>Membro da comunidade?</h3>
                    <FormInput placeholder="E-mail" type = 'email' value = {email} onChange={(e) => setEmail(e.target.value)}></FormInput>
                    <FormInput placeholder="Senha" type = "password" value = {password} onChange={(e) => setPassword(e.target.value)}></FormInput>
                    <div className='justify-between'>
                        <p>Esqueceu a senha? <a href="#">Clique aqui</a></p>
                        <Button
                            className="form-button"
                            text="Entrar"
                            type = 'submit'>
                        </Button>             
                    </div>
                </form>
        )
    }

    return (
        <div className='log-in'>
            <div  className="card-wrapper" >      
                <Card width={'30%'}>
                    <Form/>
                </Card>
            </div>
        </div>
    )
}