import React from 'react'
import { useParams } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'

// Images Gallery
import imgGallery1 from '././assets/gallery/bloom_gallery_0001.jpg'
import imgGallery2 from '././assets/gallery/bloom_gallery_0002.jpg'
import imgGallery3 from '././assets/gallery/bloom_gallery_0003.jpg'

// images body
import imgBody1 from '././assets/body/bloom_img_0001.jpg'
import imgBody2 from '././assets/body/bloom_img_0002.jpg'
import imgBody3 from '././assets/body/bloom_img_0003.jpg'

// images carousel
import imgCarousel1 from '././assets/carousel/bloom_img_carousel_0001.jpg'
import imgCarousel2 from '././assets/carousel/bloom_img_carousel_0002.jpg'
import imgCarousel3 from '././assets/carousel/bloom_img_carousel_0003.jpg'

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

const BloomOutilSaas = () => {
  const { lang } = useParams()
  const isFr = lang === LANG.FR.SLUG
  return (
    <>
      <Section>
        <Chapo>
          {
            isFr
              ? 'Avec ce projet, nous avons rendu les utilisateurs de l’outil Bloom capables de réaliser en autonomie des analyses puissantes des conversations sur les réseaux sociaux. Pour cela, nous avons conçu une interface de visualisation de graphes relationnels qui montre les principales dynamiques des conversations –\u00A0mots clés saillants, acteurs influents\u00A0– tout en autorisant une grande liberté d\'exploration grâce aux filtres et à l\'interactivité.'
              : 'With this project, we have made it possible for users of the Bloom tool to perform their own powerful and independent analyses of conversations on social networks. To do this, we designed a visualization interface for social graphs which shows the main dynamics of conversations—such as salient keywords and key participants—while allowing freedom of exploration thanks to filters and interactivity.'
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
              ? 'Bloom édite une plateforme d\'analyse profonde des échanges sur les réseaux sociaux par inférence sociale et sémantique. Son produit repose sur des algorithmes de traitement de données sophistiqués, mais s\'adresse à des utilisateurs non experts, qui ont besoin d\'être aidés dans la compréhension et l\'utilisation des informations. La réussite du produit de Bloom dépend alors de la qualité de son interface utilisateur. Pour cette raison, Bloom nous a confié la réalisation d\'une interface qui rende ses données compréhensibles et faciles à utiliser.'
              : 'Bloom publishes a platform for deep analysis of conversations on social networks by social and semantic inference. Their product is based on sophisticated data processing algorithms. This means that users, who are not data experts, need help understanding and using the information. The success of Bloom\'s product therefore depends on the quality of its user interface. For this reason, Bloom entrusted us with the creation of an interface that makes the data easier to understand and use.'
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
                ? 'L\'outil permet de visualiser des graphes de mots clés utilisés dans les conversations et des graphes d\'acteurs auteurs de ces conversations.'
                : 'The tool makes it possible to visualize both graphs of key words used in conversations, as well as graphs of the authors of these conversations.'
            }
          </ImgLegend>
        </Section>
      </Section>
      <Section>
        <SectionTitle>
          <FormattedMessage id='project-body-data' />
        </SectionTitle>
        <Paragraph1>
          {
            isFr
              ? 'L\'outil exploite les conversations publiques sur les réseaux sociaux. Ces données sociales sont retraitées et enrichies par les algorithmes de Bloom pour extraire des acteurs clés, des thèmes dominants, des tendances, et des communautés de discussions.'
              : 'The tool is based on public conversations on social media networks. This data is reprocessed and enriched by Bloom\'s algorithms to extract key players, dominant themes, trends, and community discussions.'
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
                ? 'Les graphes mettent à jour des communautés de conversations cohérentes, centrées autour d\'un même thème.'
                : 'The graphs reveal community conversations that revolve around similar topics.'
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
              ? 'Nous avons travaillé main dans la main avec l\'équipe produit et l\'équipe technique de Bloom. En nous appuyant sur des méthodes agiles de gestion projet et une approche du design centrée sur les utilisateurs, nous avons pu réaliser ensemble une première version viable du produit en quatre mois.'
              : 'We worked hand-in-hand with Bloom’s product and technical teams. Using agile project management methods and a user-centric design approach, we worked together to achieve an initial version of the product in four months.'
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
                ? 'L\'interactivité permet d\'explorer le graphe, de le filtrer et de le réorganiser pour l\'adapter aux questionnements de chaque utilisateur.'
                : 'Interactivity allows you to explore the graph, filter it and reorganize it in line with each user’s questions.'
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
              ? 'Nous avons conçu et développé une interface qui résout plusieurs contraintes en combinant ergonomie, visualisation de données et interaction avec les données :\u00A0présenter de l\'information synthétique tout en permettant l\'accès aux détails, faciliter l\'appréhension d\'indicateurs compliqués, rendre utilisables des graphes très riches de relations entre mots-clés ou entre acteurs.'
              : 'We designed and developed an interface that combines usability, data visualization and data interaction to overcome several challenges: the interface must present synthetic data while at the same time allowing access to details. It must also facilitate the understanding of complicated indicators, and make very rich graphs of relationships between keywords or between participants more user-friendly.'
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
              ? 'Au delà des choix de représentation, les éléments qui entourent un graphique -\u00A0titres, légendes, pictogrammes, mise en contexte, etc.\u00A0- jouent beaucoup dans sa compréhension. Nous avons donc beaucoup travaillé sur le vocabulaire et la pédagogie des concepts d\'analyse des conversations sociales pour les rendre accessibles à un public non expert.'
              : 'Beyond the choices of representation, the elements that surround a graphic—such as titles, legends, pictograms, and contextualization—influence a user’s understanding. We therefore worked at length on the vocabulary and pedagogy of the concepts related to the analysis of the social conversations to make them accessible to audiences with little technical experience.'
          }
        </Paragraph1>
      </Section>
      <Section marginBottom='spacingL'>
        <LongVideo uri='428062900' />
      </Section>
    </>
  )
}

const infosBloomOutilSaas = {
  component: BloomOutilSaas,
  client: {
    fr: 'Bloom',
    en: 'Bloom'
  },
  label: {
    fr: 'Visualisation de graphes sociaux',
    en: 'Visualization of social graphs'
  },
  theme: {
    isDark: true,
    background: '#0D1136'
  },
  video: '426967283',
  results: {
    fr: '“Je trouve ça vraiment cool, ça commence à me parler”. “J’ai trouvé l’outil intuitif, simple”\u00A0: citations tirées de tests utilisateurs, suite à notre re-design de l’outil.',
    en: '\'I find it really cool, it\'s starting to speak to me.\'  \'I found the tool intuitive, simple.\' —Quotes from users who tested our redesign of the tool.'
  },
  chapo: {
    fr: 'Faciliter l\'utilisation et la compréhension d\'algorithmes d\'analyse des conversations sur les réseaux sociaux.',
    en: 'Facilitate the use and understanding of algorithms for analyzing conversations on social media.'
  },
  category: {
    fr: 'Outil',
    en: 'Tool'
  },
  date: {
    fr: '2019 & 2020',
    en: '2019 & 2020'
  },
  carousel: {
    isBig: false,
    pics: [imgCarousel1, imgCarousel2, imgCarousel3]
  },
  slug: 'bloom-outil-saas',
  isOnHome: true,
  serviceId: 'product-design',
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

export default BloomOutilSaas
export { infosBloomOutilSaas }
