import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AdminPage from './pages/AdminPage'
import DetailsPage from './pages/DetailsPage'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <main>
          <Switch>
            <Route
              exact
              path="/"
              render={(routerProps) => <HomePage {...routerProps} />}
            />
            <Route
              exact
              path="/admin"
              render={(routerProps) => <AdminPage {...routerProps} />}
            />
            <Route
              exact
              path="/details/:id"
              render={(routerProps) => <DetailsPage {...routerProps} />}
            />
          </Switch>
        </main>
      </div>
    </Router>
  )
}

export default App
