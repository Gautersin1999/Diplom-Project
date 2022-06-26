import Explanation from '../explanation/Explanation';
import './WhatThatsPageOne.css'
import img13 from './../../Img/img13.png'
import img14 from './../../Img/img14.png'
import img15 from './../../Img/img15.png'
import img16 from './../../Img/img16.png'
import SocialIcons from '../socialIcons/SocialIcons';
import Footer from '../footer/Footer';
import Questionnaire from '../questionnaire/questionnaire';
import TimeList from '../timeList/TimeList';


function WhatsThatPageOne(){
  return (
    <div className='FatherBloskTen'>
      <Explanation />
      <div className='whatThatExplanationClass'>
        <div className='whatThatBlockOne'>
          <h3 className='whatThatTitle'>1</h3>
          <h3 className='whatThatTextOne'> Смотрите материалы<br /> в удобное время </h3>
          <p className='whatThatTexttwo'>Изучаете теорию<br /> и практикуетесь на задачах,<br /> приближённых к реальным.</p>
          <img className='whatThatImgClass' src={img13} />
        </div>

        <div className='whatThatBlockOne'>
          <h3 className='whatThatTitle'>2</h3>
          <h3 className='whatThatTextOne'> Выполняете <br />практические работы </h3>
          <p className='whatThatTexttwo'>Решаете задачи после<br /> каждого модуля<br /> и закрепляете знания.</p>
          <img className='whatThatImgClass' src={img14} />
        </div>

        <div className='whatThatBlockOne'>
          <h1 className='whatThatTitle'>3</h1>
          <h3 className='whatThatTextOne'> Работаете <br />с проверяющим<br /> экспертом </h3>
          <p className='whatThatTexttwo'>Получаете обратную связь<br /> по каждой работе<br /> в течение 1–3 рабочих<br/> дней.</p>
          <img className='whatThatImgClass' src={img15} />
        </div>

        <div className='whatThatBlockOne'>
          <h1 className='whatThatTitle'>4</h1>
          <h3 className='whatThatTextOne'>Разрабатываете<br /> итоговый проект</h3>
          <p className='whatThatTexttwo'>Оформляете портфель<br /> ценных бумаг и начинаете<br /> инвестировать.</p>
          <img className='whatThatImgClass' src={img16} />
        </div>
      </div>
      <div>
        
      </div>
       <TimeList />
       <Questionnaire />
       <SocialIcons />
       <Footer />

    </div>
  )
}

export default WhatsThatPageOne;