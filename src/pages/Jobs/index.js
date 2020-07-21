import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
// import { FormattedMessage, useIntl } from 'react-intl'

import Metas from '../../components/Metas'
import PageHeader from '../../components/PageHeader'
import OpenPositions from '../../components/OpenPositions'
import OpenApplications from '../../components/OpenApplications'
import layout from '../../common/configs/layout'
import { RightColWithGutter } from '../../components/Layout/3Cols'
import imgTeam from '././assets/team-by-drone.jpg'
import ImageRatio from '../../components/ImageRatio'
import GridContainer from '../../components/GridContainer'

const ImgContainer = styled(RightColWithGutter)(({ theme }) => css`
  margin-bottom: ${theme.spacingL}px;
`)

const Jobs = () => {
  // const { formatMessage } = useIntl()
  return (
    <GridContainer>
      <Metas wording='jobs' />
      <PageHeader
        isDarkTheme={layout.JOBS.isHeaderDark}
        // titleMain={<FormattedMessage id='jobs-main-title' />}
        // chapo={<FormattedMessage id='jobs-chapo' />}
        noBorder
      />
      <ImgContainer>
        <ImageRatio
          width={1250}
          height={616}
          src={imgTeam}
          // alt={formatMessage({ id: 'img-team-alt' })}
        />
      </ImgContainer>
      <OpenPositions withSummary />
      <OpenApplications />
    </GridContainer>
  )
}

export default Jobs
