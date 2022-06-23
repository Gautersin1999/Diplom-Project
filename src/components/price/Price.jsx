import './Price.css'
import img5 from './../../Img/img5.png'


function Price() {
    return (
        <div className='FatherBlockClass'>
            <div className='priceBlockClass'>
                <img className='img5Class' src={img5} />
                <div className='priceCouchClass'>
                    <h1 className='priceCouchLogoClass'>Наши наставники</h1>
                    <span className='priceLogoText'>Наставники курса – практикующие специалисты,<br /> проходившие обучение у белорусских, а также<br /> зарубежных трейдеров и инвесторов. Свои первые<br /> серьёзные достижения, доход и опыт получили<br /> именно в сфере инвестирования в ценные бумаги.</span>
                    <span className='priceLogoTextOne'>Именно эти люди будут помогать Вам на каждом<br /> этапе от теории до практических заданий</span>
                </div>
            </div>
        </div>
    )
}

export default Price;