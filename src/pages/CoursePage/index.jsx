import { Navbar } from '../../components/Navbar'
import { Footer } from '../../components/Footer'
import { Chat } from '../../components/Chat'
import courseVideo from '../../assets/video-ex.mp4'
import './style.css'



const courseChapters = [
    {
        name: "Variáveis",
        time: '2:48'
    },
    {
        name: "Condicionais",
        time: '1:35'
    },
    {
        name: "Laços de repetição",
        time: '5:18'
    },
    {
        name: "Fim do curso",
        time: '1:13'
    },
     
]

export function CoursePage() {
    return (
        <div>
            <Navbar></Navbar>
            <div className='course'>
                <video controls className='course-video' src={courseVideo}></video>
                <div className='course-playlist'>

                    {courseChapters.map( (c, i) => {
                        return (
                            <div key={i} className='course-chapter'>
                                <p className='course-chapter_name'>{c.name}</p>
                                <p className='course-chapter_time'>{c.time}</p>                      
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className='course-details'>
                <div>
                    <h2 className='course-title'>Curso de Python</h2>
                    <p className='course-author'>John Python</p>
                </div>

                <p className='course-description'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam modi tenetur error, vel temporibus exercitationem, cum repudiandae ipsa sit deserunt harum non dicta doloribus veritatis ratione vero dolorum iusto quibusdam!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam modi tenetur error, vel temporibus exercitationem, cum repudiandae ipsa sit deserunt harum non dicta doloribLorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam modi tenetur error, vel temporibus exercitationem, cum repudiandae ipsa sit deserunt harum non dicta doloribLorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam modi tenetur error, vel temporibus exercitationem, cum repudiandae ipsa sit deserunt harum non dicta dolorib</p>
            </div>
            <Chat></Chat>
            <Footer></Footer>
        </div>
    )
}