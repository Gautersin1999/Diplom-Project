import { NavLink } from 'react-router-dom';
import img1 from './../../Img/img1.png'
import './Header.css'
function Header() {
    const youGetLink = {
        textDecoration: "none",
        color:'black'
     }
     const coaches = {
        textDecoration:"none",
        color:'black'
     }
    return (
        <div className='FatherBlockClassOne'>
            <div className='headerClass'>
               <NavLink className='LinkClass' to='/'> <img className='img1Class' src={img1} /></NavLink> 
                <div className='HeaderTextClass'>
                  <NavLink className='HeaderLinkOne' to='/pagetwo'> <p className='HeaderText1Class'>Что это ?</p></NavLink> 
                   <NavLink style={youGetLink} to='/pagethree'> <p className='HeaderText1Class'>Вы получаете</p></NavLink>
                    <NavLink style={coaches} to='/coaches'><p className='HeaderTextClass'>Наставники</p></NavLink>
                </div>
                <div className='HeaderPhoneEmailClass'>
                    <p className='HeaderText1Class'>+375 (29) 856-98-08</p>
                    <p className='HeaderText1Class'>elitefund.01@gmail.com </p>
                </div>
            </div>

        </div>
    )
}

export default Header;