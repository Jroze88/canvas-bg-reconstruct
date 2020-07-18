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
  const { lang } = useParams()
  const isFr = lang === LANG.FR.SLUG
  return (
    <>
      <Section>
        <Chapo>
          {
            isFr
              ? 'Commute est une expérience immersive, sonore et interactive pour explorer l’empreinte sonore d’une ligne de transport en commun.'
              : 'Commute is an immersive, interactive audio experience that explores the sound footprint of a public transportation line.'
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
              ? 'Commute naquit d\'une ambition\u00A0: éveiller les consciences sur la pollution sonore subie en ville. Pour cela, nous voulions donner à voir et à entendre les bruits qui nous entourent au quotidien, et qui jouent sur notre fatigue comme notre santé.'
              : 'The goal of Commute was to raise awareness of noise pollution in the city. We wanted to see and hear the noises that surround us each day  - noises that impact on our health and energy levels.'
          }
        </Paragraph1>
      </Section>
      <Section>
        <SectionImage>
          <Img src={imgBody1} />
        </SectionImage>
        <Section>
          <ImgLegend>
            {
              isFr
                ? 'Le mode de visualisation Wave rejoue un trajet en métro, à travers les formes, les couleurs et les sons.'
                : 'The spiral view mode replays a metro journey through shapes, colors and sounds.'
            }
          </ImgLegend>
        </Section>
        <Section>
          <GIFVideo uri='429918423' />
        </Section>
      </Section>
      <Section>
        <SectionTitle>
          <FormattedMessage id='project-body-data' />
        </SectionTitle>
        <Paragraph1>
          {
            isFr
              ? 'Armés d\'un sonomètre et d\'un enregistreur audio, nous avons parcouru de part en part toutes les lignes de métro de Paris pour constituer une première base de données sonore du transport parisien.'
              : 'Armed with a sound level meter and an audio recorder, we rode every Paris metro line to build the first sound database of the Paris transport system.'
          }
        </Paragraph1>
      </Section>
      <Section>
        <SectionTitle>
          <FormattedMessage id='project-body-solution' />
        </SectionTitle>
        <Paragraph1>
          {
            isFr
              ? 'Commute combine le visuel à l’audio d’une manière poétique\u00A0: l\'application décompose le bruit enregistré en fréquences et en intensités, puis les transforme en motifs visuels et sonores esthétiques. L\'application propose ainsi de visualiser et "d\'écouter" les données d’un trajet quotidien en métro.'
              : 'Commute combines vision and audio in a poetic way: the app breaks recorded noise down into frequencies and intensities, and then transforms them into beautiful visual and sound patterns. The app therefore provides the opportunity to both listen to and watch data that relates to a daily metro journey.'
          }
        </Paragraph1>
        <Paragraph1>
          {
            isFr
              ? 'Avec ce projet, nous avons expérimenté la sonification de données. Dans Commute, les données génèrent une mélodie harmonieuse grâce à un algorithme de correspondance entre les décibels récoltés et des fréquences harmoniques dans un système pentatonique.'
              : 'Throughout the project, we experimented with data sonication. In Commute, the data generates a harmonious melody thanks to an algorithm that matches the decibels collected with the harmonic frequencies in a pentatonic scale.'
          }
        </Paragraph1>
      </Section>
      <Section>
        <SectionImage>
          <Img src={imgBody2} />
        </SectionImage>
        <Section>
          <ImgLegend>
            {
              isFr
                ? 'Le mode de visualisation en spirale met l\'accent sur la fatigue endurée par les voyageurs lors d\'un trajet en métro\u00A0: chaque minute passée au delà de 80\u00A0dB dans la journée nuit à notre santé.'
                : 'The circular viewing mode highlights the impact of each metro trip on travelers: every minute spent above 80 dB in the day harms our health.'
            }
          </ImgLegend>
        </Section>
        <Section>
          <GIFVideo uri='429918445' />
        </Section>
        <SectionImage marginBottom='spacingM'>
          <Img src={imgBody3} />
        </SectionImage>
        <SectionImage>
          <Img src={imgBody4} />
        </SectionImage>
      </Section>
      <Section>
        <SectionTitle>
          <FormattedMessage id='project-body-main-point' />
        </SectionTitle>
        <Paragraph1>
          {
            isFr
              ? 'Commute fait le pari que l’expérience immersive, l’interactivité et le son peuvent redonner prise aux habitants de grandes villes sur leur quotidien.'
              : 'With Commute, we hope that the immersive experience, the interactivity and the sounds can give something back each day to people living in large cities.'
          }
        </Paragraph1>
      </Section>
      <Section>
        <SectionImage>
          <Img src={imgBody5} />
        </SectionImage>
        <Section>
          <ImgLegend>
            {
              isFr
                ? 'En comparant l\'empreinte sonore des différentes lignes de métro, les utilisateurs peuvent mieux comprendre les causes de la pollution sonore.'
                : 'By comparing the noise footprint of different metro lines, users can better understand the causes of noise pollution.'
            }
          </ImgLegend>
        </Section>
      </Section>
      <Section>
        <LongVideo uri='428090454' />
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
    url: 'https://commute.dataveyes.com  ',
    label: 'commute.dataveyes.com  '
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
