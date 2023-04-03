import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Home } from '/src/pages/Home';
import { CerasusMonteblanco } from '../pages/CerasusMonteblanco';
import { CerasusDanubio } from '../pages/CerasusDanubio';
import { CerasusUsme } from '../pages/CerasusUsme';
import { CerasusSextaEntrada } from '../pages/CerasusSextaEntrada';
import { AviumTunja } from '../pages/AviumTunja';
import { PrunusSextaEntrada } from '../pages/PrunusSextaEntrada';


export function RoutesApp() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/cerasus-monteblanco" element={<CerasusMonteblanco />} />
        <Route path="/cerasus-danubio" element={<CerasusDanubio />} />
        <Route path="/cerasus-usme" element={<CerasusUsme />} />
        <Route path="/cerasus-sexta-entrada" element={<CerasusSextaEntrada />} />
        <Route path="/avium-tunja" element={<AviumTunja />} />
        <Route path="/prunus-sexta-entrada" element={<PrunusSextaEntrada />} />
        <Route path="*" element={<h1>404: Not Found</h1>} />
      </Routes>
    </Router>
  );
}