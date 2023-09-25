import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop'; 
import { Home } from '/src/pages/Home';
import { CerasusMonteblanco } from '/src/pages/CerasusMonteblanco';
import { CerasusDanubio } from '/src/pages/CerasusDanubio';
import { CerasusUsme } from '/src/pages/CerasusUsme';
import { CerasusSextaEntrada } from '/src/pages/CerasusSextaEntrada';
import { AviumTunja } from '/src/pages/AviumTunja';
import { PrunusSextaEntrada } from '/src/pages/PrunusSextaEntrada';
import { Blog } from '/src/pages/Blog';
import { BlogMiCasaYa } from '/src/pages/BlogMiCasaYa';
import { BlogComprarViviendaNueva } from '/src/pages/BlogComprarViviendaNueva';
import { AboutUs } from '/src/pages/AboutUs';
import { NotFound } from '/src/pages/NotFound';



export function RoutesApp() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/cerasus-monteblanco" element={<CerasusMonteblanco />} />
        <Route path="/cerasus-danubio" element={<CerasusDanubio />} />
        <Route path="/cerasus-usme" element={<CerasusUsme />} />
        <Route path="/cerasus-sexta-entrada" element={<CerasusSextaEntrada />} />
        <Route path="/avium-tunja" element={<AviumTunja />} />
        <Route path="/prunus-sexta-entrada" element={<PrunusSextaEntrada />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:subsidio-mi-casa-ya" element={<BlogMiCasaYa />} />
        <Route  path="/blog/:consejos-para-comprar-vivienda" element={<BlogComprarViviendaNueva />} />
        <Route path="/aboutus" element={<AboutUs />} />
        
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}