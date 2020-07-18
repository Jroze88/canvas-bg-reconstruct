import React from 'react'
import { useParams } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'

// images body
import imgBody1 from '././assets/body/saint-gobain_img_0001.jpg'
import imgBody2 from '././assets/body/saint-gobain_img_0002.jpg'
import imgBody3 from '././assets/body/saint-gobain_img_0003.jpg'

// images carousel
import imgCarousel1 from '././assets/carousel/saintgobain_img_carousel_0001.jpg'
import imgCarousel2 from '././assets/carousel/saintgobain_img_carousel_0002.jpg'
import imgCarousel3 from '././assets/carousel/saintgobain_img_carousel_0003.jpg'

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

const SaintGobainAnalyzer = () => {
  const { lang } = useParams()
  const isFr = lang === LANG.FR.SLUG
  return (
    <>
      <Section>
        <Chapo>
          {
            isFr
              ? 'Saint-Gobain Research Paris nous a confié la réalisation d’un prototype mettant en avant le confort thermique procuré par ses isolations de toiture, dont il cherchait alors à améliorer la notoriété. Nous avons allié notre savoir-faire en design d’interactions avec nos compétences en 3D et en algorithmique, pour livrer une application de visualisation de données utile, éclairante et novatrice.'
              : 'Saint-Gobain Research Paris entrusted us with the creation of a prototype highlighting the thermal comfort provided by its roof insulation. It was part of an initiative to improve brand awareness for the product. We combined our know-how in interaction design with our 3D and algorithmic skills to deliver a useful, enlightening and innovative data visualization application.'
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
              ? 'Le confort thermique est une notion difficile à visualiser, car multifactorielle et subjective. Cette sensation dépend de la température ressentie, du vent, de l’orientation, et même de la physiologie et psychologie des personnes. Saint-Gobain nous a mis au défi de trouver une représentation visuelle novatrice et convaincante du confort thermique, capable de restituer ces nombreux paramètres.'
              : 'Thermal comfort is a difficult concept to visualize because it is multifactorial and subjective. It is ordinarily a feeling that depends on the temperature felt, the wind, the orientation, and even the physiology and psychology of the individual. Saint-Gobain challenged us to find an innovative and convincing visual representation of thermal comfort that was capable of conveying these parameters.'
          }
        </Paragraph1>
      </Section>
      <Section>
        <SectionTitle>
          <FormattedMessage id='project-body-data' />
        </SectionTitle>
        <Paragraph1>
          {
            isFr
              ? 'Saint-Gobain Research Paris nous a fourni des données de simulation pour une maison d’habitat social au Brésil, où Saint-Gobain commercialise des matériaux isolants. Chacune des quatre pièces de la maison était découpée en 125\u00A0petits volumes, chacun associé à des températures ressenties. Des paramètres extérieurs complétaient ces données : date, heure, température extérieure, orientation de la maison, matériaux isolants, etc.'
              : 'Saint-Gobain Research Paris provided us with simulation data for a social housing property in Brazil, where the company markets insulating materials. Each of the four rooms in the house was cut into 125\u00A0small volumes, each associated with perceived temperatures. External parameters then supplemented this data: date, time, external temperature, orientation of the house, insulating materials, etc.'
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
              ? 'La visualisation de données thermiques est un champ de recherche avec une littérature fournie. Dans nos premiers tests de visualisations, nous cherchions des solutions  radicalement originales, mais cela n’était pas convainquant. Ainsi, plutôt que de repartir d’une feuille blanche, nous avons réalisé que le confort thermique pouvait être appréhendé grâce à des interactions riches, plus que grâce à une visualisation sophistiquée. Nous avons cherché à rendre le  feedback après les interactions très rapide afin d’inciter les utilisateurs à jouer avec l’application.'
              : 'Thermal data visualization is a well-researched field. In our first visualization tests, we were looking for radically different solutions, but these did not prove convincing. So, rather than starting from scratch, we realized that thermal comfort could be understood through rich interactions, rather than through sophisticated visualization. We tried to ensure interaction feedback was fast in order to encourage users to play with the app.'
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
              ? 'Nous avons combiné les jeux de données pour faire émerger des corrélations entre les facteurs extérieurs, ou le type d’isolant, et la température ressentie. Ainsi, les utilisateurs visualisent l’évolution du confort dans la maison à mesure qu’ils manipulent les nombreux interacteurs du prototype. Afin d’incarner visuellement la température ressentie au regard de des différents facteurs extérieurs, nous avons mobilisé des algorithmes de distribution spatiale et de proximité.'
              : 'We combined the datasets to show correlations between external factors, or the type of insulation, and the temperature felt. Thus, users visualize the evolution of comfort in the home as they manipulate the various parameters of the prototype. In order to visually embody the temperature felt with regard to various external factors, we used spatial distribution and proximity algorithms.'
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
                ? 'Le centre de l’écran montre la comparaison côte-à-côte de la performance thermique de deux toitures avec des matériaux d’isolation différents.'
                : 'The center of the screen shows a side-by-side comparison of the thermal performance of two roofs with different insulation materials.'
            }
          </ImgLegend>
        </Section>
        <SectionImage>
          <Img hasBorder src={imgBody2} />
        </SectionImage>
        <Section>
          <ImgLegend>
            {
              isFr
                ? 'Un grand nombre d’interacteurs permettent de manipuler des paramètres temporels, spatiaux, météorologiques, et de ressenti, avec une grande précision et célérité.'
                : 'A large number of interactors make it possible to manipulate temporal, spatial, meteorological, and feeling parameters, with great precision and speed.'
            }
          </ImgLegend>
        </Section>
        <SectionImage>
          <Img hasBorder src={imgBody3} />
        </SectionImage>
        <Section>
          <ImgLegend>
            {
              isFr
                ? 'Grâce aux interactions riches et immédiates, le confort thermique peut être ressenti et comparé, devenant ainsi un jeu.'
                : 'Thanks to the rich and immediate interactions, thermal comfort can be felt and compared, thus becoming a game.'
            }
          </ImgLegend>
        </Section>
      </Section>
      <Section>
        <SectionTitle>
          <FormattedMessage id='project-body-main-point' />
        </SectionTitle>
        <Section>
          <Paragraph1>
            {
              isFr
                ? 'Au centre du prototype figurent deux habitats côte-à-côte, montrant la différence de performance entre deux toitures chacune isolée avec un matériau différent. Notre prototype permet de manipuler plusieurs dimensions complémentaires sur ces habitats :'
                : 'At the heart of the prototype are two houses side by side, showing the difference in performance between two roofs, each insulated with a different material. Our prototype allows users to manipulate several complementary dimensions on these houses.'
            }
          </Paragraph1>
        </Section>
        <Section>
          <Paragraph1>
            {
              isFr
                ? 'Première dimension, le temps\u00A0: l’utilisateur peut choisir une saison, un mois, une heure de la journée, et même les jours les plus représentatifs d’une saison dans l’année.'
                : 'The first dimension is time. The user can choose a season, a month, an hour of the day, or even the most representative days of a season in the year.'
            }
          </Paragraph1>
          <Paragraph1>
            {
              isFr
                ? 'Ensuite, l’espace\u00A0: l’utilisateur manipule un plan 3d simplifié de la maison, montrant les murs, portes et fenêtres. Chaque pièce de la maison change de couleur et de particules à mesure que l’utilisateur se déplace dans le temps ou modifie les paramètres extérieurs.'
                : 'The next dimension is space. The user manipulates a simplified 3D plan of the house, showing the walls, doors and windows. Each room in the house changes color and particles as the user moves through time or changes the exterior settings.'
            }
          </Paragraph1>
          <Paragraph1>
            {
              isFr
                ? 'Enfin, les paramètres externes\u00A0: l’utilisateur peut modifier l’orientation de la maison, le degré d’humidité ou de sécheresse, le type de toiture, et même exprimer sa sensibilité en définissant une fourchette de confort autour de la température idéale.'
                : 'Finally there are the external parameters. The user can modify the orientation of the house, the degree of humidity or dryness, the type of roof, and even experiment with sensitivity by defining different ranges of comfort around the ideal temperature.'
            }
          </Paragraph1>
        </Section>
        <Section>
          <Paragraph1>
            {
              isFr
                ? 'Les interactions ont un effet simultané sur les deux habitats comparés dans l’application\u00A0: les rotations et translations dans la fenêtre 3D sont synchronisées. Cela simplifie les interactions et délivre l’utilisateur d’une charge cognitive qui pourrait résulter de la comparaison visuelle de deux objets dissemblables.'
                : 'All these interactions have a simultaneous effect on the two homes compared in the application: the rotations and translations in the 3D window are synchronized. This simplifies interactions and eases the cognitive load of having to make visual comparisons of two dissimilar objects.'
            }
          </Paragraph1>
        </Section>
      </Section>
      <Section marginBottom='spacingXL'>
        <LongVideo uri='428084394' />
      </Section>
    </>
  )
}

const infosSaintGobainAnalyzer = {
  component: SaintGobainAnalyzer,
  client: {
    fr: 'Saint-Gobain R&D',
    en: 'Saint-Gobain R&D'
  },
  label: {
    fr: 'Thermal Comfort Analyzer',
    en: 'Thermal Comfort Analyzer'
  },
  theme: {
    isDark: true,
    background: '#1C0B22'
  },
  video: '427639516',
  results: {
    fr: 'Utilisé par Saint-Gobain pour faire avancer la recherche sur la représentation du confort thermique, dans le cadre de l’initiative Multi-Comfort\u00A0Buildings.',
    en: 'Used by Saint-Gobain to advance research on the representation of thermal comfort as part of their Multi-Comfort\u00A0Buildings initiative.'
  },
  chapo: {
    fr: 'Faire ressentir le confort thermique d’un logement à partir de données de simulation physique.',
    en: 'Make people feel the thermal comfort of a home from physical simulation data.'
  },
  quote: {
    fr: 'L’équipe JanoRoze a su nous écouter et a réussi à bien cerner notre problématique. Elle nous a apporté une manière différente d’appréhender le sujet, en appliquant une méthodologie très professionnelle, et en faisant preuve d’agilité dans le développement de l’application.',
    en: 'The JanoRoze team listened to our needs and identified our challenge successfully. They shined a new light on the problem, by applying a very professional process and remaining agile during the application’s development.',
    author: {
      name: 'Thierry Voillequin',
      position: {
        fr: 'Virtual Reality Director, chez Saint-Gobain Research Paris',
        en: 'Virtual Reality Director, chez Saint-Gobain Research Paris'
      }
    }
  },
  category: {
    fr: 'Prototype',
    en: 'Prototype'
  },
  date: {
    fr: '2018 - 3 mois',
    en: '2018 - 3 months'
  },
  carousel: {
    isBig: false,
    pics: [imgCarousel1, imgCarousel2, imgCarousel3]
  },
  slug: 'saint-gobain-thermal-comfort-analyzer',
  isOnHome: false,
  serviceId: 'data-storytelling',
  galleryPics: []
}

export default SaintGobainAnalyzer
export { infosSaintGobainAnalyzer }
