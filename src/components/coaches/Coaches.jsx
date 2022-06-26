import Cost from '../cost/Cost';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import Price from '../price/Price';
import Questionnaire from '../questionnaire/questionnaire';
import SocialIcons from '../socialIcons/SocialIcons';
import TimeList from '../timeList/TimeList';
import './Coaches.css'

function Coaches() {
    return (
        <div className='coachesFatherBlockClass'>
            <Header />
            <Price />
            <Cost />
            <Questionnaire />
            <TimeList />
            <SocialIcons />
            <Footer />
        </div>
    )
}

export default Coaches;