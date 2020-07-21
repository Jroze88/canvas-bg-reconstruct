import React from 'react'
// import { FormattedMessage } from 'react-intl'

import JobsList from '../../components/OpenPositions/JobsList'
import { TitleLeft, ListContainerRight } from '../../components/ListTable'
import jobs from '../../pages/Jobs/jobs'

const OpenPositions = ({ maxItems, withSummary }) => {
  if (!jobs.length) return null
  return (
    <>
      <TitleLeft>
        {/* <FormattedMessage id='last-jobs-title' /> */}
      </TitleLeft>
      <ListContainerRight>
        <JobsList maxItems={maxItems} withSummary={withSummary} jobs={jobs} />
      </ListContainerRight>
    </>
  )
}

export default OpenPositions
