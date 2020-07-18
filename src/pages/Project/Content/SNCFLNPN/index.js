import React from 'react'
import { useParams } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'

// images body
import imgBody1 from '././assets/body/sncf-lnpn_img_0001.jpg'
import imgBody2 from '././assets/body/sncf-lnpn_img_0002.jpg'
import imgBody3 from '././assets/body/sncf-lnpn_img_0003.jpg'
import imgBody4 from '././assets/body/sncf-lnpn_img_0004.jpg'

// images carousel
import imgCarousel1 from '././assets/carousel/sncflnpn_img_carousel_0001.jpg'
import imgCarousel2 from '././assets/carousel/sncflnpn_img_carousel_0002.jpg'
import imgCarousel3 from '././assets/carousel/sncflnpn_img_carousel_0003.jpg'
import imgCarousel4 from '././assets/carousel/sncflnpn_img_carousel_0004.jpg'

import {
  Chapo,
  SectionTitle,
  Section,
  SectionImage,
  Img,
  ImgLegend
} from '../../../../components/PieceOfWork/Gallery/shared'
import LANG from '../../../../common/wording/lang'
import { Paragraph1 } from '../../../../components/Paragraphs'

const SNCFLNPN = () => {
  const { lang } = useParams()
  const isFr = lang === LANG.FR.SLUG
  return (
    <>
      <Section>
        <Chapo>
          {
            isFr
              ? 'Nous avons construit l\'outil DECIDD pour aider SNCF Réseau à choisir et à justifier quel sera le tracé de la prochaine ligne de TGV Paris-Normandie, en tenant compte de plus de cent critères d’évaluation.'
              : 'We built the DECIDD tool to help SNCF Réseau choose and justify the route for the next TGV line from Paris to Normandy, taking into account more than 100 evaluation criteria. The tool uses data visualization to highlight the strengths and weaknesses of route options, while at the same time clarifying how they have been evaluated.'
          }
        </Chapo>
      </Section>
      <Section>
        <SectionTitle>
          <FormattedMessage id='project-body-problem' />
        </SectionTitle>
        <Paragraph1>
          {
            isFr
              ? 'Décider où poser les rails de la future ligne de TGV Paris-Normandie est une lourde responsabilité\u00A0: selon le tracé retenu, des gares seront – ou non – desservies, des paysages transformés, et des bassins écologiques chamboulés. Pour faire les bons choix, SNCF Réseau s\'appuie sur des études qui rassemblent des centaines d\'indicateurs hétérogènes. Nos interlocuteurs avaient besoin d’un outil d\'aide à la décision capable de restituer visuellement l\'ensemble de ces informations, et de rendre plus transparent le processus de prise de décision.'
              : 'Deciding where to lay the tracks for the new Paris-Normandy TGV line is a big responsibility: depending on the route, towns that will—or won’t—be served, landscapes transformed, and ecological basins turned upside down. To make the right decisions, SNCF Réseau relies on studies that bring together hundreds of heterogeneous indicators. SNCF Réseau needed a decision-making tool capable of reproducing all this information to help make the decision-making process more transparent.'
          }
        </Paragraph1>
      </Section>
      <Section>
        <SectionImage>
          <Img hasBorder src={imgBody4} />
        </SectionImage>
      </Section>
      <Section>
        <SectionTitle>
          <FormattedMessage id='project-body-data' />
        </SectionTitle>
        <Paragraph1>
          {
            isFr
              ? 'Pour déterminer le meilleur tracé possible d’une nouvelle ligne de TGV, SNCF Réseau définit les zones géographiques susceptibles d’accueillir la future ligne et collecte des données sur chacune d’entre elles. Ces données sont utilisées pour évaluer les zones, grâce à une grille comptant plus de cent critères et indicateurs, comme l’impact environnemental du tracé, son coût, le temps de trajet, le nombre de personnes desservies, ou l’adhésion des citoyens locaux.'
              : 'To determine the best possible route for a new TGV line, SNCF Réseau defines the geographical areas likely to accommodate the line and collects data on each of them. A grid with more than 100 criteria and indicators—such as the environmental impact of the route, its cost, travel time, the number of people served, or the support of local citizens—is used to help assess each of these zones.'
          }
        </Paragraph1>
      </Section>
      <Section>
        <SectionImage>
          <Img hasBorder src={imgBody3} />
        </SectionImage>
        <Section>
          <ImgLegend>
            {
              isFr
                ? 'Un premier niveau de lecture très agrégé montre la performance des tracés pour chaque grande famille d’indicateurs. L’utilisateur détermine facilement, par exemple, quel est le scénario le plus écologique, contre celui qui est le plus rentable.'
                : 'A very aggregated first reading level shows the performance of the route for each major family of indicators. The user can easily compare, for example, the more environmentally friendly scenario and the most cost-effective option.'
            }
          </ImgLegend>
        </Section>
      </Section>
      <Section>
        <SectionTitle>
          <FormattedMessage id='project-body-method' />
        </SectionTitle>
        <Paragraph1>
          {
            isFr
              ? 'Nous avons concentré notre travail sur deux objectifs\u00A0: tout d’abord, aider les utilisateurs à s’approprier la grille d’évaluation, pour, ensuite, leur permettre de comparer les différentes options de tracé de la nouvelle ligne Paris-Normandie.'
              : 'We focused our work on two main objectives: first, to help users get to know and use the evaluation tool properly; secondly, to allow users to compare the different route options for the new Paris-Normandy line.'
          }
        </Paragraph1>
      </Section>
      <Section>
        <SectionImage>
          <Img hasBorder src={imgBody2} />
        </SectionImage>
        <Section>
          <ImgLegend>
            {
              isFr
                ? 'L\'utilisateur consulte les points forts et les points faibles de chaque tracé, par exemple les gains de temps par trajet.'
                : 'The user can check the strengths and weaknesses of each route—for example, time savings per trip.'
            }
          </ImgLegend>
        </Section>
      </Section>
      <Section>
        <SectionTitle>
          <FormattedMessage id='project-body-solution' />
        </SectionTitle>
        <Paragraph1>
          {
            isFr
              ? 'Pour faciliter la comparaison, l\'outil synchronise une carte des tracés avec une visualisation des indicateurs associés à chaque tracé. Il propose plusieurs niveaux de lecture sur chaque scénario, du plus agrégé au plus détaillé, et facilite l’analyse multicritères en présentant ensemble tous les indicateurs.'
              : 'To make comparisons possible, the tool synchronizes a map of the routes with a visualization of the indicators associated with each route. It offers several reading levels for each scenario, from the most aggregated to the most detailed, and facilitates multi-criteria analysis by presenting all the indicators together.'
          }
        </Paragraph1>
      </Section>
      <Section>
        <SectionImage>
          <Img hasBorder src={imgBody1} />
        </SectionImage>
        <Section>
          <ImgLegend>
            {
              isFr
                ? 'L\'utilisateur peut identifier les critères les plus discriminants du référentiel d\'évaluation, c’est-à-dire ceux sur lesquels les scénarios s’opposent le plus fortement.'
                : 'The user can isolate within the system the criteria with values that contrast the most.'
            }
          </ImgLegend>
        </Section>
      </Section>
      <Section marginBottom='spacingXL'>
        <SectionTitle>
          <FormattedMessage id='project-body-main-point' />
        </SectionTitle>
        <Paragraph1>
          {
            isFr
              ? 'La visualisation est mise au service de la démarche de transparence de SNCF Réseau. Pendant la concertation, les acteurs locaux ont pu s’appuyer sur la visualisation comme outil de synthèse, pour discuter sans avoir en tête les cent critères d’évaluation en même temps. Une fois la décision prise, l’outil a permis de montrer aux citoyens les critères qui ont guidés la concertation, et les avantages comparatifs du tracé retenu par rapports aux autres options.'
              : 'Visualization is at the heart of SNCF Réseau\'s approach to transparency. During the consultation, local stakeholders were able to use visualization as a synthesis tool to discuss route options without having to consider all the different evaluation criteria at the same time—the indicators were already compared and presented for them. Once the final route was selected, the tool made it possible to show citizens the criteria that guided the decision, and the comparative advantages of the route chosen compared to the other options.'
          }
        </Paragraph1>
      </Section>
    </>
  )
}

const infosSNCFLNPN = {
  component: SNCFLNPN,
  client: {
    fr: 'SNCF Réseau',
    en: 'SNCF Réseau'
  },
  label: {
    fr: 'DECIDD',
    en: 'DECIDD'
  },
  theme: {
    isDark: true,
    background: '#3F1D35'
  },
  video: '427034878',
  results: {
    fr: 'L’application a facilité la négociation entre un grand nombre d’acteurs.',
    en: 'The application was used during consultations involving a large number of stakeholders.'
  },
  chapo: {
    fr: 'Aider à évaluer les tracés proposés pour une nouvelle ligne TGV en visualisant conjointement plus de 100\u00A0indicateurs.',
    en: 'Concurrently view more than 100 indicators to help assess proposed routes for a new TGV line.'
  },
  category: {
    fr: 'Outil',
    en: 'Tool'
  },
  date: {
    fr: '2016 - 4 mois',
    en: '2016 - 4 months'
  },
  carousel: {
    isBig: false,
    pics: [imgCarousel2, imgCarousel3, imgCarousel4, imgCarousel1]
  },
  slug: 'sncf-decidd',
  isOnHome: false,
  serviceId: 'decision-tools',
  galleryPics: []
}

export default SNCFLNPN
export { infosSNCFLNPN }
