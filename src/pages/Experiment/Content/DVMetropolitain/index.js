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

// Images Gallery
import imgGallery1 from '././assets/gallery/metropolitain_gallery_0001.jpg'
import imgGallery2 from '././assets/gallery/metropolitain_gallery_0002.jpg'
import imgGallery3 from '././assets/gallery/metropolitain_gallery_0003.jpg'

// images body
import imgBody1 from '././assets/body/metropolitain_img_0001.jpg'
import imgBody2 from '././assets/body/metropolitain_img_0002.jpg'
import imgBody3 from '././assets/body/metropolitain_img_0003.jpg'
import imgBody4 from '././assets/body/metropolitain_img_0004.jpg'
import imgBody5 from '././assets/body/metropolitain_img_0005.jpg'

// images carousel
import imgCarousel1 from '././assets/carousel/metropolitain_img_carousel_0001.jpg'
import imgCarousel2 from '././assets/carousel/metropolitain_img_carousel_0002.jpg'
import imgCarousel3 from '././assets/carousel/metropolitain_img_carousel_0003.jpg'
import imgCarousel4 from '././assets/carousel/metropolitain_img_carousel_0004.jpg'

const Metropolitain = ({ isDarkTheme }) => {
  const { lang } = useParams()
  const isFr = lang === LANG.FR.SLUG
  return (
    <>
      <Section>
       
      </Section>
    </>
  )
}

const infosDVMetropolitain = {
  component: Metropolitain,
  label: {
    fr: 'Métropolitain',
    en: 'Metropolitain'
  },
  theme: {
    isDark: true
  },
  video: '426961678',
  date: {
    fr: '2013',
    en: '2013'
  },
  src: {
    url: 'http://metropolitain.io',
    label: 'metropolitain.io '
  },
  caseStudy: {
    fr: {
      url: 'https://medium.com/JanoRoze-stories-vf/une-nouvelle-repr%C3%A9sentation-du-territoire-construite-par-les-donn%C3%A9es-du-m%C3%A9tro-86707f2339c5',
      label: 'Une nouvelle représentation du territoire construite par les données du métro'
    },
    en: {
      url: 'https://stories.JanoRoze.com/a-new-representation-of-our-transport-network-shaped-by-metro-data-e7c62dfe5979',
      label: 'A new representation of our transport network shaped by metro data'
    }
  },
  results: {
    fr: 'Shortlist Kantar Information is Beautiful Awards en 2013',
    en: 'Shortlist Kantar Information is Beautiful Awards en 2013.'
  },
  chapo: {
    fr: 'Révéler les dynamiques du métro parisien en visualisant des données qui décrivent le quotidien des voyageurs.',
    en: 'Reveal the dynamics of the Paris metro via the visualization of data that describes the daily lives of commuters.'
  },
  category: {
    fr: 'Application',
    en: 'Application'
  },
  carousel: {
    isBig: false,
    pics: [imgCarousel1, imgCarousel2, imgCarousel3, imgCarousel4]
  },
  slug: 'metropolitain',
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

export default Metropolitain
export { infosDVMetropolitain }
