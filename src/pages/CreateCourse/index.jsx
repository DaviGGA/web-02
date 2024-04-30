import './style.css'
import { Navbar } from '../../components/Navbar'
import { Footer } from '../../components/Footer'
import { Button } from '../../components/Button'
import { FormInput } from '../../components/FormInput'
import { useState } from 'react'

function CreateVideo() {
    return (
        <div className='create-video'>
            <FormInput placeholder="Título"></FormInput>
            <FormInput placeholder="link"></FormInput>
        </div>
    )
}

export function CreateCourse() {

    const [createVideos, setCreateVideos] = useState(1);

    function addCourseVideo() {

    }

    return (
        <>
            <Navbar></Navbar>
                <div className='create-course'>
                    <div className='create-course-info'>
                        <h2>Crie um novo curso</h2>
                        <FormInput placeholder="Título"></FormInput>
                        <FormInput placeholder="Descrição"></FormInput>
                    </div>
                    <div className='create-course-videos'>
                        <h2>Adicionar vídeos</h2>
                        <CreateVideo></CreateVideo>
                        <div>
                            <Button text="+"></Button>
                        </div>
                    </div>
                </div>

            <Footer></Footer>       
        </>
    )
}