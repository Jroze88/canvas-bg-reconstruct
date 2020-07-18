import React from 'react'
import { useParams } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'

import LANG from '../../../../common/wording/lang'
import { Paragraph1 } from '../../../../components/Paragraphs'

import {
  Chapo,
  SectionTitle,
  Section,
  SectionImage,
  Img
} from '../../../../components/PieceOfWork/Gallery/shared'
import LongVideo from '../../../../components/PieceOfWork/LongVideo'
import GIFVideo from '../../../../components/PieceOfWork/GIFVideo'

// images body
import imgBody1 from '././assets/body/datagraph_img_0001.jpg'
import imgBody2 from '././assets/body/datagraph_img_0002.jpg'
import imgBody3 from '././assets/body/datagraph_img_0003.jpg'
import imgBody4 from '././assets/body/datagraph_img_0004.jpg'

// images carousel
import imgCarousel1 from '././assets/carousel/datagraph_img_carousel_0001.jpg'
import imgCarousel2 from '././assets/carousel/datagraph_img_carousel_0002.jpg'
import imgCarousel3 from '././assets/carousel/datagraph_img_carousel_0003.jpg'

const DVDatagraph = () => {
  const { lang } = useParams()
  const isFr = lang === LANG.FR.SLUG
  return (
    <>
      <Section>
        <Chapo>
          {
            isFr
              ? 'Datagraph est un robot low-tech qui dessine des visualisations de données sur de grandes surfaces verticales. Cette installation créative allie l’impression 3D, la mécanique, la géométrie et les commandes Arduino pour donner une existence physique aux flux de données.'
              : 'Datagraph is a low-tech robot that draws data visualizations on large vertical surfaces. This creative installation combines 3D printing, mechanics, geometry and Arduino commands to give data flows a physical existence.'
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
              ? 'Les algorithmes et les bases de données sont, par nature, abstraits et difficiles à appréhender pour le grand public. Nous cherchions à donner à ces nouvelles technologies une dimension plus proche des humains, pour faciliter leur prise en main par un public peu expert.'
              : 'Algorithms and databases are, by their nature, abstract and difficult for the general public to grasp. To allow inexperienced audiences to use these new technologies, we wanted to present them with more of a human dimension.'
          }
        </Paragraph1>
      </Section>
      <Section>
        <Section>
          <GIFVideo isDarkTheme uri='429916242' />
        </Section>
        <SectionImage>
          <Img src={imgBody2} />
        </SectionImage>
      </Section>
      <Section>
        <SectionTitle>
          <FormattedMessage id='project-body-solution' />
        </SectionTitle>
        <Paragraph1>
          {
            isFr
              ? 'Le système fonctionne avec une carte Arduino. Il comporte une partie hardware\u00A0: poulies, servomoteurs, structure, alimentation\u00A0; et une partie software avec un micrologiciel de contrôle des moteurs, un logiciel d’optimisation des tracés pour réduire la durée des déplacements, et enfin un logiciel de visualisation de l’état du dessin pour suivre le tracé en cours, le nombre de tracés et l’estimation du temps restants.'
              : 'The system works with an Arduino board. It includes a hardware part: pulleys, servo motors, structure, power supply. Its software includes motor controller firmware and tracking optimization software to reduce movement time. Finally, we added a status display in order to monitor current and upcoming drawings, as well as the estimated time remaining.'
          }
        </Paragraph1>
      </Section>
      <Section>
        <SectionImage marginBottom='spacingM'>
          <Img src={imgBody4} />
        </SectionImage>
        <SectionImage marginBottom='spacingM'>
          <Img src={imgBody3} />
        </SectionImage>
        <SectionImage>
          <Img src={imgBody1} />
        </SectionImage>
      </Section>
      <Section>
        <SectionTitle>
          <FormattedMessage id='project-body-main-point' />
        </SectionTitle>
        <Paragraph1>
          {
            isFr
              ? 'La machine à dessiner peut être branchée sur des flux de données et les traduire en visualisation dessinée, en temps réel.'
              : 'The drawing machine can be connected to data streams and translate them into visualizations in real time.'
          }
        </Paragraph1>
      </Section>
      <Section>
        <Section>
          <GIFVideo vertical isDarkTheme uri='429917062' />
        </Section>
      </Section>
      <Section marginBottom='spacingXL'>
        <LongVideo uri='428090405' />
      </Section>
    </>
  )
}

const infosDVDatagraph = {
  component: DVDatagraph,
  label: {
    fr: 'Datagraph',
    en: 'Datagraph'
  },
  theme: {
    isDark: true
  },
  results: {
    fr: 'Utilisé par Twitter France en 2018 lors de sa soirée publique Best of Tweets.',
    en: 'Used by Twitter France in 2018 during its ‘Best of Tweets’ public party.'
  },
  video: '426959689',
  date: {
    fr: '2018',
    en: '2018'
  },
  chapo: {
    fr: 'Sensibiliser le grand public aux nouvelles technologies grâce à un robot qui dessine avec les données.',
    en: 'Educate the general public about new technologies using a robot that draws with data.'
  },
  category: {
    fr: 'Installation créative',
    en: 'Creative installation'
  },
  carousel: {
    isBig: false,
    pics: [imgCarousel1, imgCarousel2, imgCarousel3]
  },
  slug: 'datagraph'
}

export default DVDatagraph
export { infosDVDatagraph }
