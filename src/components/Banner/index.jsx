import './style.css'
import bannerImg from  '../../assets/banner.png'

export function Banner() {
    return (
            <img className="banner-image" src= {bannerImg} alt=""/>
    )
}