import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { ActivitiesProvider } from 'core/context'
import { MainLayout } from 'layout'
import { ActivitiesListPage } from 'modules/activities/pages'
import { HistoryListPage } from 'modules/history/pages'

const App = () => {
  return (
    <MainLayout>
      <ActivitiesProvider>
        <BrowserRouter>
          <Switch>
            <Route path="/history">
              <HistoryListPage />
            </Route>

            <Route path="/">
              <ActivitiesListPage />
            </Route>

            <Redirect to="/" />
          </Switch>
        </BrowserRouter>
      </ActivitiesProvider>
    </MainLayout>
  )
}

export default App
