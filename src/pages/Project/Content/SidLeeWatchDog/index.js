import React from 'react'
import { useParams } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'

// images body
import imgBody1 from '././assets/body/watch-dog_img_0001.jpg'
import imgBody2 from '././assets/body/watch-dog_img_0002.jpg'
import imgBody3 from '././assets/body/watch-dog_img_0003.jpg'

// images carousel
import imgCarousel1 from '././assets/carousel/watchdogs_img_carousel_0001.jpg'
import imgCarousel2 from '././assets/carousel/watchdogs_img_carousel_0002.jpg'
import imgCarousel3 from '././assets/carousel/watchdogs_img_carousel_0003.jpg'

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
import GIFVideo from '../../../../components/PieceOfWork/GIFVideo'

const SidLeeWatchDog = () => {
  const { lang } = useParams()
  const isFr = lang === LANG.FR.SLUG
  return (
    <>
      <Section>
        <Chapo>
          {
            isFr
              ? 'Pendant l’été 2016, nous avons été consultés par l’agence Sid Lee pour faire mûrir l’expérience interactive Predictive World, destinée à accompagner la sortie du jeu vidéo Watch Dogs 2. Au coeur d’une production de grande ampleur, nous avons apporté ce qu’aucun autre acteur du projet ne pouvait fournir\u00A0: notre expérience des interactions humain-données.'
              : 'During the summer of 2016, the Sid Lee agency asked us to bring to fruition their interactive Predictive World data experience intended to accompany the release of the Watch Dogs 2 video game. We brought what no other player could have brought to the heart of this large-scale project: our experience of human-data interactions.'
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
              ? 'En charge du lancement du jeu vidéo Watch Dogs 2, l’agence Sid Lee-Paris a façonné pendant l’été 2016 le projet Predictive World\u00A0: une application ludique destinée à montrer que des informations personnelles à premières vues anodines en disent long sur notre vie actuelle… et à venir. Pour cela, l\'utilisateur devait pouvoir consulter cinquante indicateurs traçant son profil et se faire une idée des facteurs influençant le plus sa condition physique, morale, sociale, économique. Face à ce défi, Sid Lee-Paris a sollicité notre aide pour concevoir une expérience d\'information intégrant en son coeur des données volumineuses.'
              : 'Sid Lee-Paris, which was in charge of launching the Watch Dogs 2 video game during the summer of 2016, devised the Predictive World project: a fun application intended to show that seemingly innocuous personal information can say a lot about our lives—and the future. To achieve this, the application needed to present users with 50 indicators that traced their profile in order to identify the factors that most influenced their physical, moral, social, and economic condition. Sid Lee-Paris asked for our help in designing an information experience with big data at its heart.'
          }
        </Paragraph1>
      </Section>
      <Section>
        <GIFVideo uri='429912816' />
      </Section>
      <Section>
        <SectionTitle>
          <FormattedMessage id='project-body-data' />
        </SectionTitle>
        <Paragraph1>
          {
            isFr
              ? 'Au lancement de Predictive World, l’utilisateur répond à quelques questions simples, ou se connecte via Facebook, puis découvre son profil, tel que calculé par “l’intelligence artificielle” de Predictive World\u00A0: salaire, espérance de vie, probabilité de se marier, potentiel entrepreneurial, performance aux travail, stabilité émotionnelle, etc. Plus de cinquante indications sur sa psychologie, son mode de vie ou son travail lui sont dévoilées, à partir de l’analyse de son empreinte numérique.'
              : 'When they launch Predictive World, the user answers a few simple questions (or connects via Facebook) before discovering a profile that’s calculated by the app’s ‘artificial intelligence’: salary, life expectancy, the probability of getting married, entrepreneurial potential, work performance, emotional stability, etc. More than 50 personal factors relating to their psychology, lifestyle or work are then revealed as a result of an analysis of their digital footprint.'
          }
        </Paragraph1>
      </Section>
      <Section>
        <SectionImage>
          <Img src={imgBody3} />
        </SectionImage>
        <Section>
          <ImgLegend>
            {
              isFr
                ? 'Nous avons proposé des modes de visualisation qui explicitent le fonctionnement des algorithmes.'
                : 'We proposed visualization modes that explain how algorithms work.'
            }
          </ImgLegend>
        </Section>
      </Section>
      <Section>
        <SectionTitle>
          <FormattedMessage id='project-body-method' />
        </SectionTitle>
        <Paragraph1>
          {
            isFr
              ? 'Nous sommes intervenus en parallèle du travail de l’équipe de Sid Lee-Paris. En quelques jours, nous avons étudié les données, proposé des scénarios de storytelling des données, mis en valeur des points clés de l\'expérience utilisateur, sketché, prototypé et beaucoup échangé avec le reste de l\'équipe.'
              : 'We worked alongside the Sid Lee-Paris team. Over the course of a few days, we studied the data and proposed scenarios for storytelling the data, highlighted key points in the user experience, sketched, prototyped and talked at length with the rest of the team.'
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
                ? 'Nous avons retravaillé et harmonisé les indicateurs pour faciliter leur lecture visuelle.'
                : 'We reworked and harmonized the indicators to facilitate their visual reading.'
            }
          </ImgLegend>
        </Section>
      </Section>
      <Section>
        <SectionTitle>
          <FormattedMessage id='project-body-solution' />
        </SectionTitle>
        <Paragraph1>
          {
            isFr
              ? 'Nous avons articulé une démarche très esthétique avec les contraintes de réalisme imposées par les données. Pour cela nous avons cherché à raconter une histoire avec les données, sans renoncer à les faire comprendre aux utilisateurs de l\'application. Nous avons mobilisé des concepts visuels pour traduire les données, mais nous avons aussi introduit plus de pédagogie et d\'accompagnement des utilisateurs dans l\'expérience.'
              : 'We articulated a highly aesthetic approach within the real-life constraints imposed by the data. We sought to tell a story with the data, while also making the data itself understood by the user. We mobilized visual concepts to translate the data, as well as introducing more pedagogy and user support into the experience.'
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
                ? 'Nous avons introduit une meilleure architecture d\'information\u00A0: les cinquante indicateurs sont organisés selon leurs temporalités et leurs thématiques.'
                : 'We introduced an enhanced information architecture: the 50 factors are organized according to their time periods and their themes.'
            }
          </ImgLegend>
        </Section>
      </Section>
      <Section marginBottom='spacingXL'>
        <SectionTitle>
          <FormattedMessage id='project-body-main-point' />
        </SectionTitle>
        <Paragraph1>
          {
            isFr
              ? 'Pour que l\'affichage des cinquante indicateurs ne soit pas rébarbatif, nous avons renforcé l\'interactivité. Elle invite les utilisateurs à jouer avec l\'interface, au delà de la seule consultation d\'information.'
              : 'We enhanced interactivity to ensure the display of the 50 personal factors was not off-putting. The app invites users to engage with the interface—not just consult it for information.'
          }
        </Paragraph1>
      </Section>
    </>
  )
}

const infosSidLeeWatchDog = {
  component: SidLeeWatchDog,
  client: {
    fr: 'Sid Lee Paris',
    en: 'Sid Lee Paris'
  },
  label: {
    fr: 'Predictive World - Visualisation de données',
    en: 'Predictive World - Data visualization'
  },
  theme: {
    isDark: true,
    background: '#251F2E'
  },
  video: '427808862',
  chapo: {
    fr: 'Imaginer des concepts de visualisation qui soient à la fois esthétiques, parlants, et cohérents avec les données.',
    en: 'Imagine visualization concepts that are aesthetic and meaningful, as well as consistent with the data.'
  },
  category: {
    fr: 'Prototype',
    en: 'Prototype'
  },
  date: {
    fr: '2016 - 0,5 mois',
    en: '2016 - 0.5 month'
  },
  carousel: {
    isBig: false,
    pics: [imgCarousel1, imgCarousel2, imgCarousel3]
  },
  slug: 'sid-lee-watchdog-2',
  isOnHome: false,
  serviceId: 'prototyping',
  galleryPics: []
}

export default SidLeeWatchDog
export { infosSidLeeWatchDog }
