import './YouGet.css'
import Header from '../header/Header';
import Questionnaire from '../questionnaire/questionnaire';
import SocialIcons from '../socialIcons/SocialIcons';
import Footer from '../footer/Footer';

function YouGet() {
    return (
        <div className='youGetFatherBlock'>
            <Header />
            <div className='youGetInformationBlock'>
                <div className='getBlockOne'>
                    <h1 className='getLogo'>Содержание<br /> курса</h1>
                    <div className='getBlockTwo'>
                        <p className='waitText'>Вас ждут вебинары и практика на основе реальных<br /> кейсов.</p>
                        <div className='getBlockThree'>
                            <div className='getBlockFour'>
                                <span className='modulLogo'>12</span>
                                <p className='modilText'>тематических<br /> модулей</p>
                            </div>
                            <div className='getBlockFour'>
                                <span className='modulLogo'>40</span>
                                <p className='modulText'>видеоматериалов</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='youGetListBlosk'>
                    <div className='listBlockClass'>
                        <p className='ListClass'>1. Основы инвестиционной грамотности</p>
                        <button className='listButton'>Изучть</button>
                    </div>

                    <div className='listBlockClass'>
                        <p className='ListClass'>2. Устройство биржевых рынков</p>
                        <button className='listButton'>Изучть</button>
                    </div>

                    <div className='listBlockClass'>
                        <p className='ListClass'>3.Торговые приложения</p>
                        <button className='listButton'>Изучть</button>
                    </div>

                    <div className='listBlockClass'>
                        <p className='ListClass'>4. Финансовые инструменты</p>
                        <button className='listButton'>Изучть</button>
                    </div>

                    <div className='listBlockClass'>
                        <p className='ListClass'>5. Стратегии работы с финансовыми инструментами </p>
                        <button className='listButton'>Изучть</button>
                    </div>

                    <div className='listBlockClass'>
                        <p className='ListClass'>6. Выбор облигаций </p>
                        <button className='listButton'>Изучть</button>
                    </div>

                    <div className='listBlockClass'>
                        <p className='ListClass'>7. Основы фундаментального анализа </p>
                        <button className='listButton'>Изучть</button>
                    </div>

                    <div className='listBlockClass'>
                        <p className='ListClass'>8. Выбор дивидендных акций </p>
                        <button className='listButton'>Изучть</button>
                    </div>

                    <div className='listBlockClass'>
                        <p className='ListClass'>9. Управление активами </p>
                        <button className='listButton'>Изучть</button>
                    </div>

                    <div className='listBlockClass'>
                        <p className='ListClass'>10. Основы технического анализа </p>
                        <button className='listButton'>Изучть</button>
                    </div>

                    <div className='listBlockClass'>
                        <p className='ListClass'>11. Инфополе инвестора </p>
                        <button className='listButton'>Изучть</button>
                    </div>

                    <div className='listBlockClass'>
                        <p className='ListClass'>12. Налоги и налоговые льготы </p>
                        <button className='listButton'>Изучть</button>
                    </div>

                    <div className='listBlockClass'>
                        <p className='ListClass'>13. Итоговая работа </p>
                        <button className='listButton'>Изучть</button>
                    </div>


                </div>
            </div>
           <Questionnaire />
            <SocialIcons />
            <Footer />
        </div>
    )
}

export default YouGet;