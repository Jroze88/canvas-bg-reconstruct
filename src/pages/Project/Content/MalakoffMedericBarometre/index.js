import React from 'react'
import { useParams } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'

import LongVideo from '../../../../components/PieceOfWork/LongVideo'
import GIFVideo from '../../../../components/PieceOfWork/GIFVideo'

// images carousel
import imgCarousel1 from '././assets/carousel/malakoff_img_carousel_0001.jpg'
import imgCarousel2 from '././assets/carousel/malakoff_img_carousel_0002.jpg'
import imgCarousel3 from '././assets/carousel/malakoff_img_carousel_0003.jpg'

import {
  Chapo,
  SectionTitle,
  ImgLegend,
  Section
} from '../../../../components/PieceOfWork/Gallery/shared'
import LANG from '../../../../common/wording/lang'
import { Paragraph1 } from '../../../../components/Paragraphs'

const MalakoffMedericBarometre = () => {
  const { lang } = useParams()
  const isFr = lang === LANG.FR.SLUG
  return (
    <>
      <Section>
        <Chapo>
          {
            isFr
              ? 'Nous avons aidé Malakoff Humanis à partager ses données d\'une façon qui encourage leur réutilisation. Nous avons rendus comparables les résultats de dix ans d\'enquêtes sur les conditions de vie au travail, et mis au point une méthode pour permettre l\'ajout de nouvelles enquêtes chaque année. Surtout, nous avons construit une plateforme qui permet d\'explorer les données, tout en les plaçant en contexte de grands enseignements sociologiques.'
              : 'We devised a way for Malakoff Humanis to share their data in a way that encourages its reuse. We did this by making it easy to compare the results of 10 annual surveys on working conditions, while also providing a way for new surveys to be added each year. Most importantly, the project allows the general public to place and explore data in a broader sociological context.'
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
              ? 'Tous les ans Malakoff Humanis réalise des enquêtes sur les conditions de vie au travail. Publier un communiqué de presse ne suffisait plus :\u00A0Malakoff Humanis recevait de plus en plus de demandes d’accès aux données. Pour marquer les dix ans de son baromètre, Malakoff Humanis nous a confié la réalisation d\'une plateforme de mise à disposition des données des enquêtes, et de partage de leurs principaux enseignements.'
              : 'Malakoff Humanis conducts annual surveys on working conditions. More and more, they were being asked for access to their data. To mark the 10th anniversary of their working life barometer, Malakoff Humanis entrusted us with the creation of a platform to provide and share key findings from the surveys.'
          }
        </Paragraph1>
      </Section>
      <Section>
        <GIFVideo uri='429913437' />
        <ImgLegend>
          {
            isFr
              ? 'Les choix de visualisations mettent en valeur les évolutions, depuis dix ans, des conditions de vie au travail.'
              : 'The choices of visualizations highlight the changes to working conditions over the past 10 years.'
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
              ? 'Les enquêtes sont chaque année portées par un institut d\'étude et d\'opinion. Nous avons travaillé avec les données sources de chacune de ces enquêtes depuis dix ans.'
              : 'A market research group has conducted the surveys for Malakoff Humanis each year for 10 years. We worked with the source data for each of these surveys.'
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
              ? 'Nous avons homogénéisé les questions des enquêtes pour rendre les résultats comparables au fil du temps, et nous avons proposé une grille de métadonnées pour que la plateforme puisse accueillir de nouvelles enquêtes dans les années à venir,  sans notre intervention. Nous avons construit l\'architecture d\'information de toute la plateforme sur ce référentiel\u00A0: les pages sont automatiquement générées à partir des résultats d\'enquête insérés dans la base de données.'
              : 'Firstly, we standardized the survey questions to enable the results to be compared over time. We then developed a metadata grid to ensure future survey results can be fed directly into the system and explored by the public without further technical intervention. The platform\'s architecture provides templates that are used to automatically create pages from survey results as they are inserted into the database.'
          }
        </Paragraph1>
      </Section>
      <Section>
        <GIFVideo uri='429913403' />
        <ImgLegend>
          {
            isFr
              ? 'Les visualisations permettent de comparer les conditions de vie au travail de plusieurs segments de population, selon l\'âge, le type de métier, la taille de l\'entreprise, etc.'
              : 'The visualizations make it possible to compare the conditions at work across several segments of the population in line with age, profession, company size, etc.'
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
              ? 'En plus de mettre à disposition les données brutes, la plateforme propose un outil d’exploration visuel, conçu pour mettre tous les publics en capacité de s’approprier les données. Les visualisations de données facilitent la comparaison des résultats dans le temps, selon différents profils de populations et d\'entreprises. Elles révèlent leurs atouts pour comprendre comment nos conditions de vie au travail ont évolué en dix ans.'
              : 'In addition to making raw data available, the platform offers a visual exploration tool that\'s designed to allow audiences to engage with the data. Data visualizations make it easier to compare results over time in line with different populations or company profiles. The data and the way it’s presented aid our understanding of how work-life conditions have evolved over the 10 years.'
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
              ? 'Plusieurs pages sont dédiées au storytelling des données\u00A0: les principaux enseignements des enquêtes sont mis en scène à travers des illustrations animées. Elle renforcent la visibilité et l\'attractivité de la plateforme pour le grand public et les médias. Elles sont conçues pour faire circuler les visiteurs vers les pages consacrées à la mise à disposition des données, et servent à mettre en contexte ces données.'
              : 'Several pages are dedicated to storytelling data: the key lessons taken from the surveys are presented through animated illustrations. They enhance the visibility and attractiveness of the platform for both the general public and the media. The animations are designed to help visitors find relevant data and to place it in context.'
          }
        </Paragraph1>
      </Section>
      <Section marginBottom='spacingXL'>
        <LongVideo uri='428062710' />
      </Section>
    </>
  )
}

const infosMalakoffMedericBarometre = {
  component: MalakoffMedericBarometre,
  client: {
    fr: 'Malakoff Humanis',
    en: 'Malakoff Humanis'
  },
  label: {
    fr: 'Baromètre de la qualité de vie au travail',
    en: 'Measuring quality of life at work'
  },
  theme: {
    isDark: true,
    background: '#0A103C'
  },
  video: '427637944',
  results: {
    fr: 'Les visiteurs consultent en moyenne 5 pages par session.',
    en: 'Site visitors view an average of 5 pages per session.'
  },
  src: {
    url: 'http://10ans-barometre-sante-qualite-vie-travail.lecomptoirmm.com/',
    label: '10ans-barometre-sante-qualite-vie-travail.lecomptoirmm.com'
  },
  chapo: {
    fr: 'Favoriser le partage et la réutilisation des données via une plateforme open data grand public.',
    en: 'Foster the sharing and reuse of data via an open data platform for the general public.'
  },
  quote: {
    fr: 'Avec un accompagnement d\'un grand professionnalisme et leur double expertise en communication et sur le travail de la donnée, Dataveyes nous a permis de renforcer notre proposition de valeur sur le décryptage des enjeux du capital humain.',
    en: 'With their professionalism and combined expertise in communication and data processing, Dataveyes has enabled us to strengthen our value proposition in terms of bettering understanding human capital.',
    author: {
      name: 'Marc Fargeas',
      position: {
        fr: 'Responsable Veille, Prospective, Études Stratégiques - Malakoff Humanis',
        en: 'Monitoring, Prospective, Strategic Studies Manager, Malakoff Humanis'
      }
    }
  },
  category: {
    fr: 'Plateforme opendata',
    en: 'Opendata platform'
  },
  date: {
    fr: '2018 - 4 mois',
    en: '2018 - 4 months'
  },
  carousel: {
    isBig: false,
    pics: [imgCarousel2, imgCarousel3, imgCarousel1]
  },
  slug: 'malakoff-mederic-barometre-sante-travail',
  isOnHome: false,
  serviceId: 'data-storytelling',
  galleryPics: []
}

export default MalakoffMedericBarometre
export { infosMalakoffMedericBarometre }
