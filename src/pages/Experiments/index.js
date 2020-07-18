import React from 'react'
import { FormattedMessage } from 'react-intl'
import { map } from 'lodash'
import { useParams } from 'react-router-dom'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { withTheme } from 'emotion-theming'

import ROUTES from '../../common/routes'
import layout from '../../common/configs/layout'
import mq from '../../common/styles/breakpoints'

import Metas from '../../components/Metas'
import PageHeader from '../../components/PageHeader'
import Archives from '../../components/Archives'
import Link from '../../components/Links'
import Carousel from '../../components/Carousel'
import GridContainer from '../../components/GridContainer'

import ArrowRight from '../../assets/icons/ArrowRight'

import { Title3 } from '../../components/Titles'

import experiments from '../../pages/Experiments/experiments'

const CategoryLinkContainer = styled(Link)(({ theme }) => css`
  grid-column: 9 / none;
  display: flex;
  align-items: center;
  margin-top: ${theme.spacingXL}px;
  margin-bottom: ${theme.spacingL}px;
  ${mq('small')} {
    margin-top: ${theme.spacingL}px;
    text-align: center;
    grid-column: 2 / -2;
    margin-left: auto;
    margin-right: auto;
  }
`)

const ArrowRightStyled = styled(ArrowRight)(({ theme }) => css`
  margin-left: ${theme.spacingM}px;
  flex-shrink: 0;
  ${mq('small')} {
    margin-left: ${theme.spacingS}px;
  }
`)

const headers = [
  { id: 'label', isHighlighted: false },
  { id: 'category', isHighlighted: false },
  { id: 'year', isHighlighted: false }
]

const archives = [
  {
    label: {
      fr: 'Live Magazine - Gaité Lyrique - MH370',
      en: 'Live Magazine - Gaité Lyrique - MH370'
    },
    category: {
      fr: 'Installation créative',
      en: 'Creative installation'
    },
    year: '2013'
  },
  {
    label: {
      fr: 'Printhub',
      en: 'Printhub'
    },
    category: {
      fr: 'Objet connecté',
      en: 'Connected object'
    },
    year: '2015'
  },
  {
    label: {
      fr: 'Logo JanoRoze animé',
      en: 'JanoRoze\' animated logo'
    },
    url: {
      fr: 'http://prototype.JanoRoze.com/#/',
      en: 'http://prototype.JanoRoze.com/#/'
    },
    category: {
      fr: 'Prototype',
      en: 'Prototype'
    },
    year: '2014'
  },
  {
    label: {
      fr: 'KADV',
      en: 'KADV'
    },
    category: {
      fr: 'Composant technologique',
      en: 'Technological component'
    },
    year: '2012'
  }
].sort((a, b) => b.year - a.year)

const Experiments = ({ theme }) => {
  const { lang } = useParams()
  return (
    <GridContainer>
      <Metas wording='experiments' />
      <PageHeader
        isDarkTheme={layout.EXPERIMENTS.isHeaderDark}
        titleMain={<FormattedMessage id='experiments-main-title' />}
        chapo={<FormattedMessage id='experiments-chapo' />}
        noBorder
      />
      {map(experiments, (project, index) => (
        <Carousel
          isDarkTheme={layout.EXPERIMENTS.isBodyDark}
          key={index}
          big={project.carousel.isBig}
          pics={project.carousel.pics}
          link={project.slug && `/${lang}/${ROUTES.EXPERIMENTS.SLUG_INDEX}/${project.slug}`}
          client={project.label[lang]}
          label={project.category[lang]}
          description={project.chapo[lang]}
        />
      ))}
      <CategoryLinkContainer to={`/${lang}/${ROUTES.PROJECTS.PATH}`}>
        <Title3>
          <FormattedMessage id='lab-link-to-projects' />
        </Title3>
        <ArrowRightStyled color={theme.tonic} />
      </CategoryLinkContainer>
      <Archives columns='10fr 5fr 5fr' list={archives} headers={headers} isDarkTheme />
    </GridContainer>
  )
}

export default withTheme(Experiments)
