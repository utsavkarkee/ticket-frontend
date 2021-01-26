import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import AppHeader from './AppHeader'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <AppHeader />
        <Switch>
          <Route exact path="/" component={HomePage} allowed={[]} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
