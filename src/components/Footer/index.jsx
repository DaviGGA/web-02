import './style.css'
import { FaRegQuestionCircle } from "react-icons/fa";

export function Footer() {

    function handleFAQClick() {
        window.location.href = './faq'
    }

    return (
        <div className='footer'>
            <div  className='align-faq'>
                <div onClick={handleFAQClick} className='faq'>
                    <FaRegQuestionCircle></FaRegQuestionCircle>
                    <p>F.A.Q</p>
                </div>
            </div>
        </div>
    )
}