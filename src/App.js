import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import ContactUs from './components/ContactUs';
import Details from './components/Details';
import Gallery from './components/Gallery';
import NotFound from './components/NotFound';

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/contact">
          <ContactUs />
        </Route>
        <Route path="/gallery">
          <Gallery />
        </Route>
        <Route path="/detials/:id">
          <Details />
        </Route>
        <Route path="/*">
          <NotFound />
        </Route>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
