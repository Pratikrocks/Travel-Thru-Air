import './App.css';
import {BrowserRouter as Router , Route, Switch} from "react-router-dom"
import Home from './components/Home';
import HeaderComponets from './components/HeaderComponent';
import FooterComponents from './components/FooterComponents';
import AdminPage from './components/AdminPage';
import AddFlights from './components/AddFlights';
import AddOffers from './components/AddOffers';
import ViewOffer from './components/ViewOffer';
import { withRouter } from 'react-router';
import SearchD from './components/SearchD';
import SearchN from './components/SearchN';

function App() {
  return (
    <div>
      <Router>
          <div>
            <HeaderComponets/>
              <div className="container">
                <Switch>
                  <Route path="/" exact component={Home}></Route>
                  <Route path="/admin" exact component={AdminPage}></Route>
                  <Route path="/admin/addFlights" exact component={AddFlights}></Route>
                  <Route path="/admin/addOffer" exact component={AddOffers}></Route>
                  <Route 
                    path="/admin/viewOffer" 
                    exact 
                    component={ViewOffer}
                  />
                  <Route 
                    path="/viewOffer" 
                    exact 
                    component={ViewOffer}
                  />
                  <Route 
                    path="/searchD" 
                    exact 
                    component={SearchD}
                  />
                  <Route 
                    path="/searchN" 
                    exact 
                    component={SearchN}
                  />
                  <Route 
                    path="/admin/searchD" 
                    exact 
                    component={SearchD}
                  />
                  <Route 
                    path="/admin/searchN" 
                    exact 
                    component={SearchN}
                  />
                </Switch>
              </div>
              <Route path="/" exact component={FooterComponents}/>
              {/* <FooterComponents/> */}
          </div>
      </Router>
    </div>
  );
}

export default App;
