import './style.css'
import { Button } from '../Button'
import { SearchBar } from '../Searchbar'


export function Navbar() {
    function handleCLickPlatformName() {
        window.location.href = '/'
    }

    return (
        <div className='nav-background'>
            <div className="navbar">
                <h4 onClick={handleCLickPlatformName} className="platform-name">Nome</h4>
                <SearchBar></SearchBar>
                <Button text="Entrar"></Button>
            </div>
        </div>

    )
}