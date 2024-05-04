import {Navbar} from '../../components/Navbar'
import {Banner} from '../../components/Banner'
import {Footer} from '../../components/Footer'
import { CategoriesBar } from '../../components/CategoriesBar'
import { CoursesList } from '../../components/CoursesList'
import { useState } from 'react'
import jsImg from '../../assets/js.png';
import pyImg from '../../assets/python.png';


export function Homepage() {

    const [courses, setCourses] = useState([
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
    ]);
    const [filteredCourses, setFilteredCourses] = useState(courses);


    function searchCourses(param) {
        setFilteredCourses(courses.filter( c => c.name.toLowerCase().includes(param.toLowerCase()) || c.author.toLowerCase().includes(param.toLowerCase())))
    } 


    return (
        <>
            <Navbar onSearch={searchCourses}></Navbar>
            <Banner></Banner>
            {/* <CategoriesBar></CategoriesBar> */}
            <CoursesList courses={filteredCourses}></CoursesList>
            <Footer></Footer>
        </>

    )
}