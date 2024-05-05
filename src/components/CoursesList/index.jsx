import './style.css'
import { CourseIcon } from '../CourseIcon'



export function CoursesList(props) {
    return (
        <div className='bg'>
            <div className="course-list">
                {props.courses.map((c, i) => {
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