import './style.css'
import { CourseIcon } from '../CourseIcon'
import jsImg from '../../assets/js.png';
import pyImg from '../../assets/python.png';

export function CoursesList() {
    return (
        <div className='bg'>
            <div className="course-list">
                <CourseIcon 
                    img={jsImg}
                    name="Curso Javascript"
                    author="John Javascript"
                    rate={3}>
                </CourseIcon>
                <CourseIcon 
                    img={pyImg}
                    name="Curso Python"
                    author="John Python"
                    rate={3}>
                </CourseIcon>
                <CourseIcon 
                    img={jsImg}
                    name="Curso Javascript"
                    author="John Javascript"
                    rate={3}>
                </CourseIcon>
                <CourseIcon 
                    img={pyImg}
                    name="Curso Python"
                    author="John Python"
                    rate={3}>
                </CourseIcon>
                <CourseIcon 
                    img={jsImg}
                    name="Curso Javascript"
                    author="John Javascript"
                    rate={3}>
                </CourseIcon>
                <CourseIcon 
                    img={pyImg}
                    name="Curso Python"
                    author="John Python"
                    rate={3}>
                </CourseIcon>
                <CourseIcon 
                    img={jsImg}
                    name="Curso Javascript"
                    author="John Javascript"
                    rate={3}>
                </CourseIcon>
                <CourseIcon 
                    img={pyImg}
                    name="Curso Python"
                    author="John Python"
                    rate={3}>
                </CourseIcon>
                <CourseIcon 
                    img={jsImg}
                    name="Curso Javascript"
                    author="John Javascript"
                    rate={3}>
                </CourseIcon>
                <CourseIcon 
                    img={pyImg}
                    name="Curso Python"
                    author="John Python"
                    rate={3}>
                </CourseIcon>
        </div>
        </div>

    )
}