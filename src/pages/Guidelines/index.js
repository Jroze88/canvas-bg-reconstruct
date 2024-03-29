import React from 'react'
// import { FormattedMessage } from 'react-intl'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { useParams } from 'react-router-dom'

import Download from '../../assets/icons/Download'
import pdfChecklistEn from '../../assets/pdf/checklist/JanoRoze_Checklist_Human_Data_Interactions_project_EN.pdf'
import pdfChecklistFr from '../../assets/pdf/checklist/JanoRoze_Checklist_Projet_d_interactions_humains_donnees_FR.pdf'
import LANGS from '../../common/wording/lang'
import PageHeader from '../../components/PageHeader'
import mq from '../../common/styles/breakpoints'
import { Title3 } from '../../components/Titles'
import { Paragraph1, PKpi } from '../../components/Paragraphs'
import GridContainer from '../../components/GridContainer'
import ButtonContact from '../../components/Buttons/ButtonContact'
import Link from '../../components/Links'
import { withTheme } from 'emotion-theming'

const StepNumber = styled(PKpi)(
  ({ mobile }) => css`
    margin-top: -10px;
    display: ${mobile ? 'none' : 'block'};
    ${mq('small')} {
      display: block;
      margin-top: 0;
      margin-right: 6px;
    }
`)

const ContactContainer = styled.div(({ theme }) => css`
  margin-bottom: ${theme.spacingM}px;
  ${mq('small')} {
    margin-bottom: ${theme.spacingS}px;
  }
`)

const TitleBlock = styled(Title3)(({ theme }) => css`
  padding-bottom: ${theme.spacingS}px;
  ${mq('small')} {
    display: flex;
  }
`)

const Paragraph = styled(Paragraph1)(({ theme, strong }) => css`
  padding-bottom: ${theme.spacingS}px;
  font-weight: ${strong ? 500 : 'inherit'};
`)

const BlockContainer = styled.div(
  ({ theme, lastBlock }) => css`
    padding-top: ${theme.spacingS}px;
    padding-bottom: ${lastBlock ? theme.spacingS : theme.spacingL}px;
    border-top: 1px solid ${theme.separator};
    grid-column: 2 / -2;
    display: grid;
    grid-template-columns: repeat(18, 1fr);
    grid-column-gap: 2px;
    ${mq('small')} {
      padding-bottom: ${theme.spacingS}px;
    }
  `
)
const Left = styled.div`
  grid-column: 1 / 8;
  ${mq('small')} {
    display: none;
  }
`
const Right = styled.div`
  grid-column: 8 / -1;
  ${mq('small')} {
    grid-column: 1 / -1;
  }
`
const DownloadIcon = styled(Download)`
  margin-left: 18px;
  ${mq('small')} {
    display: none;
  }
`

const LinkStyled = styled(Link)(({ theme }) => css` /* si on met un div l'anim fonctionne */
    display: inline-flex;
    align-items: center;
    margin-bottom: ${theme.spacingL}px;
    ${mq('small')} {
      margin-bottom: ${theme.spacingS}px;
    }
`)

const ButtonDownload = withTheme(props => (
  <LinkStyled {...props}>
    {props.children}
    <DownloadIcon color={props.theme.tonic} />
  </LinkStyled>
))

const Guidelines = () => {
  const { lang } = useParams()
  return (
    <GridContainer>
      {/* <PageHeader
        titleMain={<FormattedMessage id='guidelines-main-title' />}
        noBorder
      />
      <BlockContainer>
        <Left>
          <StepNumber>1.</StepNumber>
        </Left>
        <Right>
          <TitleBlock>
            <StepNumber mobile>1.</StepNumber>
            <FormattedMessage id='guidelines-1-title' />
          </TitleBlock>
          <div>
            <Paragraph>
              <FormattedMessage id='guidelines-1-content-1' />
            </Paragraph>
          </div>
        </Right>
      </BlockContainer>
      <BlockContainer>
        <Left>
          <StepNumber>2.</StepNumber>
        </Left>
        <Right>
          <TitleBlock>
            <StepNumber mobile>2.</StepNumber>
            <FormattedMessage id='guidelines-2-title' />
          </TitleBlock>
          <div>
            <Paragraph>
              <FormattedMessage id='guidelines-2-content-1' />
            </Paragraph>
          </div>
        </Right>
      </BlockContainer>
      <BlockContainer>
        <Left>
          <StepNumber>3.</StepNumber>
        </Left>
        <Right>
          <TitleBlock>
            <StepNumber mobile>3.</StepNumber>
            <FormattedMessage id='guidelines-3-title' />
          </TitleBlock>
          <div>
            <Paragraph>
              <FormattedMessage id='guidelines-3-content-1' />
            </Paragraph>
          </div>
        </Right>
      </BlockContainer>
      <BlockContainer>
        <Left>
          <StepNumber>4.</StepNumber>
        </Left>
        <Right>
          <TitleBlock>
            <StepNumber mobile>4.</StepNumber>
            <FormattedMessage id='guidelines-4-title' />
          </TitleBlock>
          <div>
            <Paragraph>
              <FormattedMessage id='guidelines-4-content-1' />
            </Paragraph>
            <Paragraph strong>
              <FormattedMessage id='guidelines-4-content-2' />
            </Paragraph>
          </div>
          <ButtonDownload
            onClick={() => window.fathom && window.fathom.trackGoal('G37B2VIH', 0)}
            to={lang === LANGS.FR.SLUG ? pdfChecklistFr : pdfChecklistEn}
            target='_blank'
          >
            <FormattedMessage id='guidelines-button-download' />
          </ButtonDownload>
          <ContactContainer>
            <ButtonContact alignLeft />
          </ContactContainer>
        </Right>
      </BlockContainer> */}
    </GridContainer>
  )
}

export default Guidelines
