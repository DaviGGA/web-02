import {Navbar} from '../../components/Navbar'
import {Banner} from '../../components/Banner'
import { CategoriesBar } from '../../components/CategoriesBar'
import { CoursesList } from '../../components/CoursesList'


export function Homepage() {
    return (
        <>
            <Navbar></Navbar>
            <Banner></Banner>
            <CategoriesBar></CategoriesBar>
            <CoursesList></CoursesList>
        </>

    )
}