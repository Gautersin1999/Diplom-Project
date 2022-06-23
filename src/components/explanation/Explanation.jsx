import './Explanation.css'
import img3 from './../../Img/img3.png'

function Explanation(){
    return(
        <div className='FaterBlockClass'>
              <h1 className='explainLogoClass'>Что это такое?</h1>
              <div className='childBlockClass'>
                 <img className='img3Class' src={img3} />
                <div className='childTwoBlockClass'>
                    <span className='explainTextClass'>ИНВЕСТИРОВАНИЕ- представляет собой процесс<br /> вложения капитала в ценные бумаги и иные<br /> финансовые инструменты с целью получения дохода. </span>
                    <span className='explainTextClass1'>Основными задачами инвестирования являются<br /> сбережение денежных средств для осуществления<br /> каких-либо серьезных денежных манипуляций в<br /> будущем, приумножение получаемого дохода и<br /> накопление финансовых средств.</span>
                    <span className='explainTextClass2'>На нашем курсе Вы познакомитесь с инвестированием в ценные бумаги.</span>
                </div>
              </div>
        </div>
    )
}

export default Explanation;