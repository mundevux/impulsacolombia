import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop'; 
import { Home } from '/src/pages/Home';
import { CerasusMonteblanco } from '../pages/CerasusMonteblanco';
import { CerasusDanubio } from '../pages/CerasusDanubio';
import { CerasusUsme } from '../pages/CerasusUsme';
import { CerasusSextaEntrada } from '../pages/CerasusSextaEntrada';
import { AviumTunja } from '../pages/AviumTunja';
import { PrunusSextaEntrada } from '../pages/PrunusSextaEntrada';
import { BlogMiCasaYa } from '../pages/BlogMiCasaYa';
import { BlogComprarViviendaNueva } from '../pages/BlogComprarViviendaNueva';


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
        <Route path="/blog-mi-casa-ya" element={<BlogMiCasaYa />} />
        <Route exact path="/blog-comprar-vivienda-nueva" element={<BlogComprarViviendaNueva />} />

        <Route path="*" element={<h1>404: Not Found</h1>} />
      </Routes>
    </Router>
  );
}