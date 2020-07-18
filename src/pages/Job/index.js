import React from 'react'
import { useParams } from 'react-router-dom'
import { find } from 'lodash'
import styled from '@emotion/styled'
import { FormattedMessage, useIntl } from 'react-intl'
import { css } from '@emotion/core'

import ROUTES from '../../common/routes'
import PageHeader from '../../components/PageHeader'
import { Paragraph2 } from '../../components/Paragraphs'
import layout from '../../common/configs/layout'
import Metas from '../../components/Metas'
import jobs from '../../pages/Jobs/jobs'
import ButtonContact from '../../components/Buttons/ButtonContact'
import mq from '../../common/styles/breakpoints'
import GridContainer from '../../components/GridContainer'

const ContactContainer = styled.div(({ theme }) => css`
  grid-column: 9 / -2;
  padding-bottom: ${theme.spacingL}px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  ${mq('small')}{
    order: 4;/* because left col will be after right col in mobile */
    grid-column: 2 / -2;
  }
`)

const TitleContact = styled(Paragraph2)(({ theme }) => css`
  padding-bottom: ${theme.spacingS}px;
  ${mq('small')}{
    text-align: center;
  }
`)

// Common template for a single job page
const Job = () => {
  const { jobSlug, lang } = useParams()
  const job = find(jobs, j => j.slug === jobSlug)
  const { messages } = useIntl()
  return (
    <GridContainer>
      <Metas
        wording='job'
        values={{
          LABEL: job.label[lang]
        }}
      />
      <PageHeader
        isDarkTheme={layout.JOB.isHeaderDark}
        backTo={`/${lang}/${ROUTES.JOBS.SLUG_INDEX}`}
        backToLabel={messages['back-to-jobs']}
        titleMain={job.label[lang]}
      />
      <job.component />
      <ContactContainer>
        <TitleContact>
          <FormattedMessage id='job-contact' />
        </TitleContact>
        <ButtonContact />
      </ContactContainer>
    </GridContainer>
  )
}

export default Job
