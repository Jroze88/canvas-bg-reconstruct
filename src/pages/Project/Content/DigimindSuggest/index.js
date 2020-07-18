import React from 'react'
import { useParams } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'

// Images Gallery
import imgGallery1 from '././assets/gallery/suggest-dv_gallery_0001.jpg'
import imgGallery2 from '././assets/gallery/suggest-dv_gallery_0002.jpg'
import imgGallery3 from '././assets/gallery/suggest-dv_gallery_0003.jpg'

// images body
import imgBody1 from '././assets/body/suggest-dv_img_0001.jpg'
import imgBody2 from '././assets/body/suggest-dv_img_0002.jpg'
import imgBody3 from '././assets/body/suggest-dv_img_0003.jpg'
import imgBody4 from '././assets/body/suggest-dv_img_0004.jpg'

// images carousel
import imgCarousel1 from '././assets/carousel/suggestdv_img_carousel_0001.jpg'
import imgCarousel2 from '././assets/carousel/suggestdv_img_carousel_0002.jpg'
import imgCarousel3 from '././assets/carousel/suggestdv_img_carousel_0003.jpg'
import imgCarousel4 from '././assets/carousel/suggestdv_img_carousel_0004.jpg'

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

const DigimindSuggest = () => {
  const { lang } = useParams()
  const isFr = lang === LANG.FR.SLUG
  return (
    <>
      <Section>
        <Chapo>
          {
            isFr
              ? 'Nous avons aidé un éditeur de logiciels d’e-réputation à améliorer l’expérience utilisateurs de ses outils. Nous avons conçu pour lui de nouvelles interfaces permettant de suivre aisément la visibilité d’une marque dans les résultats de Google, et de comparer son positionnement avec celui d’autres marques.'
              : 'We helped an online reputation software provider improve the user experience of their tools. We designed new interfaces to make it easier to track a brand\'s visibility in Google results, and to also compare that brand’s position relative to other brands.'
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
              ? 'Notre client avait des technologies puissantes pour collecter et qualifier des données d’e-réputation, mais ses interfaces de restitution étaient peu appréciées, mal utilisées et amenaient les clients à se détourner de sa solution.  Nous avons été sollicités pour repenser le design de ces interfaces afin qu\'elles mettent mieux en valeur la qualité des analyses tirées des données.'
              : 'Our client was using powerful technologies to collect and qualify online reputation data, but their interfaces were poorly used and off-putting for customers. We were asked to rethink the design of these interfaces so that they better enhanced the quality of the analyses drawn from the data.'
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
                ? 'Nous faisons émerger les tendances les plus significatives dans la masse de données\u00A0: les fortes hausses ou fortes baisses dans les recherches Google.'
                : 'We bring out the most significant trends from the dataset: the sharp increases or decreases in Google searches.'
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
              ? 'L\'outil se concentre sur les suggestions automatiques proposées par le moteur de recherche Google au moment de saisir une requête. Ces suggestions correspondent aux recherches les plus fréquentes, et reflètent ainsi les tendances de recherche. Elles sont utiles pour surveiller les associations d’idées des internautes concernant une marque.'
              : 'The tool focuses on the automated suggestions offered by Google when entering a query. These suggestions align with the most frequent searches, and therefore reflect search trends. They are useful for monitoring the associations users make about brands.'
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
                ? 'L\'outil aide à se concentrer sur l\'essentiel, en montrant les suggestions les plus visibles par les utilisateurs et les plus menaçantes pour une marque.'
                : 'The tool helps to focus on the essentials, showing the suggestions that are most visible to users and most threatening to a brand.'
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
              ? 'Des interviews et des tests avec les utilisateurs nous ont aidé à améliorer l’ergonomie de l’interface, et à la simplifier au maximum pour des utilisateurs qui ont moins besoin d’analyses sophistiquées que d’être alertés lorsque les données révèlent un risque pour leur marque.'
              : 'Interviews and tests with users helped us to improve the usability of the interface, as well as to simplify it for users who would benefit from a warning—rather than sophisticated analysis—when the data reveals a risk to their brand.'
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
                ? 'L\'outil aide à se comparer avec ses concurrents, grâce à un vocabulaire visuel simple, qui explicite comment les données sont collectées et traitées.'
                : 'The tool helps make comparisons with competitors thanks to a simple visual vocabulary that explains how the data is collected and processed.'
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
              ? 'Nous avons particulièrement travaillé sur les fonctionnalités qui aident une marque à suivre dans le temps son positionnement, et à anticiper les tendances à venir. Nous avons choisi des graphiques simples, centrés sur les positions dans le temps plus que la lecture de valeurs précises. Nous facilitons aussi la comparaison d’une marque avec ses concurrents pour l’aider à mettre en contexte ses résultats.'
              : 'We focused in particular on the functionalities that help a brand to follow its positioning over time, and to anticipate future trends. We therefore chose simple graphs, centered on positions over time rather than precise values. Our solution also helps a brand to draw comparisons with competitors in order to put results into context.'
          }
        </Paragraph1>
      </Section>
      <Section>
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
              ? 'Nous avons créé un vocabulaire propre à l’outil, en favorisant des métaphores liées au corps humain.'
              : 'We created a vocabulary specific to the tool, favoring human body metaphors.'
          }
        </Paragraph1>
      </Section>
      <Section>
        <LongVideo uri='428090155' />
      </Section>
    </>
  )
}

const infosDigimindSuggest = {
  component: DigimindSuggest,
  client: {
    fr: 'Confidentiel',
    en: 'Confidential'
  },
  label: {
    fr: 'Suggest',
    en: 'Suggest'
  },
  theme: {
    isDark: true,
    background: '#2C313B'
  },
  video: '427804937',
  results: {
    fr: 'Lancement d’un nouveau produit d’e-réputation.',
    en: 'Launch of a new online reputation product.'
  },
  chapo: {
    fr: 'Repenser le design d’un outil de suivi d’e-réputation pour le rendre plus facile à lire et à utiliser.',
    en: 'Rethink the design of an online reputation management tool to make it easier to read and use.'
  },
  category: {
    fr: 'Outil',
    en: 'Tool'
  },
  date: {
    fr: '2013 - 3 mois',
    en: '2013 - 3 months'
  },
  carousel: {
    isBig: false,
    pics: [imgCarousel1, imgCarousel2, imgCarousel3, imgCarousel4]
  },
  slug: 'suggest',
  isOnHome: false,
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

export default DigimindSuggest
export { infosDigimindSuggest }
