import * as React from 'react';
import './questionnaire.css'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import img7 from './../../Img/img7.png'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };


function Questionnaire() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
    return (
        <div className='FatherBlockSeven'>
            <h1 className='QuestionnaireLogoClass'>Записаться на бесплатную консультацию<br /> по обучению</h1>
            <div id='bot' className='QuestionnaireLogoBlock'>
                <div>
                    <div className='QuestionnaireInputClass'>
                        <input className='QuestionnaireLiBlock' type="text" placeholder='Имя' />
                        <input className='QuestionnaireLiBlock' type="text" placeholder='Город' />
                        <input className='QuestionnaireLiBlock' type="tel" placeholder='Номер телефона' />
                        <input className='QuestionnaireLiBlock' type="email" placeholder='Email' />
                        <button onClick={handleOpen} className='QuestionnaireButton'>Отправить заявку</button>
                    </div>
                   <span className='QuestionnaireRools'>Нажимая кнопку “Отправить заявку” Вы соглашаетесь<br /> с обработкой персональных данных</span>
                </div>
                <img className='img7Class' src={img7} />
            </div>
            <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Спасибо за заявку!)
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            В ближайшее время наш специлист свяжется с вами
          </Typography>
        </Box>
      </Modal>
        </div>
    )
}

export default Questionnaire;