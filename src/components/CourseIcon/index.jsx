import './style.css';
import { FaRegStar } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";



export function CourseIcon(props) {
    return (
        <div className='course-block'>
            <img className='course-img' src={props.img} alt=""/>
            <p className='text course-name'>{props.name}</p>
            <p className='text course-author'>{props.author}</p>
            <div className='course-rating'>
                <div className='course-rating-stars'>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaRegStar></FaRegStar>
                    <FaRegStar></FaRegStar>
                </div>
                <p className='course-rating-number'>{props.rate}</p>
            </div>
        </div>
    )
}