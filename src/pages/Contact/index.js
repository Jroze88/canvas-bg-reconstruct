import React from 'react'
// import { FormattedMessage, useIntl } from 'react-intl'
import { useParams } from 'react-router-dom'
import { withTheme } from 'emotion-theming'

import LANG from '../../common/wording/lang'
import layout from '../../common/configs/layout'

import Metas from '../../components/Metas'
import PageHeader from '../../components/PageHeader'
import { Paragraph1 } from '../../components/Paragraphs'
import { Title3 } from '../../components/Titles'
import { LeftColWithGutter, RightColWithGutter } from '../../components/Layout/3Cols'
import ROUTES from '../../common/routes'
import ArrowRight from '../../assets/icons/ArrowRight'
import Link from '../../components/Links'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import mq from '../../common/styles/breakpoints'
import GridContainer from '../../components/GridContainer'
import ButtonContact from '../../components/Buttons/ButtonContact'

const Container = styled(GridContainer)(({ theme }) => css`
  padding-bottom: ${theme.spacingL}px;
`)

const ContactContainer = styled.div(({ theme }) => css`
  margin-bottom: ${theme.spacingM}px;
  ${mq('small')} {
    margin-bottom: ${theme.spacingS}px;
  }
`)

// left col
const LeftCol = styled(LeftColWithGutter)(({ theme }) => css`
  padding-bottom: ${theme.spacingL}px;
`)

const Text1 = styled(Paragraph1)(({ theme }) => css`
  padding-bottom: ${theme.spacingS}px;
  color: ${theme.main};
`)

// right col
const Block = styled.div(({ theme }) => css`
  padding-bottom: ${theme.spacingL}px;
  ${mq('small')} {
    padding-bottom: ${theme.spacingM}px;
  }
`)

const Title = styled(Title3)(({ theme }) => css`
  padding-top: ${theme.spacingS}px;
  padding-bottom: ${theme.spacingS}px;
  border-top: 1px solid ${theme.separator};
`)

const LinkStyled = styled(Link)(({ theme }) => css`
  display: inline-flex;
  align-items: center;
  ${mq('small')} {
    display: flex;
    justify-content: space-between;
  }
`)

const ArrowRightStyled = styled(ArrowRight)(({ theme }) => css`
  flex-shrink: 0;
  margin-left: ${theme.spacingS}px;
`)
const LinkMore = withTheme(({ to, id, theme, href, target }) => (
  <LinkStyled href={href} to={to} target={target}>
    {/* <FormattedMessage id={id} /> */}
    <ArrowRightStyled color={theme.tonic} />
  </LinkStyled>
))

const Contact = () => {
  // const intl = useIntl()
  const { lang } = useParams()
  const isFr = lang === LANG.FR.SLUG

  const linkArticle = isFr
    ? 'https://medium.com/JanoRoze-stories-vf/que-faites-vous-que-vendez-vous-nos-r%C3%A9ponses-aux-questions-les-plus-fr%C3%A9quentes-60e114417c3d?sk=18552c880f2d0f09462d4d0e3f14407b'
    : 'https://stories.JanoRoze.com/what-are-you-doing-what-do-you-sell-some-questions-you-may-have-for-us-df14019352b8?sk=83dd5dd3e994bd38b77d33fa4e1e019c'

  return (
    <Container>
    
    </Container>
  )
}

export default Contact
