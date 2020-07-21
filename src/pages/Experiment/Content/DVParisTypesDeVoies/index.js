import React from 'react'
import { useParams } from 'react-router-dom'
// import { FormattedMessage } from 'react-intl'

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
  // const { lang } = useParams()
  // const isFr = lang === LANG.FR.SLUG
  return (
    <>
      <Section>
        
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
    url: 'https://paris.JanoRoze.com ',
    label: 'paris.JanoRoze.com '
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
