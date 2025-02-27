
import { Outlet } from 'react-router-dom'; 
import Header from './Header';
import Footer from './Footer';

function RootLayout() {
  return (
    <div>
      
      <Header />

      <main>
       {/* This is where child routes will be rendered */}
        <Outlet />
      </main>

      
      <Footer />
    </div>
  );
}

export default RootLayout;
