import './style.css'
import { Navbar } from '../../components/Navbar'
import { Footer } from '../../components/Footer'
import { Button } from '../../components/Button'
import { FormInput } from '../../components/FormInput'
import { useState } from 'react'

function CreateVideo(props) {

    const [title, setTitle] = useState("")

    return (
        <div className='create-video'>
            <FormInput name={'aa'} id={"title"} placeholder="Título" onChange={(e) => setTitle(e.target.value)}></FormInput>
            <FormInput name={'bb'} id={"link"} placeholder="link"></FormInput>
        </div>
    )
}

export function CreateCourse() {

    const [courseVideos, setCourseVideos] = useState([<CreateVideo key={0}/>])

    const [courseTitle, setCourseTitle] = useState("");
    const [courseDescription, setCourseDescription] = useState("");


    function addCourseVideo() {
        setCourseVideos([...courseVideos, <CreateVideo key={courseVideos.length}/>])
    }

    function createCourse(event) {
        event.preventDefault();
        const inputs = event.target.querySelectorAll('input');

        const videoData = [];

        for (let i = 0; i < inputs.length / 2; i++) {
            const chapter = {title: inputs[i * 2].value, link: inputs[(i * 2)+1].value}
            videoData.push(chapter);
        }


        console.log(videoData);

        console.log(courseTitle);
        console.log(courseDescription);
    }

    return (
        <>
            <Navbar></Navbar>
                <div className="wrapper">
                    <div className='create-course'>
                        <div className='create-course-info'>
                            <h2>Crie um novo curso</h2>
                            <FormInput placeholder="Título" onChange={(e) => setCourseTitle(e.target.value)}></FormInput>
                            <FormInput placeholder="Descrição" onChange={(e) => setCourseDescription(e.target.value)}></FormInput>
                        </div>
                        <div className='create-course-videos'>
                            <h2>Adicionar vídeos</h2>
                            <form onSubmit={createCourse} className='course-videos'>
                                {courseVideos.map(c => c)}
                                <div style={{display:'flex', justifyContent:'space-between'}}>
                                    <Button onClick={addCourseVideo} text="+"></Button>
                                    <Button text={"Criar curso"}></Button>
                                </div>
                            </form>
                        </div>
                        <div>
                            
                        </div>
                    </div>
                </div>
            <Footer></Footer>       
        </>
    )
}