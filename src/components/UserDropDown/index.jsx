import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import './style.css'
import { useNavigate } from 'react-router-dom';

export function UserDropdown() {
    
    const navigate = useNavigate();

    function redirectTo(path) {
        return function () {
            navigate(path)
        }
    }

    return (
        <div>
            <Dropdown>
                <Dropdown.Toggle className='my-profile' id="dropdown-basic">
                    Menu do usuario
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item onClick={redirectTo('/create-course')}>Criar curso</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}

