import './style.css'
import { Button } from '../Button'
import { SearchBar } from '../Searchbar'


export function Navbar() {
    return (
        <div className='nav-background'>
            <div className="navbar">
                <h4 className="platform-name">Nome</h4>
                <SearchBar></SearchBar>
                <Button text="Entrar"></Button>
            </div>
        </div>

    )
}