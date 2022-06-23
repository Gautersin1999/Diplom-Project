import './questionnaire.css'
import img7 from './../../Img/img7.png'


function Questionnaire() {
    return (
        <div className='FatherBlockSeven'>
            <h1 className='QuestionnaireLogoClass'>Записаться на бесплатную консультацию<br /> по обучению</h1>
            <div className='QuestionnaireLogoBlock'>
                <div>
                    <div className='QuestionnaireInputClass'>
                        <input className='QuestionnaireLiBlock' type="text" placeholder='Имя' />
                        <input className='QuestionnaireLiBlock' type="text" placeholder='Город' />
                        <input className='QuestionnaireLiBlock' type="tel" placeholder='Номер телефона' />
                        <input className='QuestionnaireLiBlock' type="email" placeholder='Email' />
                        <button className='QuestionnaireButton'>Отправить заявку</button>
                    </div>
                   <span className='QuestionnaireRools'>Нажимая кнопку “Отправить заявку” Вы соглашаетесь<br /> с обработкой персональных данных</span>
                </div>
                <img className='img7Class' src={img7} />
            </div>
        </div>
    )
}

export default Questionnaire;