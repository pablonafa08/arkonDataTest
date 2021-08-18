import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { MainLayout } from 'layout'
import { ActivitiesListPage } from 'modules/activities/pages'
import { HistoryListPage, GraphicPage } from 'modules/history/pages'

const App = () => {
  return (
    <MainLayout>
      <BrowserRouter>
        <Switch>
          <Route path="/history">
            <HistoryListPage />
          </Route>

          <Route path="/graphic">
            <GraphicPage />
          </Route>

          <Route path="/">
            <ActivitiesListPage />
          </Route>

          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </MainLayout>
  )
}

export default App
