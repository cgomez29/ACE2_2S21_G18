import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Dashboard } from './components/dashboad/Dashboard';
import { Navbar } from './components/nav/Navbar';

export const WeatherApp = () => {
    return (
        <BrowserRouter>
            <div className="main-content">
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Dashboard} />
                    <Redirect to="/" />
                </Switch>
            </div>
        </BrowserRouter>
    );
};
