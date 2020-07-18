import React from 'react'
import { useParams } from 'react-router-dom'
import { FormattedMessage, useIntl } from 'react-intl'
import styled from '@emotion/styled'
import { css } from '@emotion/core'

import RelatedCaseStudy from '../../components/RelatedCaseStudy'
import ListOf from '../../components/ListOf'
import services from '../../pages/Services/services'
import { Paragraph1 } from '../../components/Paragraphs'
import { Title2, Title4 } from '../../components/Titles'
import {
  BlockContainer,
  About,
  List1,
  List2
} from './common'

const ElChapo = styled.div`
  
`
const Title4Styled = styled(Title4)(({ theme }) => css`
  margin-bottom: ${theme.spacingM}px;
  color: ${theme.secondary};
`)

const MainTitleDelChapo = styled(Title2)`
  margin-bottom: ${({ theme }) => theme.spacingM}px;
  color: ${({ theme }) => theme.tonic};
`

const Section = ({ serviceKey }) => {
  const service = services[serviceKey]
  const intl = useIntl()
  const { lang } = useParams()
  const messagesKeys = Object.keys(intl.messages)
  const serviceType = service.id
  const concernIds = messagesKeys.filter(d => d.startsWith(`${serviceType}-concern`))
  const expertiseIds = messagesKeys.filter(d => d.startsWith(`${serviceType}-expertise`))
  return (
    <BlockContainer>
      <About>
        <MainTitleDelChapo>
          {service.label[lang]}
        </MainTitleDelChapo>
        <ElChapo>
          <Paragraph1>
            <FormattedMessage id={`${serviceType}-1`} />
          </Paragraph1>
          <Paragraph1>
            <FormattedMessage id={`${serviceType}-2`} />
          </Paragraph1>
        </ElChapo>
      </About>
      <List1>
        <Title4Styled>
          <FormattedMessage id='concerns-title' />
        </Title4Styled>
        <ListOf ids={concernIds} />
      </List1>
      <List2>
        <Title4Styled>
          <FormattedMessage id='expertise-title' />
        </Title4Styled>
        <ListOf ids={expertiseIds} />
      </List2>
      <RelatedCaseStudy slug={service.projectSlug} />
    </BlockContainer>
  )
}

export default Section
