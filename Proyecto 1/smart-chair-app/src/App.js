import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './page/dashboard/Dashboard';
import Control from './page/control/Control';
import Configure from './page/configure/Configure';
import Report from './page/report/Report';

/*import 'bootswatch/dist/sandstone/bootstrap.min.css'*/
import Sidebar from './components/Sidebar/Sidebar';

import './App.css';
import { MayorUso } from './components/Graph/MayorUso/MayorUso';
import { MenorUso } from './components/Graph/MenorUso/MenorUso';

function App() {
    return (
        <Router>
            <Sidebar />
            <div className="main-content">
                <Switch>
                    <Route exact path="/" component={Dashboard} />
                    <Route exact path="/configure" component={Configure} />
                    <Route exact path="/control" component={Control} />
                    <Route exact path="/report" component={Report} />
                    <Route exact path="/mayoruso" component={MayorUso} />
                    <Route exact path="/menoruso" component={MenorUso} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
