import React from 'react'
import { useParams } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'

// images body
import imgBody1 from '././assets/body/orange_img_0001.jpg'
import imgBody2 from '././assets/body/orange_img_0002.jpg'
import imgBody3 from '././assets/body/orange_img_0003.jpg'

// images carousel
import imgCarousel1 from '././assets/carousel/orange_img_carousel_0001.jpg'
import imgCarousel2 from '././assets/carousel/orange_img_carousel_0002.jpg'
import imgCarousel3 from '././assets/carousel/orange_img_carousel_0003.jpg'

import {
  Chapo,
  SectionTitle,
  Section,
  SectionImage,
  Img
} from '../../../../components/PieceOfWork/Gallery/shared'
import LANG from '../../../../common/wording/lang'
import { Paragraph1 } from '../../../../components/Paragraphs'
import LongVideo from '../../../../components/PieceOfWork/LongVideo'

const OrangeHall = () => {
  const { lang } = useParams()
  const isFr = lang === LANG.FR.SLUG
  return (
    <>
      <Section>
        <Chapo>
          {
            isFr
              ? 'Nous avons allié le storytelling des données, la visualisation 3D et l\'animation pour proposer à Orange France une expérience d\'information originale. Cette installation, projetée sur grand écran, anime désormais le hall d\'accueil du siège social de la marque.'
              : 'We combined data storytelling, 3D visualization and animation to offer Orange France an original information experience. This installation, projected on a big screen, is now displayed in the lobby of the company’s headquarters.'
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
              ? 'Pour animer son nouveau hall d\'accueil, Orange France souhaitait proposer une installation sur grand écran qui raconte des histoires à partir de ses données. À travers ce projet, Orange France portait plusieurs ambitions\u00A0: faire découvrir aux visiteurs son univers, susciter leur curiosité, mais aussi leur donner une image positive des données.'
              : 'To help bring their new reception hall to life, Orange France wanted to project an installation on a big screen to tell stories about their data. With this project, Orange France had several objectives. They wanted to help visitors discover their universe and to arouse the curiosity of viewers, but also to provide a positive image of the data.'
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
              ? 'Pour ce projet, Orange nous a confié l\'analyse de grands volumes de données décrivant la consommation de données 3G/4G, de SMS et d’appels, agrégées par ville et par profil client. Nous avons ainsi identifié des tendances de consommation différentes selon les périodes de l\'année, les âges mais aussi le lieu de vie des clients.'
              : 'For this project, Orange entrusted us with the analysis of large volumes of data relating to 3G/4G use, SMS and calls, aggregated by city and by customer profile. We used this data to identify different consumer trends according to the time of year, the ages of customers and their home environments.'
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
          <FormattedMessage id='project-body-method' />
        </SectionTitle>
        <Paragraph1>
          {
            isFr
              ? 'Nous avons d\'abord exploré les données pour identifier des histoires intéressantes. Nous avons ensuite prototypé avec les données pour incarner ces histoires, et les traduire visuellement. Enfin, nous avons travaillé les animations et les transitions pour obtenir une application prête à être diffusée en continu sur grand écran.'
              : 'We started by exploring the data to identify interesting stories. We then used the data to develop a prototype that embodied these stories, and translated them visually. Finally, we worked on the animations and transitions to develop an application that could be broadcast continuously on a big screen.'
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
              ? 'L\'application associe la visualisation de données 3D à l\'animation et au texte pour proposer aux visiteurs une expérience d\'information originale. Nous avons choisi des représentations immersives, qui donnent au spectateur l’impression d’être immergé dans les données d’Orange France, et d’en découvrir les coulisses.'
              : 'The application combines the visualization of 3D data with moving images and text to offer visitors an original information experience. We chose immersive representations to give the viewer the feeling of being immersed in Orange France\'s data, and to provide them with a behind-the-scenes insight.'
          }
        </Paragraph1>
      </Section>
      <Section>
        <SectionTitle>
          <FormattedMessage id='project-body-main-point' />
        </SectionTitle>
        <Paragraph1>
          {
            isFr
              ? 'Pour éviter de lasser les visiteurs en répétant les mêmes informations, les séquences de visualisation sont branchées sur de vraies données, et varient en permanence. À chaque nouvelle diffusion une ville, ou un profil client, est pioché au hasard dans la base de données.'
              : 'The viewing sequences are connected to real data and vary constantly to maintain the interest of viewers. With each new broadcast, a city or a customer profile is drawn at random from the database.'
          }
        </Paragraph1>
      </Section>
      <Section marginBottom='spacingXL'>
        <LongVideo uri='428064443' />
      </Section>
    </>
  )
}

const infosOrangeHall = {
  component: OrangeHall,
  client: {
    fr: 'Orange',
    en: 'Orange'
  },
  label: {
    fr: 'Stories',
    en: 'Stories'
  },
  theme: {
    isDark: true,
    background: '#110500'
  },
  video: '427638601',
  results: {
    fr: 'Projeté dans le hall du siège social d\'Orange France, le projet touche 10\u00A0000\u00A0visiteurs tous les mois.',
    en: 'The installation is projected in the hall of Orange France\'s head office and reaches 10,000\u00A0visitors every month.'
  },
  chapo: {
    fr: 'Faire émerger des histoires intéressantes à partir des masses de données décrivant l’activité sur les réseaux de télécommunication.',
    en: 'Highlight interesting stories from the masses of data relating to activity on telecommunications networks.'
  },
  category: {
    fr: 'Installation créative',
    en: 'Creative installation '
  },
  date: {
    fr: '2019 - 3 mois',
    en: '2019 - 3 months'
  },
  carousel: {
    isBig: false,
    pics: [imgCarousel1, imgCarousel2, imgCarousel3]
  },
  slug: 'orange-hall',
  isOnHome: false,
  serviceId: 'data-storytelling',
  galleryPics: []
}

export default OrangeHall
export { infosOrangeHall }