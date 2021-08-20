import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { MainLayout } from 'layout'
import { ActivitiesListPage } from 'modules/activities/pages'
import { HistoryListPage, GraphicPage } from 'modules/history/pages'

const App = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Switch>
          {/* path for the list of completed activities */}
          <Route path="/history">
            <HistoryListPage />
          </Route>

          {/* path to see the graph of the list of completed activities */}
          <Route path="/graphic">
            <GraphicPage />
          </Route>

          {/* path for the list of pending activities */}
          <Route path="/">
            <ActivitiesListPage />
          </Route>

          <Redirect to="/" />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  )
}

export default App
