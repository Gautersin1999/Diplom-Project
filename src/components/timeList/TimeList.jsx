import './TimeList.css'

function TimeList(){
    return(
        <div className='marginBlock'>
                <h1 className='coachesLogoClass'>Цены:</h1>
                <div className='priceTimeListBlock'>
                    <div className='priceTimeListBlockOne'>
                        <h3 className='priceTimelogo'>Полный курс:</h3>
                        <p className='priceTimeText'>1) Вт/Чт 19.00-21.00</p>
                        <p className='priceTimeText'>2) Пн/Ср 19.00-21.00</p>
                        <p className='priceTimeText'>3) Суббота 12.00-16.00</p>
                        <h3 className='priceTimeNumbers'>99 USD</h3>
                        <div className='priceButtonBlock'>
                            <button className='priceButtonOne'>Хочу учиться!</button>
                            <button className='priceButtonTwo'>Оплатить курс</button>
                        </div>
                    </div>

                    <div className='priceTimeListBlockTwo'>
                        <h3 className='priceTimelogo'>Пробное занятие</h3>
                        <p className='priceTimeText'>Четверг</p>
                        <p className='priceTimeText'>23 июня в 19.00.</p>
                        <h3 className='priceTimeNumbers'>20 BYN</h3>
                        <div className='priceButtonBlock'>
                            <button className='priceButtonOneTwo'>Записаться</button>
                            <button className='priceButtonTwoTwo'>Оплатить курс</button>
                        </div>
                    </div>

                    <div className='priceTimeListBlockThree'>
                        <p className='priceTimeTextThree'>Приведи друга и<br /> получи скидку себе и<br /> другу</p>
                        <h3 className='priceTimeNumbersThree'>10%</h3>
                        <button className='priceButtonThree'>Оставить заявку</button>
                    </div>
                </div>
            </div>
    )
}

export default TimeList;