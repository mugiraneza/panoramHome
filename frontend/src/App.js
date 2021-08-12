import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import MainNavRouter from "./pages/mainNavRouter/MainNavRouter"

export default function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/login">
                        Login
                    </Route>
                    <Route path="/">
                        <MainNavRouter />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}
