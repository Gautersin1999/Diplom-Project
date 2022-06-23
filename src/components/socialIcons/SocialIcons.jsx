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
             <img className='ContactsImgClass' src={img8} />
             <img src={img9}/>
             <img src={img10} />
             <img src={img11}/>
          </div>
        </div>
    )
}

export default SocialIcons;