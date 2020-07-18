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

// body
import imgBody1 from '././assets/body/voies_paris_img_0001.jpg'
import imgBody2 from '././assets/body/voies_paris_img_0002.jpg'
import imgBody3 from '././assets/body/voies_paris_img_0003.jpg'

// images carousel
import imgCarousel1 from '././assets/carousel/voieparis_img_carousel_0001.jpg'
import imgCarousel2 from '././assets/carousel/voieparis_img_carousel_0002.jpg'
import imgCarousel3 from '././assets/carousel/voieparis_img_carousel_0003.jpg'

const DVParisTypesDeVoies = () => {
  const { lang } = useParams()
  const isFr = lang === LANG.FR.SLUG
  return (
    <>
      <Section>
        <Chapo>
          {
            isFr
              ? 'Nous avons rendu explorable et ludique une base de données décrivant plus de 6\u00A0000 voies à Paris.'
              : 'We made a database describing more than 6,000 roads and streets in Paris fun and easy to explore.'
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
              ? 'Les données décrivant les rues de Paris racontent l\'histoire de la capitale\u00A0: ses tendances architecturales, ses événements historiques, ses modes d\'organisation de la propriété, etc. Nous avons voulu rendre perceptibles ces fragments historiques à travers la visualisation de données.'
              : 'Data describing the streets of Paris tells the history of the capital: its architectural trends, its historical events, the way it has been organized and built, etc. We wanted to make these historical fragments accessible through data visualization.'
          }
        </Paragraph1>
      </Section>
      <Section>
        <SectionImage>
          <Img src={imgBody3} />
        </SectionImage>
      </Section>
      <Section>
        <SectionTitle>
          <FormattedMessage id='project-body-data' />
        </SectionTitle>
        <Paragraph1>
          {
            isFr
              ? 'Le projet exploite le jeu de données VOIE mis à disposition par l’Atelier Parisien d\'Urbanisme (Apur).'
              : 'The project uses the VOIE dataset made available by Atelier Parisien d\'Urbanisme (Apur).'
          }
        </Paragraph1>
      </Section>
      <Section>
        <SectionImage>
          <Img src={imgBody1} />
        </SectionImage>
      </Section>
      <Section>
        <SectionTitle>
          <FormattedMessage id='project-body-solution' />
        </SectionTitle>
        <Paragraph1>
          {
            isFr
              ? 'A travers ce projet, nous avons cherché à résoudre des problèmes techniques de fluidité et de performance. L\'utilisateur peut interagir très rapidement avec plus de 6\u00A0000 objets cartographiques, sans friction.'
              : 'We sought to solve technical problems such as fluidity and performance. The user can quickly and seamlessly interact with more than 6,000 geographic elements.'
          }
        </Paragraph1>
      </Section>
      <Section>
        <SectionImage>
          <Img src={imgBody2} />
        </SectionImage>
      </Section>
      <Section>
        <SectionTitle>
          <FormattedMessage id='project-body-main-point' />
        </SectionTitle>
        <Paragraph1>
          {
            isFr
              ? 'Pour chaque type de voie, nous apportons du contexte, une définition, des références historiques, et de petites histoires.'
              : 'For each type of road, we provide context, definition, historical references, and short stories.'
          }
        </Paragraph1>
      </Section>
      <Section marginBottom='spacingXL'>
        <LongVideo uri='428091127' />
      </Section>
    </>
  )
}

const infosDVParisTypesDeVoies = {
  component: DVParisTypesDeVoies,
  label: {
    fr: 'Les rues de Paris',
    en: 'The streets of Paris'
  },
  theme: {
    isDark: true
  },
  video: '426935531',
  date: {
    fr: '2019',
    en: '2019'
  },
  chapo: {
    fr: 'Révéler l\'unicité des rues parisiennes.',
    en: 'Reveal the uniqueness of Parisian streets.'
  },
  results: {
    fr: 'Application responsive -\u00A0smartphone, tablette, desktop\u00A0- et performante, malgré le gros volume de données cartographiques.',
    en: 'A responsive application for smartphones, tablets and desktops that has performance and fluidity despite a large volume of geographic data.'
  },
  src: {
    url: 'https://paris.dataveyes.com ',
    label: 'paris.dataveyes.com '
  },
  category: {
    fr: 'Application',
    en: 'Application'
  },
  carousel: {
    isBig: false,
    pics: [imgCarousel1, imgCarousel2, imgCarousel3]
  },
  slug: 'paris-types-de-voies'
}

export default DVParisTypesDeVoies
export { infosDVParisTypesDeVoies }
