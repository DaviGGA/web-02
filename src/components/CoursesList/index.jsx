import './style.css'
import { CourseIcon } from '../CourseIcon'
import jsImg from '../../assets/js.png';
import pyImg from '../../assets/python.png';





const courses = [
    {
        img: jsImg,
        name: "Curso Javascript",
        author: "John Javascript",
        rate:3
    },
    {
        img: pyImg,
        name: "Curso Python",
        author: "John Python",
        rate: 4
    },
    {
        img: jsImg,
        name: "Curso Javascript",
        author: "John Javascript",
        rate:3
    },
    {
        img: pyImg,
        name: "Curso Python",
        author: "John Python",
        rate: 4
    },
    {
        img: jsImg,
        name: "Curso Javascript",
        author: "John Javascript",
        rate:3
    },
    {
        img: pyImg,
        name: "Curso Python",
        author: "John Python",
        rate: 4
    },
]


export function CoursesList() {
    return (
        <div className='bg'>
            <div className="course-list">
                {courses.map((c, i) => {
                    return (
                        <CourseIcon
                        img={c.img}
                        key={i}
                        name={c.name}
                        author={c.author}
                        rate={c.rate}>
                        </CourseIcon>
                    )
                })}
            </div>
        </div>
    )
}