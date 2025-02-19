
import { Outlet } from 'react-router-dom'; // Import the Outlet for rendering nested routes
import Header from './Header';
import Footer from './Footer';

function RootLayout() {
  return (
    <div>
      
      <Header />

      <main>
        {/* Outlet renders the nested components like ProductPage, Home, About */}
        <Outlet />
      </main>

      
      <Footer />
    </div>
  );
}

export default RootLayout;
