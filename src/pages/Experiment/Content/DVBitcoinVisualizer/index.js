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
  Img,
  ImgLegend
} from '../../../../components/PieceOfWork/Gallery/shared'
import LongVideo from '../../../../components/PieceOfWork/LongVideo'

// Images Gallery
import imgGallery1 from '././assets/gallery/bitcoin_gallery_0001.jpg'
import imgGallery2 from '././assets/gallery/bitcoin_gallery_0002.jpg'
import imgGallery3 from '././assets/gallery/bitcoin_gallery_0003.jpg'

// images body
import imgBody1 from '././assets/body/bitcoin_img_0001.jpg'
import imgBody2 from '././assets/body/bitcoin_img_0002.jpg'

// images carousel
import imgCarousel1 from '././assets/carousel/bitcoin_img_carousel_0001.jpg'
import imgCarousel2 from '././assets/carousel/bitcoin_img_carousel_0002.jpg'
import imgCarousel3 from '././assets/carousel/bitcoin_img_carousel_0003.jpg'

const DVBitcoinVisualizer = ({ isDarkTheme }) => {
  // const { lang } = useParams()
  // const isFr = lang === LANG.FR.SLUG
  return (
    <>
      <Section>
      
      </Section>
    </>
  )
}

const infosDVBitcoinVisualizer = {
  component: DVBitcoinVisualizer,
  label: {
    fr: 'Bitcoin Blockchain Visualizer',
    en: 'Bitcoin Blockchain Visualizer'
  },
  theme: {
    isDark: true
  },
  video: '424103968',
  date: {
    fr: '2017',
    en: '2017'
  },
  results: {
    fr: 'La visualisation a été projetée devant des milliers de spectateurs au Casino de Paris, lors du Live Magazine de septembre 2017.',
    en: 'The visualization was projected in front of thousands of spectators during the September 2017 edition of Live Magazine at Casino de Paris.'
  },
  chapo: {
    fr: 'Visualiser en temps réel le rythme de la blockchain Bitcoin, pour expliquer ses concepts.',
    en: 'Explain the basic concept of the Bitcoin blockchain by visualizing it in real time.'
  },
  category: {
    fr: 'Prototype',
    en: 'Prototype'
  },
  carousel: {
    isBig: false,
    pics: [imgCarousel1, imgCarousel2, imgCarousel3]
  },
  slug: 'bitcoin-visualizer',
  galleryPics: [
    {
      src: imgGallery1
    },
    {
      src: imgGallery2
    },
    {
      src: imgGallery3
    }
  ]
}

export default DVBitcoinVisualizer
export { infosDVBitcoinVisualizer }
