import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './component/views/Home';
//import Navigation from './component/views/Navigation';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      </header> 
      <main>
      <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
        
      </main>
    </div>
  );
}

export default App;
