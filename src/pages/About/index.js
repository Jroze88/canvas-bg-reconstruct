import React, { useState } from 'react'
// import { FormattedMessage } from 'react-intl'
import mq from '../../common/styles/breakpoints'

import layout from '../../common/configs/layout'
import Metas from '../../components/Metas'
import PageHeader from '../../components/PageHeader'
import Publications from '../../components/Publications'
import Exhibitions from '../../components/Exhibitions'
import Awards from '../../components/Awards'
import Talks from '../../components/Talks'
import { TitleContact } from '../../components/Titles'
import ContactContainer from '../../components/ContactContainer'
import Portraits from './Portraits'
import OfficeAmbiance from './OfficeAmbiance'
import ButtonLabel from '../../components/Buttons/ButtonLabel'
import ROUTES from '../../common/routes'
import jobs from '../../pages/Jobs/jobs'
import styled from '@emotion/styled'
import GridContainer from '../../components/GridContainer'
import { LeftColWithGutter, RightColWithGutter } from '../../components/Layout/3Cols'

import Chart from './Chart'
import { css } from '@emotion/core'
import { PSmall } from '../../components/Paragraphs'

const Anchor = styled.div`
  grid-column: 1 / -1;
`

const LeftCol = styled(LeftColWithGutter)`
  max-width: 100%; /* fix firefox overflow bug */
  ${mq('small')} {
    display: none;
  }
`

const StickyZone = styled.div(({ theme }) => css`
  position: sticky;
  top: 0;
  bottom: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end; /* center works only with one element, this is a trick to center 2 elements */
  padding-bottom: ${theme.spacingL * 2}px;
`)

const VizLegend = styled(PSmall)(({ theme }) => css`
  color: ${theme.secondary}; /* no opacity here because it makes the scroll laggy */
`)

const VizAndPortraits = () => {
  const [hoveredDataWorker, setHoveredDataWorker] = useState(null)
  return (
    <>
      <LeftCol>
        <StickyZone>
          {
            navigator.userAgent !== 'ReactSnap' && (
              <Chart dataWorker={hoveredDataWorker} />
            )
          }
          <VizLegend>
            {/* <FormattedMessage id='about-legend-viz' /> */}
          </VizLegend>
        </StickyZone>
      </LeftCol>
      <RightColWithGutter>
        <Portraits onHover={setHoveredDataWorker} hovered={hoveredDataWorker} />
      </RightColWithGutter>
    </>
  )
}

const About = () => {
  const isJobs = jobs.length > 0
  return (
    <GridContainer>
      <Metas wording='about' />
      <PageHeader
        isDarkTheme={layout.ABOUT.isHeaderDark}
        // titleMain={<FormattedMessage id='about-main-title' />}
        // chapo={<FormattedMessage id='about-chapo' />}
        noBorder
      />
      <VizAndPortraits />
      <Awards isDarkTheme={layout.ABOUT.isBodyDark} />
      <OfficeAmbiance />
      {
        isJobs && (
          <>
            <TitleContact>
              {/* <FormattedMessage id='about-contact-title' /> */}
            </TitleContact>
            <ContactContainer>
              <ButtonLabel large to={ROUTES.JOBS.SLUG_INDEX}>
                {/* <FormattedMessage id='about-contact-button' /> */}
              </ButtonLabel>
            </ContactContainer>
          </>
        )
      }

      {/* Empty node to have an anchor */}
      <Anchor id='activities' />
      <Publications maxItems={8} isDarkTheme={layout.ABOUT.isBodyDark} />
      <Talks isDarkTheme={layout.ABOUT.isBodyDark} />
      <Exhibitions isDarkTheme={layout.ABOUT.isBodyDark} />
    </GridContainer>
  )
}

export default About
