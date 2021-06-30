import { BrowserRouter } from 'react-router-dom'
import MainLayout from './layout/MainLayout.js'

import Home from './views/Home/Home'

import 'antd/dist/antd.css'

function App() {
  return (
    <BrowserRouter>
      <MainLayout />
    </BrowserRouter>
  );
}

export default App;
