import React from 'react'
import { useParams } from 'react-router-dom'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { map } from 'lodash'
import { FormattedMessage } from 'react-intl'

import Link, { LinkMore } from '../../components/Links'
import { Paragraph1 } from '../../components/Paragraphs'
import { Text } from '../../components/ListTable'
import mq from '../../common/styles/breakpoints'
import ROUTES from '../../common/routes'
import ArrowRight from '../../assets/icons/ArrowRight'

const Row = styled.div(
  ({ theme }) => css`
    padding-top: ${theme.spacingS}px;
    display: grid;
    grid-template-columns: 4fr 3fr 2fr 2fr;
    grid-column-gap: 2px;
    border-top: 1px solid ${theme.separator};
    ${mq('small')} {
      padding-top: ${theme.spacingS}px;
      display: flex;
      flex-direction: column;
      margin-bottom: ${theme.spacingS}px;
    }
  `
)

const LinkArrow = styled(Link)(({ theme }) => css`
  svg {
    display: none;
  }
  ${mq('small')} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: ${theme.spacingS}px;
    svg {
      display: block;
    }
  }
`)

const Cell = styled.div(({ theme }) => css`
  margin-bottom: ${theme.spacingS}px;
  ${mq('small')} {
    margin-bottom: 0;
  }
`)

const Cell1 = styled(Cell)(({ theme }) => css`
  ${mq('small')} {
    order: 1;
    margin-bottom: ${theme.spacingS}px;
  }
`)

const Cell2 = styled(Cell)`
  ${mq('small')} {
    order: 3;
  }
`
const Cell3 = styled(Cell)(({ theme }) => css`
  ${mq('small')} {
    order: 4;
    margin-bottom: ${theme.spacingS}px;
  }
`)

const Cell4 = styled(Cell)`
  text-align: right;
  ${mq('small')} {
    order: 5;
  }
`

const Summary = styled(Paragraph1)(({ theme }) => css`
  grid-column: 1 / -1;
  padding-top: ${theme.spacingXS}px;
  margin-bottom: ${theme.spacingL}px;
  ${mq('small')} {
    order: 2;
    padding-top: 0;
    margin-bottom: ${theme.spacingS}px;
  }
`)

const Title = styled(Text)`
  ${mq('small')} {
    font-size: 21px;
    line-height: 140%;
    font-weight: 400;   
  }
`

const JobsList = ({ jobs, maxItems, withSummary }) => {
  const { lang } = useParams()
  const list = maxItems ? jobs.slice(0, maxItems) : jobs

  // job to open is first item
  return (
    <>
      {map(list, (job, i) => {
        return (
          <div key={i}>
            <Row>
              <Cell1>
                <Title isHighlighted>{job.label[lang]}</Title>
              </Cell1>
              <Cell2>
                <Text>{job.location}</Text>
              </Cell2>
              <Cell3>
                <Text>{job.contract[lang]}</Text>
              </Cell3>
              <Cell4>
                <LinkArrow to={`/${lang}/${ROUTES.JOBS.SLUG_INDEX}/${job.slug}`}>
                  <FormattedMessage id='last-jobs-apply' />
                  <ArrowRight />
                </LinkArrow>
              </Cell4>
              {withSummary && <Summary>{job.intro[lang]}</Summary>}
            </Row>
          </div>
        )
      })}
      {maxItems && jobs.length > maxItems && (
        <LinkMore to={`/${lang}/${ROUTES.JOBS.SLUG_INDEX}`} target='_blank'>
          <FormattedMessage id='last-jobs-link-label' />
        </LinkMore>
      )}
    </>
  )
}

export default JobsList
