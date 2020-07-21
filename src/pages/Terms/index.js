import React from 'react'
// import { FormattedMessage } from 'react-intl'
import styled from '@emotion/styled'
import { css } from '@emotion/core'

import PageHeader from '../../components/PageHeader'
import { Title2, Title3 } from '../../components/Titles'
import GridContainer from '../../components/GridContainer'

import {
  RightCol,
  Layout3cols
} from '../../components/Layout/3Cols'
import layout from '../../common/configs/layout'

const Container = styled(Layout3cols)(({ theme }) => css`
  padding: ${theme.spacingM}px 0;
`)

const Block = styled.div(({ theme }) => css`
  padding-bottom: ${theme.spacingM}px;
`)

const Title2Styled = styled(Title2)(({ theme }) => css`
  padding-bottom: ${theme.spacingM}px;
`)

const Title3Styled = styled(Title3)(({ theme }) => css`
  padding-bottom: ${theme.spacingS}px;
`)

const Terms = () => {
  return (
    <GridContainer>
      
    </GridContainer>
  )
}

export default Terms
