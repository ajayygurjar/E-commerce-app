
import { Outlet } from 'react-router-dom'; 
import Header from './Header';
import Footer from './Footer';

function RootLayout() {
  return (
    <div style={{  display: 'flex', flexDirection: 'column', height:'100vh' }}>
      
      <Header />

      <main style={{ flex: 1 }}>
       {/* This is where child routes will be rendered */}
        <Outlet />
      </main>

      <footer style={{ marginTop: 'auto' }}>
      <Footer  />
      </footer>
    </div>
  );
}

export default RootLayout;
