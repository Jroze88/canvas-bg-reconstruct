import React from 'react'
import { useParams } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'

import LongVideo from '../../../../components/PieceOfWork/LongVideo'

// images body
import imgBody1 from '././assets/body/carrefour_img_0001.jpg'
import imgBody2 from '././assets/body/carrefour_img_0002.jpg'
import imgBody3 from '././assets/body/carrefour_img_0003.jpg'
import imgBody4 from '././assets/body/carrefour_img_0004.jpg'

// images carousel
import imgCarousel1 from '././assets/carousel/carrefour_img_carousel_0001.jpg'
import imgCarousel2 from '././assets/carousel/carrefour_img_carousel_0002.jpg'
import imgCarousel3 from '././assets/carousel/carrefour_img_carousel_0003.jpg'
import imgCarousel4 from '././assets/carousel/carrefour_img_carousel_0004.jpg'

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

const CarrefourCartoConso = () => {
  const { lang } = useParams()
  const isFr = lang === LANG.FR.SLUG
  return (
    <>
      <Section>
        <Chapo>
          {
            isFr
              ? 'Nous avons réalisé une application de storytelling des données pour montrer l\'importance des nouvelles sources de données sociales aux directeurs des magasins du groupe Carrefour. En croisant les données de consommation, les données Google Trends, et des données décrivant les tendances sur Twitter, nous avons produit de nouveaux enseignements sur l\'ancrage local des produits du terroir.'
              : 'We created a data storytelling application for the Carrefour group’s store managers to highlight the importance of using social data. By combining consumer data, Google Trends data and data based on Twitter trends, we produced new insights into the anchoring of local products.'
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
              ? 'Pour encourager ses directeurs de magasin à de plus riches usages des données, l\'équipe Data de Carrefour souhaitait produire une application éclairante de visualisation de données. Son premier enjeu\u00A0: faire la preuve que de l\'information métier nouvelle peut naître de l\'analyse des données sociales.'
              : 'The Carrefour Data team wanted to produce an enlightening data visualization application to encourage store managers to make better use of data. The first challenge: to prove that new business information can be gleaned from the analysis of social media data.'
          }
        </Paragraph1>
      </Section>
      <Section>
        <SectionImage>
          <Img hasBorder src={imgBody2} />
        </SectionImage>
        <Section>
          <ImgLegend>
            {
              isFr
                ? 'L\'application aide les utilisateurs à comparer les dynamiques locales d\'une sélection de produits du terroir.'
                : 'The application helps users compare the local dynamics of a selection of local products.'
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
              ? 'Trois sources de données ont été mobilisées. D\'une part les données de consommation en magasin d\'une sélection de produits du terroir. D\'autre part, des données Google Trends décrivant les volumes de recherche sur Google de ces mêmes produits. Enfin, des volumes de mentions sur les réseaux sociaux Twitter et Instagram de ces produits du terroir.'
              : 'Three sources of data were used. Firstly, we collected consumer data from a selection of local products sold in-store. Secondly, we compiled Google Trends data that described the search volumes for these products online. We then collated data relating to the number of Twitter and Instagram mentions for these local products.'
          }
        </Paragraph1>
      </Section>
      <Section>
        <SectionImage>
          <Img hasBorder src={imgBody3} />
        </SectionImage>
        <Section>
          <ImgLegend>
            {
              isFr
                ? 'Nous utilisons des visualisations small multiples pour raconter des histoires avec les données.'
                : 'We used visualizations called ‘small multiples’ to tell stories with the data.'
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
              ? 'Dans une première phase de recherche nous avons identifié le potentiel de ces données pour produire de nouvelles connaissances. Dans une seconde phase, nous avons conçu les modes de visualisations adaptés à la restitution de ces connaissances. Enfin, nous avons développé, testé et déployé ces modes de visualisation au sein d\'une application web dynamique.'
              : 'In a first phase of research we identified the potential of this data to generate new knowledge and insights about the products. In a second phase, we designed visualization methods to present these insights. Finally, we developed, tested and deployed these visualization methods within a dynamic web application.'
          }
        </Paragraph1>
      </Section>
      <Section>
        <SectionImage>
          <Img hasBorder src={imgBody1} />
        </SectionImage>
        <Section>
          <ImgLegend>
            {
              isFr
                ? 'Les courbes mettent en lumière des coïncidences ou des décalage entre le moment où certains produits sont recherchés sur Google et le moment où il sont achetés en magasin.'
                : 'The curves highlight coincidences or discrepancies related to the time a product is searched on Google and the moment it is bought in-store.'
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
              ? 'L\'application propose deux niveaux de lecture. Le premier met en scène les enseignements clés tirés des données. Le second laisse aux utilisateurs une grande liberté d\'exploration des données à travers différentes dimensions\u00A0: produits, géographie, mode de consommation, etc.'
              : 'The application offers two reading levels. The first presents the key insights learned from the data. The second gives users greater freedom to explore data through different avenues, such as by focusing on a product, geography or the way a product is consumed.'
          }
        </Paragraph1>
      </Section>
      <Section>
        <SectionImage>
          <Img hasBorder src={imgBody4} />
        </SectionImage>
      </Section>
      <Section>
        <SectionTitle>
          <FormattedMessage id='project-body-main-point' />
        </SectionTitle>
        <Paragraph1>
          {
            isFr
              ? 'L\'application propose deux niveaux de lecture. Le premier met en scène les enseignements clés tirés des données. Le second laisse aux utilisateurs une grande liberté d\'exploration des données à travers différentes dimensions : produits, géographie, mode de consommation, etc.'
              : 'The application offers two reading levels. The first presents the key insights learned from the data. The second gives users greater freedom to explore data through different avenues, such as by focusing on a product, geography or the way a product is consumed.'
          }
        </Paragraph1>
      </Section>
      <Section marginBottom='spacingXL'>
        <LongVideo uri='428062158' />
      </Section>
    </>
  )
}

const infosCarrefourCartoConso = {
  component: CarrefourCartoConso,
  client: {
    fr: 'Carrefour',
    en: 'Carrefour'
  },
  label: {
    fr: 'Cartographie de la consommation',
    en: 'Mapping consumer data'
  },
  theme: {
    isDark: true,
    background: '#0B2E6B'
  },
  video: '426971022',
  chapo: {
    fr: 'Sensibiliser les équipes internes à l\'importance de l\'analyse des données.',
    en: 'Make internal teams aware of the importance of data analysis.'
  },
  category: {
    fr: 'Application',
    en: 'Application'
  },
  date: {
    fr: '2017 - 4 mois',
    en: '2017 - 4 months'
  },
  carousel: {
    isBig: false,
    pics: [imgCarousel2, imgCarousel3, imgCarousel4, imgCarousel1]
  },
  slug: 'carrefour-carto-conso',
  isOnHome: false,
  serviceId: 'data-driven-strategy',
  galleryPics: []
}

export default CarrefourCartoConso
export { infosCarrefourCartoConso }
