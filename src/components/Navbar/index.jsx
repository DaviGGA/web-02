import './style.css'
import { Button } from '../Button'
import { SearchBar } from '../Searchbar'


export function Navbar() {
    function handleCLickPlatformName() {
        window.location.href = '/'
    }
    function handleCLickEntrar() {
        window.location.href = '/signin'
    }

    function renderLogin() {
        let userLogged = localStorage.getItem('email');

        return userLogged ? <h4>Meu perfil</h4> : <Button text="Entrar" onClick={handleCLickEntrar}></Button>
    }

    return (
        <div className='nav-background'>
            <div className="navbar">
                <h4 onClick={handleCLickPlatformName} className="platform-name">HomePage</h4>
                <SearchBar></SearchBar>
                {renderLogin()}    
            </div>
        </div>

    )
}