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
import { Historial } from './components/History/History';
import { TableHistory } from './components/Table/TableHistory';
import { HorarioUso } from './components/Graph/HorarioUso/HorarioUso';
import { MiPeso } from './components/MiPeso/MiPeso';

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
                    <Route exact path="/historial" component={Historial} />
                    <Route exact path="/horario" component={HorarioUso} />
                    <Route exact path="/mipeso" component={MiPeso} />
                    <Route
                        exact
                        path="/historial/:dateHistory"
                        component={TableHistory}
                    />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
