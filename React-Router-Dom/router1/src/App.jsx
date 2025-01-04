import { Outlet } from 'react-router';
import Header from './pages/Header';
import Footer from './pages/Footer';

function App() {
  return (
    <>
      <Header /> {/* This always renders */}
      <Outlet /> {/* This renders the current route */}
      <Footer /> {/* This always renders */}  
    </>
  );
}

export default App;
