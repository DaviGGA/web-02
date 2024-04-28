import './style.css'
import {Card} from '../Card'
import { FormInput } from '../FormInput'
import { Button } from '../Button'
import { useState } from 'react';
import {users} from '../../DB/db.js';
import { useNavigate } from 'react-router-dom';

export function CardSignin() {

    // function addAcc(name, email, password){
    //     try{
    //         const fs = require('fs');
    //         let accountsData = fs.readFileSync('.../mockup/accouuntsDB.json');
    //         accountsData = JSON.parse(accountsData);
    //         accountsData[email] = {"name":name, "password":password}
    //         fs.writeFileSync('.../mockup/accouuntsDB.json', JSON.stringify(accountsData));
    //         alert(`A conta: ${email} foi criada com sucesso`)

    //     } catch (error){
    //         console.log(error);
    //     }
    // }


    function Form() {
        const [name, setName] = useState("");
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [passwordConfirmation, setPasswordConfirmation] = useState("");

        const navigate = useNavigate();

        const handleClickSignup = async (event) => {
            event.preventDefault();
            if (password === passwordConfirmation){
                if (!(email in users)){
                    try{
                        users[email] = {
                            name, email, password
                        }
                        



                        alert("Conta criada com sucesso!")
                        setName('')
                        setEmail('')
                        setPassword('')
                        setPasswordConfirmation('')

                        navigate("/signin");

        
                    } catch (error){
                    console.log(error);
                    }
                } else alert('Email já cadastrado.')
            }
            else alert("Senha está diferente de confirmação de senha.")
        }

        return(
            <form className='signin-form' onSubmit={handleClickSignup}>
                    <h3 className='form-title'>Seja bem-vindo!</h3>
                    <FormInput placeholder="Nome Completo" value = {name} onChange={(e) => setName(e.target.value)} ></FormInput>
                    <FormInput placeholder="E-mail" type = 'email' value = {email} onChange={(e) => setEmail(e.target.value)}></FormInput>
                    <FormInput placeholder="Senha" type = "password" value = {password} onChange={(e) => setPassword(e.target.value)}></FormInput>
                    <FormInput placeholder="Confirmar senha" type = "password" value = {passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)}></FormInput>
                    <div className='justify-between'>
                        <p>Conhecer termos? <a href="#">Clique aqui</a></p>
                        <Button
                            className="form-button"
                            text="Cadastrar-se"
                            type = 'submit'>
                        </Button>             
                    </div>
                </form>
        )
    }

    return (
        <div className='sign-in'>
            <div  className="card-wrapper" >      
                <Card width={'30%'}>
                    <Form/>
                </Card>
            </div>
        </div>
    )
}