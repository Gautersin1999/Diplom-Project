import './Footer.css'
import img12 from './../../Img/img12.png'

function Footer() {
    return (
        <div className='FatherBlockNine'>
            <div className='FooterBlockClass'>
                <img src={img12} />

                <div>
                    <span className='FooterText'>elitefund.01@gmail.com <br />+375 (29) 856-98-08</span>
                </div>
                <div className='EducationBlockClass'>
                    <span className='FooterText'>Онлайн обучение по инвестициям в РБ.<br /> Полезная информация. Индивидуальный<br /> подход. Полный анализ рынка. </span>
                </div>
                <div>
                    <span className='FooterText'>Минск<br /> Притыцкого 29<br /> 5 этаж, oфис534</span>
                </div>

            </div>
        </div>
    )
}

export default Footer