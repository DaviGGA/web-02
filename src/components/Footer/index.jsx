import './style.css'
import { FaRegQuestionCircle } from "react-icons/fa";

export function Footer() {
    return (
        <div className='footer'>
            <div className='faq'>
                <FaRegQuestionCircle></FaRegQuestionCircle>
                <p>F.A.Q</p>
            </div>
        </div>
    )
}