import './Cost.css'
import img6 from './../../Img/img6.png'

function Cost() {
    return (
        <div className='FatherBlockClass1'>
            <h1 className='CostLogoClass'>Стоимость обучения<span className='startPriceClass'> от 99</span><span className='USDClass'> USD</span></h1>
            <div className='CostProgramClass'>
                <img className='img6Class' src={img6} />
                <div className='CostListBlockClass'>
                    <li className='CostListClass'><span className='CostListTextClass'>Программа обучения 2 недели</span></li>
                    <li className='CostListClass'><span className='CostListTextClass'>онлайн формат</span></li>
                    <li className='CostListClass1'><span className='CostListTextClass'>индивидуальный подход к<br /> каждому клиенту</span></li>
                </div>
            </div>
        </div>
    )
}

export default Cost;