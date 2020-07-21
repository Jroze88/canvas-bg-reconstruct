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
import GIFVideo from '../../../../components/PieceOfWork/GIFVideo'

// images gallery
import imgGallery1 from '././assets/gallery/commute_gallery_0001.jpg'
import imgGallery2 from '././assets/gallery/commute_gallery_0002.jpg'
import imgGallery3 from '././assets/gallery/commute_gallery_0003.jpg'

// images body
import imgBody1 from '././assets/body/commute_img_0001.jpg'
import imgBody2 from '././assets/body/commute_img_0002.jpg'
import imgBody3 from '././assets/body/commute_img_0003.jpg'
import imgBody4 from '././assets/body/commute_img_0004.jpg'
import imgBody5 from '././assets/body/commute_img_0005.jpg'

// images carousel
import imgCarousel1 from '././assets/carousel/commute_img_carousel_0001.jpg'
import imgCarousel2 from '././assets/carousel/commute_img_carousel_0002.jpg'
import imgCarousel3 from '././assets/carousel/commute_img_carousel_0003.jpg'
import imgCarousel4 from '././assets/carousel/commute_img_carousel_0004.jpg'

const DVCommute = ({ isDarkTheme }) => {
  // const { lang } = useParams()
  // const isFr = lang === LANG.FR.SLUG
  return (
    <>
      <Section>
      
      </Section>
    </>
  )
}

const infosDVCommute = {
  component: DVCommute,
  label: {
    fr: 'Commute',
    en: 'Commute'
  },
  theme: {
    isDark: true
  },
  video: '426957099',
  date: {
    fr: '2018',
    en: '2018'
  },
  chapo: {
    fr: 'Attirer l\'attention du grand public sur la pollution sonore dans le métro, grâce à de nouveaux modes de représentation des données.',
    en: 'Use new ways of presenting data to raise awareness among the general public about noise pollution in the metro.'
  },
  results: {
    fr: 'Prix Silver Kantar Information is Beautiful Awards 2019.',
    en: 'Silver Kantar Information is Beautiful Awards 2019.'
  },
  src: {
    url: 'https://commute.JanoRoze.com  ',
    label: 'commute.JanoRoze.com  '
  },
  category: {
    fr: 'Prototype',
    en: 'Prototype'
  },
  carousel: {
    isBig: true,
    pics: [imgCarousel4, imgCarousel3, imgCarousel1, imgCarousel2]
  },
  slug: 'commute',
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

export default DVCommute
export { infosDVCommute }
