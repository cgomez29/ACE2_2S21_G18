
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './page/dashboard/Dashboard'
import Control  from './page/control/Control'
import Configure from './page/configure/Configure'
import Report from './page/report/Report'
import Navbar from './components/Navbar/Navbar';

import 'bootswatch/dist/sandstone/bootstrap.min.css'

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/configure" component={Configure} />
        <Route exact path="/control" component={Control} />
        <Route exact path="/report" component={Report} />
      </Switch>
    </Router>
  );
}

export default App;
