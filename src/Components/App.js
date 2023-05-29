import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import About from './About';
import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <About />
        </Route>
        <Route path="/experience">
          <Experience />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
