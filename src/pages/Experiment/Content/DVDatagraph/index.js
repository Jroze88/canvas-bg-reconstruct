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
  // const { lang } = useParams()
  // const isFr = lang === LANG.FR.SLUG
  return (
    <>
      <Section>
        
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
