import "./App.css";
import HomePageContainer from "./HomePageContainer";
import BuyNow from "./components/buyNow/buyNow.component";
import ViewPage from "./components/viewPage/viewPage.component";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <HomePageContainer />
        </Route>
        <Route path="/buy">
          <BuyNow />
        </Route>
        <Route path="/view">
          <ViewPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
