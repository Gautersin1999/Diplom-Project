import './Offer.css'
import img4 from './../../Img/img4.png'

function Offer() {
    return (
        <div className='fatherBlock'>
            <h1 className='offerLogoClass'>Вы получаете </h1>

            <div className='OfferBlockOne'>
                <div>
                    <div className='OfferExpplainBlock'>
                        <h2 className='OfferExpplainLogoBlock'>Что мы делаем</h2>
                        <li className='OfferLiClass'><span className='OfferliTextClass'>общие термины и понятия,виды инвестиций</span></li>
                        <li className='OfferLiClass'><span className='OfferliTextClass'>фондовый рынок,ценные бумаги,стратегии торговли,понятия о биржах и их видах</span></li>
                        <li className='OfferLiClass'><span className='OfferliTextClass'>аналитика рынка</span></li>
                        <li className='OfferLiClass'><span className='OfferliTextClass'>выбор брокера</span></li>
                        <li className='OfferLiClass'><span className='OfferliTextClass'>пасссивный и активный доход</span></li>
                        <li className='OfferLiClass'><span className='OfferliTextClass'>инвестиционный менеджмент</span></li>
                        <li className='OfferLiClass'><span className='OfferliTextClass'>психология принятия инвестиционных решений</span></li>
                    </div>
                    <div className='resultClassBlock'>
                        <span className='resultClass'>Пройдя наш курс обучения и ознакомившись с базовыми понятиями, определениями и терминами, вы<br /> сможете самостоятельно торговать на фондовом рынке. А также приумножать свои знания, навыки и опыт.<br />Практические занятия в ходе обучения помогут Вам инвестировать грамотно и рационально распределять<br /> Ваши финансы. Мы сопровождаем индивидуально каждого ученика на протяжении всего курса обучения.<br />А наши практикующие инвесторы готовы Вам оказать помощь в формировании наиболее перспективного<br /> портфеля акций. </span>
                    </div>

                </div>
                <img className='img4Class' src={img4} />
            </div>
        </div>
    )
}

export default Offer;