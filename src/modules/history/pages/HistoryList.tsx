import React from 'react'
import { MainContainer } from 'modules/activities/lib'
import { HistoryList } from '../containers'

export const HistoryListPage = () => {
  return (
    <MainContainer>
      {/* ***** list of completed activities ***** */}
      <HistoryList />
    </MainContainer>
  )
}
