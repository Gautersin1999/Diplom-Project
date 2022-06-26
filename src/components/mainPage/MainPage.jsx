import Coaches from '../coaches/Coaches';
import Cost from '../cost/Cost';
import Explanation from '../explanation/Explanation';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import Offer from '../offer/Offer';
import Price from '../price/Price';
import Promo from '../promo/Promo';
import Questionnaire from '../questionnaire/questionnaire';
import SocialIcons from '../socialIcons/SocialIcons';
import TimeList from '../timeList/TimeList';
import './MainPage.css'
function MainPage(){
    return(
        <div>
      <Header />
      <Promo />
      <Explanation />
      <Offer />
      <Price />
      <Cost />
      <Questionnaire />
      <TimeList />
      <SocialIcons />
      <Footer />
        </div>
    )
}

export default MainPage;