import React from 'react'
import styled from '@emotion/styled'
// import { FormattedMessage } from 'react-intl'

import mq from '../../common/styles/breakpoints'

import { Paragraph2 } from '../../components/Paragraphs'
import { TitleLeft } from '../../components/ListTable'
import { css } from '@emotion/core'
import ButtonContact from '../../components/Buttons/ButtonContact'

const Text = styled(Paragraph2)(({ theme }) => css`
  margin-bottom: ${theme.spacingM}px;
  ${mq('small')} {
    margin-bottom: ${theme.spacingS}px;
  }
`)

const ContainerRight = styled.div(({ theme }) => css`
  grid-column: 9 / -2;
  padding-bottom: ${theme.spacingXL}px;
  ${mq('small')} {
    grid-column: 2 / -2;
    padding-bottom: ${theme.spacingL - 10}px;
  }
`)

const OpenApplications = () => (
  <>
    <TitleLeft>
      {/* <FormattedMessage id='jobs-applications-title' /> */}
    </TitleLeft>
    <ContainerRight>
      <Text>
        {/* <FormattedMessage id='jobs-applications-text' /> */}
      </Text>
      <ButtonContact
        alignLeft
        // label={<FormattedMessage id='jobs-applications-button' />}
        email='jobs@JanoRoze.com'
      />
    </ContainerRight>
  </>
)

export default OpenApplications
