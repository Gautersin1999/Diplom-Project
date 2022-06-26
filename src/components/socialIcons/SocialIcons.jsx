import './Soicialicons.css'
import img8 from './../../Img/img8.png'
import img9 from './../../Img/img9.png'
import img10 from './../../Img/img10.png'
import img11 from './../../Img/img11.png'
function SocialIcons(){
    return(
        <div className='FatherBlockEight'>
          <h1 className='ContactsClass'>Контакты</h1>
          <div className='ContactsIconsClass'>
             <a className='telegramlink' href='https://www.whatsapp.com/'><img className='ContactsImgClass' src={img8} /></a>
             <a href='https://www.instagram.com/'> <img src={img9}/></a>
             <a href='https://web.telegram.org/k/'><img src={img10} /></a>
             <a href='https://www.viber.com/ru/'><img src={img11}/></a>
          </div>
        </div>
    )
}

export default SocialIcons;