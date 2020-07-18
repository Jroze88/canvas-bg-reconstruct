import React from 'react'
import { useParams } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'

// Images Gallery
import imgGallery1 from '././assets/gallery/michelin_gallery_0001.jpg'
import imgGallery2 from '././assets/gallery/michelin_gallery_0002.jpg'
import imgGallery3 from '././assets/gallery/michelin_gallery_0003.jpg'

// images body
import imgBody3 from '././assets/body/michelin_img_0003.jpg'
import imgBody4 from '././assets/body/michelin_img_0004.jpg'
import imgBody5 from '././assets/body/michelin_img_0005.jpg'

// images carousel
import imgCarousel1 from '././assets/carousel/michelin_img_carousel_0001.jpg'
import imgCarousel2 from '././assets/carousel/michelin_img_carousel_0002.jpg'
import imgCarousel3 from '././assets/carousel/michelin_img_carousel_0003.jpg'
import imgCarousel4 from '././assets/carousel/michelin_img_carousel_0004.jpg'

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
import LongVideo from '../../../../components/PieceOfWork/LongVideo'

const MichelinDDI = () => {
  const { lang } = useParams()
  const isFr = lang === LANG.FR.SLUG
  return (
    <>
      <Section>
        <Chapo>
          {
            isFr
              ? 'Nous avons visualisé les trajets réalisés par une communauté de 50\u00A0000 conducteurs ayant équipé leurs voitures de boîtiers. Ce projet a permis à Michelin de rendre tangible la valeur apportée par sa démarche “Better Driving Community”, une initiative communautaire entre conducteurs soucieux d’adopter de bons réflexes de conduite. L’outil de visualisation réalisé montre comment des villes ou des constructeurs peuvent utiliser ces données pour améliorer les infrastructures routières.'
              : 'We visualized the routes taken by a community of 50,000 drivers equipped with a specialized device. This project helped Michelin demonstrate the value of their \'Better Driving Community\', a community initiative for drivers eager to improve their driving habits. The visualization tool highlights how cities and manufacturers can use this data to improve road infrastructure.'
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
              ? 'Avec son département dédié à l’intelligence des données, et sa communauté de conducteurs connectés, Michelin a une démarche ambitieuse de valorisation de ses données pour améliorer nos routes. Cette démarche avait jusqu’à présent peu de visibilité, et restait un sujet réservé aux experts. Michelin souhaitait faire rayonner son usage innovant des données grâce au storytelling visuel.'
              : 'With its department dedicated to data intelligence and its community of connected drivers, Michelin pursues an ambitious approach to data valorization in order to improve our roads. Until now, these efforts lacked visibility and remained a topic for experts. Michelin wanted to promote its approach to smart data through visual storytelling.'
          }
        </Paragraph1>
      </Section>
      <SectionImage>
        <LongVideo uri='429914498' />
        <ImgLegend>
          {
            isFr
              ? 'La carte animée joue en vitesse accélérée tous les trajets réalisés par la communauté en un an. La couleur reflète la vitesse.'
              : 'The animated map fast-forwards through all the trips made by the community over one year. The color encodes the speed.'
          }
        </ImgLegend>
      </SectionImage>
      <Section>
        <SectionTitle>
          <FormattedMessage id='project-body-data' />
        </SectionTitle>
        <Paragraph1>
          {
            isFr
              ? 'Michelin anime la “Better Driving Community” : une communauté de plus de 50 000 conducteurs qui partagent les données lors de leurs trajets : vitesse, freinage, position, etc. Ces données parlent autant de nos habitudes de mobilité que de l’état de notre réseau routier.'
              : 'Michelin runs the \'Better Driving Community\': a community of more than 50,000 drivers who share their trips’s data: speed, braking, position, etc. This data speaks as much about our mobility habits as it does about the state of our road network.'
          }
        </Paragraph1>
      </Section>
      <Section>
        <SectionTitle>
          <FormattedMessage id='project-body-method' />
        </SectionTitle>
        <Paragraph1>
          {
            isFr
              ? 'Nous avons travaillé par très courtes itérations exploratoires\u00A0: à partir du jeu de données contenant plusieurs centaines de milliers de trajets, nous avons testés différents modes de visualisation de données. Chaque semaine, nous produisions de nouveaux tests, et les partagions à l’équipe Michelin. Chaque nouvelle itération nous amenait à sélectionner avec notre client les tests les plus parlants, pour ensuite les approfondir.'
              : 'We worked in very short, exploratory iterations: based on the data set containing several hundred thousand trips, we tested different data visualization approaches. Every week, we produced new tests and shared them with the Michelin team. Each new iteration allowed us to select the most meaningful tests, and explore them further.'
          }
        </Paragraph1>
      </Section>
      <SectionImage>
        <LongVideo uri='428063580' />
      </SectionImage>
      <Section>
        <ImgLegend>
          {
            isFr
              ? 'Le prototype permet de visualiser et de filtrer tous les trajets de la communauté, en 3D.'
              : 'The prototype allows filtering and visualizing all of the community’s trips in 3D.'
          }
        </ImgLegend>
      </Section>
      <Section>
        <SectionTitle>
          <FormattedMessage id='project-body-solution' />
        </SectionTitle>
        <Paragraph1>
          {
            isFr
              ? 'Nous avons produit deux interfaces. D’abord une vidéo rejouant les trajets de la communauté pendant un an, que Michelin utilise pour animer des conférences et des salons. Ensuite, un outil d’exploration des données où les filtres et les tris permettent de requêter visuellement les comportements de conduite ou les différents types de trajets, et de les visualiser sur une carte 3D.'
              : 'We made two interfaces. First, a video replaying an entire year of the community’s trips, which Michelin uses to illustrate their conferences and trade shows. Second, a data exploration tool with filters and sorting functions to visually query various driving behaviors or types of trips, and visualize the results on a 3D map.'
          }
        </Paragraph1>
      </Section>
      <SectionImage>
        <Img src={imgBody3} />
      </SectionImage>
      <Section>
        <ImgLegend>
          {
            isFr
              ? 'La visualisation montre, par effet d\'agrégation, les tendances dans les comportements de conduite.'
              : 'Through aggregation, the visualization highlights trends in driving behaviors.'
          }
        </ImgLegend>
      </Section>
      <Section>
        <SectionTitle>
          <FormattedMessage id='project-body-main-point' />
        </SectionTitle>
        <Paragraph1>
          {
            isFr
              ? 'Nous avons mis en place des modes de visualisation qui montrent à la fois la grande granularité des données –\u00A0les trajets individuels\u00A0– et l’information qui se dégage lorsqu’on les agrège\u00A0:\u00A0comportements de conduite, zones d’encombrement, schémas de déplacement en ville, etc.'
              : 'We produced visualization modes that underscore both the extensive data granularity—individual trips—and the information that emerges when these trips are aggregated: driving behavior, congestion zones, urban mobility patterns, etc.'
          }
        </Paragraph1>
      </Section>
      <SectionImage>
        <Img src={imgBody4} />
      </SectionImage>
      <SectionImage>
        <Img src={imgBody5} />
      </SectionImage>
    </>
  )
}

const infosMichelinDDI = {
  component: MichelinDDI,
  client: {
    fr: 'Michelin DDI',
    en: 'Michelin DDI'
  },
  label: {
    fr: 'Better Driving Community',
    en: 'Better Driving Community'
  },
  theme: {
    isDark: true,
    background: '#252F3A'
  },
  video: '427638306',
  results: {
    fr: 'Présenté à l\'exposition Designer(s) du Design, dans le cadre de Lille capitale mondiale du design 2020',
    en: 'Presented at the Design designer(s) exhibition, part of the \'Lille World Design Capital 2020\'.'
  },
  chapo: {
    fr: 'Montrer comment les données de 50\u00A0000 conducteurs connectés peuvent aider à améliorer les routes.',
    en: 'Highlighting how data from 50,000 connected drivers can contribute to improving road infrastructure.'
  },
  category: {
    fr: 'Prototype',
    en: 'Prototype'
  },
  date: {
    fr: '2019 - 2 mois',
    en: '2019 - 2 months'
  },
  carousel: {
    isBig: true,
    pics: [imgCarousel1, imgCarousel2, imgCarousel3, imgCarousel4]
  },
  slug: 'michelin-ddi',
  isOnHome: true,
  serviceId: 'prototyping',
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

export default MichelinDDI
export { infosMichelinDDI }
