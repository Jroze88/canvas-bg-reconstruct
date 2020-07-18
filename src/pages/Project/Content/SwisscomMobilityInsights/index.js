import React from 'react'
import { useParams } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'

// images carousel
import imgCarousel1 from '././assets/carousel/swisscom_img_carousel_0001.jpg'
import imgCarousel2 from '././assets/carousel/swisscom_img_carousel_0002.jpg'
import imgCarousel3 from '././assets/carousel/swisscom_img_carousel_0003.jpg'
import imgCarousel4 from '././assets/carousel/swisscom_img_carousel_0004.jpg'

import {
  Chapo,
  SectionTitle,
  Section,
  ImgLegend
} from '../../../../components/PieceOfWork/Gallery/shared'
import LANG from '../../../../common/wording/lang'
import { Paragraph1 } from '../../../../components/Paragraphs'
import GIFVideo from '../../../../components/PieceOfWork/GIFVideo'
import LongVideo from '../../../../components/PieceOfWork/LongVideo'

const SwisscomMobilityInsights = () => {
  const { lang } = useParams()
  const isFr = lang === LANG.FR.SLUG
  return (
    <>
      <Section>
        <Chapo>
          {
            isFr
              ? 'Nous avons révélé le potentiel des données de Mobility Insights pour aider à prendre de meilleures décisions. Les visualisations de données créées pour ce projet mettent en valeur non seulement la richesse et la qualité des données, mais aussi le respect de la vie privée attaché à leur traitement.'
              : 'We have unveiled the potential of Mobility Insights’ data to help make better decisions. The data visualizations created for this project not only highlight the richness and quality of the data, but also underscore its privacy.'
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
              ? 'L\'opérateur télécom Swisscom édite la plateforme Mobility Insights, une source de données très détaillées sur la mobilité en Suisse. Swisscom souhaitait faire mieux connaître ces données et leur potentiel. Pour cela, leur simple mise à disposition ne suffisait pas\u00A0: Swisscom voulait rendre perceptible et tangible la valeur apportée par ces données, en l\'illustrant par des cas d\'usage.'
              : 'Telecom operator Swisscom is the publisher of the Mobility Insights platform, a source of highly detailed data on mobility in Switzerland. Swisscom wanted to raise awareness about this data and its potential. To achieve this, making the data available wasn’t enough: Swisscom wanted to make the value of this data more evident and tangible, by showing exciting use cases.'
          }
        </Paragraph1>
      </Section>
      <Section>
        <GIFVideo uri='429915452' />
        <ImgLegend>
          {
            isFr
              ? 'Visualisation de l\'affluence selon les différents mode de transport.'
              : 'Visualization of traffic flow for various modes of transport.'
          }
        </ImgLegend>
      </Section>
      <Section>
        <SectionTitle>
          <FormattedMessage id='project-body-data' />
        </SectionTitle>
        <Paragraph1>
          {
            isFr
              ? 'Les données de la plateforme Mobility Insights sont collectées à partir des informations du réseau de téléphones mobiles de Swisscom. Elles sont ensuite agrégées et anonymisées pour garantir le respect de la vie privée.'
              : 'The Mobility Insights platform’s data is collected using information from the Swisscom mobile phone network. This data is then aggregated and anonymized to guarantee privacy.'
          }
        </Paragraph1>
      </Section>
      <Section>
        <GIFVideo uri='429915476' />
      </Section>
      <Section>
        <SectionTitle>
          <FormattedMessage id='project-body-method' />
        </SectionTitle>
        <Paragraph1>
          {
            isFr
              ? 'Nous avons privilégié le prototypage rapide. Une première phase d\'exploration des données et de discussion avec Swisscom nous a permis d\'identifier des cas d\'usage prometteurs. Puis nous avons mis en scène chaque cas d\'usage à travers un mode de visualisation des données propice à raconter une histoire. Nous avons travaillé de façon agile, en affinant semaine après semaine les visualisations produites.'
              : 'We have opted for rapid prototyping. An initial phase of data exploration and discussion with Swisscom helped us identify interesting use cases. Each use case was embodied by a data visualization mode with compelling storytelling. We worked in an agile way, refining our visualizations week after week.'
          }
        </Paragraph1>
      </Section>
      <Section>
        <GIFVideo uri='429915490' />
        <ImgLegend>
          {
            isFr
              ? 'Visualisation de la densité de population à Zurich.'
              : 'Visualization of the population density in Zurich.'
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
              ? 'Nous avons travaillé avec des exports de données très volumineux du début à la fin du projet. Grâce à cela, nous avons conçu des modes de visualisation adaptés au grand volume des données et à leurs particularités. Nous avons développé des prototypes web pour chacun de ces modes de visualisation. Enfin, nous avons automatisé un export vidéo de ces visualisations pour répondre aux besoins de communication du projet.'
              : 'We worked with massive data exports from start to finish. This allowed us to design visualization modes that were ideally suited for such a large volume of data and their specificities. We developed web prototypes for each of these visualization modes. Finally, we automated a video export of these visualizations to meet the project’s communication requirements.'
          }
        </Paragraph1>
      </Section>
      <Section>
        <GIFVideo uri='429915513' />
        <ImgLegend>
          {
            isFr
              ? 'Visualisation des flux de population lors du Montreux Jazz Festival.'
              : 'Visualization of population flows during the Montreux Jazz Festival.'
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
              ? 'Chaque mode de visualisation a été conçu et développé spécifiquement pour répondre à une interrogation d\'un métier précis\u00A0: urbaniste, investisseur, logisticien, transporteur, etc. Au delà des usages métiers, ces visualisations permettent aussi de rassurer sur le respect de la vie privée car elles montrent comment les données sont agrégées avant d\'être analysées.'
              : 'Each visualization mode has been designed and developed to answer one question about a specific trade: urban planner, investor, logistician, carrier, etc. Beyond their business applications, these visualizations also help reassure people on the subject of privacy, as they reveal how the data is aggregated before being processed.'
          }
        </Paragraph1>
      </Section>
      <Section marginBottom='spacingXL'>
        <LongVideo uri='428085646' />
      </Section>
    </>
  )
}

const infosSwisscomMobilityInsights = {
  component: SwisscomMobilityInsights,
  client: {
    fr: 'Swisscom Mobility Insights',
    en: 'Swisscom Mobility Insights'
  },
  label: {
    fr: 'Comment la Suisse se déplace\u00A0?',
    en: 'How Switzerland moves'
  },
  theme: {
    isDark: true,
    background: '#010B46'
  },
  video: '427641215',
  results: {
    fr: 'La visualisation est au coeur du site vitrine Mobility Insights.',
    en: 'The visualization is at the heart of the Mobility Insights showcase website.'
  },
  chapo: {
    fr: 'Rendre perceptible la valeur des données de télécommunication pour mieux comprendre les déplacements de population.',
    en: 'Conveying the value of Swisscom’s mobility data to better understand urban mobility.'
  },
  category: {
    fr: 'Prototype',
    en: 'Prototype'
  },
  date: {
    fr: '2019 - 4 mois',
    en: '2019 - 4 months'
  },
  src: {
    url: 'https://www.swisscom.ch/fr/business/enterprise/offre/enterprise-mobile/mobility-insights.html',
    label: 'https://www.swisscom.ch/fr/busin...'
  },
  carousel: {
    isBig: false,
    pics: [imgCarousel1, imgCarousel2, imgCarousel3, imgCarousel4]
  },
  slug: 'swisscom-mobility-insights',
  isOnHome: false,
  serviceId: 'data-driven-strategy',
  galleryPics: []
}

export default SwisscomMobilityInsights
export { infosSwisscomMobilityInsights }
