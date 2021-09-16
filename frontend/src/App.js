import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import MainNavRouter from "./pages/mainNavRouter/MainNavRouter"
import SecondaryNavRouter from "./pages/SecondaryNavRouter/SecondaryNavRouter";
import "./search.css"
import "./App.css"
import "./styles.css"
import "./maps.css"
import "./menu.css"
import "./slick.css"
import "./leaflet.css"

export default function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/login">
                        Login
                    </Route>
                    <Route path="/single-property/:id"  render={props => <SecondaryNavRouter {...props} />} />
                    <Route path="/"   render={props => <MainNavRouter {...props} />} />
                </Switch>
            </div>
        </Router>
    );
}
