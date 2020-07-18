import React from 'react'
import { useParams } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'

import LongVideo from '../../../../components/PieceOfWork/LongVideo'
import Link from '../../../../components/Links'
import GIFVideo from '../../../../components/PieceOfWork/GIFVideo'

// Images Gallery
import imgGallery1 from '././assets/gallery/edf-maquette-peda_gallery_0001.jpg'
import imgGallery2 from '././assets/gallery/edf-maquette-peda_gallery_0002.jpg'
import imgGallery3 from '././assets/gallery/edf-maquette-peda_gallery_0003.jpg'

// images body
import imgBody1 from '././assets/body/edf-maquette-peda_img_0001.jpg'
import imgBody2 from '././assets/body/edf-maquette-peda_img_0002.jpg'
import imgBody3 from '././assets/body/edf-maquette-peda_img_0003.jpg'
import imgBody4 from '././assets/body/edf-maquette-peda_img_0004.jpg'

// images carousel
import imgCarousel1 from '././assets/carousel/edfmaquettepedagogique_img_carousel_0001.jpg'
import imgCarousel2 from '././assets/carousel/edfmaquettepedagogique_img_carousel_0002.jpg'
import imgCarousel3 from '././assets/carousel/edfmaquettepedagogique_img_carousel_0003.jpg'
import imgCarousel4 from '././assets/carousel/edfmaquettepedagogique_img_carousel_0004.jpg'

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

const EDFMaquettePedagogique = () => {
  const { lang } = useParams()
  const isFr = lang === LANG.FR.SLUG
  return (
    <>
      <Section>
        <Chapo>
          {
            isFr
              ? 'Nous avons réalisé un simulateur pédagogique pour faire connaître le concept de flexibilité énergétique, et le potentiel qu’il représente pour rendre notre consommation électrique plus soutenable. En quatre mois de travail entre notre équipe et les chercheurs d’EDF R&D, nous avons fait la preuve qu’ il est possible d’amener un large public à comprendre des phénomènes énergétiques compliqués, en s’appuyant sur la visualisation, et l’interaction physique et le jeu.'
              : 'We produced an educational simulator to raise awareness of energy flexibility, and its potential to make our electricity consumption more sustainable. In four months’ work with EDF’s R&D researchers, we demonstrated that it’s possible to help large audiences understand complicated energy concepts. We did this by using visualization, physical interaction and play.'
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
              ? 'La flexibilité énergétique caractérise la capacité de nos appareils électriques à moduler leur consommation d’électricité au cours de la journée. De cette façon, ils peuvent s’effacer pendant les heures de pointe ou lisser les pics de consommation pour moins peser sur le réseau électrique global. Cela invite les citoyens à consommer de façon plus soutenable grâce à de meilleures décisions d’équipement et de pilotage. Nos interlocuteurs chez EDF R&D souhaitaient proposer une démonstration de ce phénomène suffisamment pédagogique pour être comprise par un public de relais d\'opinion\u00A0: décideurs, constructeurs, journalistes, etc.'
              : 'Energy flexibility relates to the ability of our electrical devices to vary their electricity consumption during the day. For instance, if a device is not used during peak hours, this can help smooth consumption peaks and take pressure off the overall power grid. This encourages citizens to consume energy more sustainably thanks to better equipment and management decisions. The EDF R&D team wanted to raise awareness of this concept in a way that could be understood by trend-setters such as decision-makers, manufacturers, journalists, etc.'
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
                ? 'Les visiteurs découvrent comment effacer leur courbe de charge pendant les heures de pointe sur le réseau électrique par intuition et déduction.'
                : 'Visitors use intuition and deduction to learn how to clear their load curve during peak hours on the electrical network.'
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
              ? 'Pour ce projet, nous avons travaillé directement avec des chercheurs d’EDF R&D. Ils nous ont fourni des données issues de simulation et de modélisation de la consommation électrique de logements témoins.'
              : 'We worked directly with EDF’s R&D researchers, who provided us with data from the simulation and modeling of the electricity consumption in sample homes.'
          }
        </Paragraph1>
      </Section>
      <Section>
        <SectionImage>
          <Img src={imgBody4} />
        </SectionImage>
        <Section>
          <ImgLegend>
            {
              isFr
                ? 'Nous avons enroulé sur elles-même les courbes de charge pour rapprocher le graphique principal d’une horloge.'
                : 'We rolled up the load curves to make the main graphic look like a clock.'
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
              ? 'Nous avons voulu inciter les visiteurs du showroom à passer à l\'action, sans se limiter à une simple prise de conscience que la flexibilité est un concept intéressant. Pour placer l’utilisateur dans une posture d’acteur, nous avons travaillé sur trois axes\u00A0: d\'une part, la compréhension active, dans une approche '
              : 'We wanted to encourage showroom visitors to take action, and to go beyond simply realizing that energy flexibility is an interesting concept. To place the user at the center of the app as an actor, we worked on introducing three central lines of investigation: on active understanding and taking an explorable '
          }
          <Link target='_blank' href='https://explorabl.es/all/'>
            {
              isFr
                ? 'explorable explanation'
                : 'explanation approach'
            }
          </Link>
          {
            isFr
              ? ', d\'autre part l’interactivité renforcée, via un dispositif actionnable par son téléphone mobile, et enfin la dimension ludique, grâce à un mode collaboratif.'
              : ' on enhanced interactivity via a mobile phone-activated device and on a playful dimension that took a collaborative approach.'
          }
        </Paragraph1>
      </Section>
      <Section>
        <GIFVideo uri='429911565' />
      </Section>
      <Section>
        <SectionTitle>
          <FormattedMessage id='project-body-solution' />
        </SectionTitle>
        <Paragraph1>
          {
            isFr
              ? 'Nous avons pour conçu une application de visualisation de données avec laquelle les visiteurs peuvent tester la flexibilité de différents appareils électriques dans différentes configurations de logement. Les utilisateurs comparent le niveau de flexibilité, et les effets de cette flexibilité sur la consommation d’électricité, la température dans le logement, ou la facture payée.'
              : 'We designed a data visualization application that visitors can use to test the flexibility of different electrical devices in different housing configurations. Users can compare the level of flexibility and its effects on such factors as electricity consumption, the temperature in the home, and the bill paid.'
          }
        </Paragraph1>
      </Section>
      <Section>
        <Section>
          <SectionImage>
            <Img src={imgBody3} />
          </SectionImage>
          <Section>
            <ImgLegend>
              {
                isFr
                  ? 'Les visiteurs du showroom peuvent faire évoluer l’information présentée sur l’écran en filtrant ou en déplaçant un curseur sur leur téléphone mobile.'
                  : 'Showroom visitors can change the information on the screen by filtering or moving cursors on their mobile phones.'
              }
            </ImgLegend>
          </Section>
          <SectionImage>
            <Img src={imgBody2} />
          </SectionImage>
        </Section>
      </Section>
      <Section>
        <SectionTitle>
          <FormattedMessage id='project-body-main-point' />
        </SectionTitle>
        <Paragraph1>
          {
            isFr
              ? 'L\'installation est projetée sur un écran géant pour qu\'un grand nombre de visiteurs puisse observer les représentations visuelles et profiter des explications. Grâce à une technologie de pairing, les visiteurs peuvent en prendre le contrôle avec leur téléphone mobile, qui sert alors de télécommande pour sélectionner des éléments et interagir avec les visualisations de données.'
              : 'The installation is projected on a giant screen so that a large number of visitors can see the visual representations and benefit from the explanations. Using pairing technology, visitors can take control of the app with their mobile phone, which then acts as a remote control to select items and interact with data visualizations.'
          }
        </Paragraph1>
        <Paragraph1>
          {
            isFr
              ? 'L’application possède aussi un mode multijoueur dans lequel plusieurs participants interagissent ensemble sur le grand écran, chacun depuis son téléphone. Tous ensemble, ils prennent le contrôle d’un petit village et essaient d’en améliorer la consommation d’électricité. La dimension ludique de l’exercice, et le fait qu’il pousse chacun à se préoccuper du comportement des autres, renforce le rôle pédagogique du projet.'
              : 'The app also has a multiplayer mode that allows several participants to interact on a big screen, each from their phone. Together, they take control of a small village and try to improve electricity consumption. This playful dimension—and the fact that it makes everyone care about the behavior of others—strengthens the educational aspect of the project.'
          }
        </Paragraph1>
      </Section>
      <Section>
        <LongVideo uri='428060882' />
      </Section>
    </>
  )
}

const infosEDFMaquettePedagogique = {
  component: EDFMaquettePedagogique,
  client: {
    fr: 'EDF R&D',
    en: 'EDF R&D'
  },
  label: {
    fr: 'Démonstrateur sur la flexibilité énergétique',
    en: 'Flexible energy simulator'
  },
  theme: {
    isDark: true,
    background: '#15153E'
  },
  video: '427637151',
  results: {
    fr: 'Projeté sur grand écran dans plusieurs showrooms d’EDF.',
    en: 'Projected on a big screen in several EDF showrooms.'
  },
  chapo: {
    fr: 'Convaincre de l’importance de la flexibilité énergétique avec un démonstrateur pédagogique.',
    en: 'Use an educational simulator to highlight the importance of energy flexibility.'
  },
  caseStudy: {
    en: {
      label: 'An educational simulator to understand the concept of energy flexibility',
      url: 'https://stories.dataveyes.com/an-educational-simulator-to-understand-the-concept-of-energy-flexibility-9f98dbfe97f2'
    },
    fr: {
      label: 'Un simulateur pédagogique pour comprendre la flexibilité énergétique',
      url: 'https://medium.com/dataveyes-stories-vf/un-simulateur-p%C3%A9dagogique-pour-comprendre-la-flexibilit%C3%A9-%C3%A9nerg%C3%A9tique-86bec2f68a70'
    }
  },
  category: {
    fr: 'Installation créative',
    en: 'Creative installation'
  },
  date: {
    fr: '2014 - 4 mois',
    en: '2014 - 4 months'
  },
  carousel: {
    isBig: false,
    pics: [imgCarousel1, imgCarousel2, imgCarousel3, imgCarousel4]
  },
  slug: 'edf-maquette-pedagogique',
  isOnHome: false,
  serviceId: 'data-storytelling',
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

export default EDFMaquettePedagogique
export { infosEDFMaquettePedagogique }
