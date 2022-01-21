import * as React from 'react';
import carrot from './carrot.png';
import picture from './picture.png';
import './App.css';
import Container from '@mui/material/Container';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
};

export default function App() {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="App">
      <Container maxWidth="sm">
        <h1>이미지는 깊은 사실성의 반영이다. 이미지는 깊은 사실성을 감추고 변질시킨다. 이미지는 깊은 사실성의 부재를 감춘다.</h1>
        <Button onClick={handleOpen} style={{ display:'block', margin:'auto' }}>
          <img src={carrot} className="Shape-image" alt="Shape" />
          </Button>
        <h1>이미지는 그것이 무엇인건간에 어떠한 사실성과도 무관하다. 이미지는 자기자신의 순수한 시뮬라크르(Simulacrum)이다.</h1>

        <Modal
          open={open}
          onClose={handleClose}

        >
          <Box sx={style}>
            <img src={picture} className="Modal-image" alt="Modal" />
          </Box>
        </Modal>
      </Container>
    </div>
  );
}



// <header className="App-header">
// <img src={logo} className="App-logo" alt="logo" />
// <p>
//   Edit <code>src/App.js</code> and save to reload.
// </p>
// <a
//   className="App-link"
//   href="https://reactjs.org"
//   target="_blank"
//   rel="noopener noreferrer"
// >
//   Learn React
// </a>
// </header>
