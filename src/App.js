import Header from './components/Header';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'normalize.css';

function App() {
  return (
    <div className='container-fluid'>
      <Header />
      <Home />
      {/* <Resume />
      <Projects />
      <Contact /> */}
    </div>
  );
}

export default App;
