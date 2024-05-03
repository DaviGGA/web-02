import './style.css'
import { Button } from '../Button'
import { SearchBar } from '../Searchbar'
import { UserDropdown } from '../UserDropDown'


export function Navbar() {
    function handleCLickPlatformName() {
        window.location.href = '/'
    }
    function handleCLickEntrar() {
        window.location.href = '/signin'
    }

    function renderLogin() {
        let userLogged = localStorage.getItem('email');

        return userLogged ? <UserDropdown/> : <Button text="Entrar" onClick={handleCLickEntrar}></Button>
    }

    return (
        <div className='nav-background'>
            <div className="app-navbar">
                <h4 onClick={handleCLickPlatformName} className="platform-name">HomePage</h4>
                <SearchBar></SearchBar>
                {renderLogin()}    
            </div>
        </div>

    )
}