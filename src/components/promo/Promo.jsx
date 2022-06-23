import './Promo.css'
import img2 from './../../Img/img2.png'

function Promo(){
    return(
        <div className='FatherBlockClass'>
            <div className='promoBlockOneClass'>
               <h2 className='promotextone'>Онлайн обучение по<br /> инвестированию</h2>
               <span className='promotexttwo'>Самое лучшее время инвестировать-вчера.<br /> Можно начать и сегодня. Чем раньше вы<br /> начнёте инвестировать , тем лучше.</span>
               <span className='promotexttwo'>Уорен Баффет</span>
               <button className='promoButtonClass'>Отправить заявку</button>
            </div>
            
            <img className='img2Class' src={img2} />
            
        </div>
    )
}


export default Promo;