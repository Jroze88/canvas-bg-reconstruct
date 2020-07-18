import React from 'react'
import { useParams } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'

// images body
import imgBody1 from '././assets/body/odsee_img_0001.jpg'
import imgBody2 from '././assets/body/odsee_img_0002.jpg'
import imgBody3 from '././assets/body/odsee_img_0003.jpg'
import imgBody4 from '././assets/body/odsee_img_0004.jpg'

// images carousel
import imgCarousel1 from '././assets/carousel/odsee_img_carousel_0001.jpg'
import imgCarousel2 from '././assets/carousel/odsee_img_carousel_0002.jpg'
import imgCarousel3 from '././assets/carousel/odsee_img_carousel_0003.jpg'

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

const MetrolabODsee = () => {
  const { lang } = useParams()
  const isFr = lang === LANG.FR.SLUG
  return (
    <>
      <Section>
        <Chapo>
          {
            isFr
              ? 'En 2016, nous avons développé avec le groupe RATP et l’IFSTTAR l’outil ODsee, pour modéliser et visualiser les déplacement des utilisateurs des transports en commun, à partir de grands volumes de données origine-destination (OD). ODsee fournit aux opérateurs de transport de l’information utile pour mieux mettre en adéquation leurs offres avec la demande de mobilité.'
              : 'In 2016, we worked with the RATP group and IFSTTAR to develop the ODsee tool. ODsee uses large volumes of origin-destination (OD) data to visualize the movements of commuters. It provides transport operators with useful information to better match their services to mobility demand.'
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
              ? 'Le groupe RATP cherchait à améliorer les méthodes de construction des offres de transports en commun en exploitant de façon plus riche les larges bases de données OD (origine-destination des voyageurs) à sa disposition. Néanmoins, le volume de ces données les rend impossibles à analyser sans un outil dédié et performant. En 2016, il n’existait pas d’outil sur étagère pour traiter des volumes de données aussi importants tout en répondant aux enjeux spécifiques au monde du transport en commun. Le groupe RATP a décidé de remédier à ce manque en initiant la réalisation de l’outil ODsee avec Dataveyes et l\'IFSTTAR.'
              : 'The RATP group wanted to make better use of their large OD (commuter origin-destination) databases in order to improve their methods of devising public transport services. However, the volume of this data made it impossible to analyze without a dedicated and efficient tool. In 2016, there was no ‘off-the-shelf’ tool that could process such large volumes of data while also meeting the specific challenges of the public transport world. To address this, the RATP group worked with Dataveyes and IFSTTAR to create the ODsee tool.'
          }
        </Paragraph1>
      </Section>
      <Section>
        <Section>
          <GIFVideo hasBorder uri='429912531' />
        </Section>
        <Section>
          <ImgLegend>
            {
              isFr
                ? 'Nous avons optimisé l\'expérience utilisateur pour maximiser la découvrabilité de l’information et donner aux utilisateurs une grande souplesse dans l’exploration des données.'
                : 'We optimized the user experience to make it more possible to discover new information and to give users increased flexibility in terms of data mining.'
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
              ? 'Les données OD (pour  “Origine-Destination”) décrivent combien de personnes ont réalisé un trajet entre une station d’origine d’un réseau de transport (O) et une station de destination (D), et ce pour chaque couple entre deux stations, pour des périodes de l’ordre de quinze minutes ou une heure, sur plusieurs années d’historique. Ces jeux de données représentent plusieurs dizaines de millions de lignes par an. Ils sont susceptibles d’être collectés en continu dans les réseaux de transports où les passagers valident leurs entrées et leurs sorties avec des cartes magnétiques. Enfin, pour être correctement analysées, ces données ont été enrichies avec des données décrivant la structure du réseau, l’offre existante de transport, ou les événements significatifs d’un calendrier.'
              : 'OD data describes how many people travel between an origin station (O) and a destination station (D) on a transport network. It also describes how many people travelled between a given pair of stations every 15 minutes over a period of several years. These datasets represent several tens of millions of lines per year. They are usually collected continuously on transport networks where passengers validate their entries and exits with magnetic cards. To be properly analyzed, this data was enriched with data that describes the structure of the network, existing transport services, or significant public events.'
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
              ? 'Nous avons analysé les informations nouvelles apportées par les données OD, puis nous avons identifié de quelles façons ces informations étaient utiles aux métiers d’un opérateur de transports en commun. Pour cela, nous avons réalisé des interviews avec des représentants de différents métier. Nous en avons extrait des problèmes d’information et des tâches pouvant être facilitées par un meilleur usage des données OD. Nous avons ensuite mené des ateliers de travail pour hiérarchiser les fonctionnalités et les informations, ce qui nous a permis d\'aboutir à des parcours d’utilisation cohérents au regard des habitudes de travail des utilisateurs ciblés. À partir d’un premier prototype, nous avons réalisé des tests utilisateurs pour vérifier la bonne prise en main de l\'outil.'
              : 'We analyzed new information from the OD data and identified ways in which this information was useful for public transport operators. We carried out interviews with representatives of different departments and also studied how improved use of OD data could help solve problems or make certain tasks easier. We then conducted workshops to prioritize features and information, which allowed us to achieve consistent user journeys in terms of the work habits of targeted users. From the first prototype, we carried out tests to ensure users were engaging with the tool correctly.'
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
                ? 'Nous avons créé de nouveaux modes de visualisation de données, en particulier une nouvelle façon de construire des serpents de charge, mieux adaptée aux codes de lectures du monde du transport. Nous visualisons la charge -\u00A0le nombre de voyageurs\u00A0- entre les stations, plutôt que sur chaque station, pour refléter les flux de voyageurs.'
                : 'We created new methods of data visualization, in particular a new way of constructing load capacity graphs that are better adapted to the transport world. We visualized the load—the number of travelers—moving between stations rather than the number of people actually at each station to better reflect passenger flows.'
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
              ? 'Nous avons conçu et développé l\'outil ODsee pour qu\'il soit utilisable par tous les métiers de l’exploitation et de la planification des réseaux de transport, quel que soit leur niveau de maîtrise technique. Son interface visuelle et ergonomique, ainsi que le recours à la visualisation de données, rendent aisé l’accès aux données dans toute leur profondeur, et favorise la découverte d’informations nouvelles.'
              : 'We designed and developed the ODsee tool for use by all levels of staff involved in the operation and planning of transport networks regardless of their technical skills. The visual and user-friendly interface, along with the data visualization itself, makes accessing the data in all its depth easier, and provides fresh insights into new information.'
          }
        </Paragraph1>
      </Section>
      <Section>
        <Section>
          <SectionTitle>
            <FormattedMessage id='project-body-main-point' />
          </SectionTitle>
          <Paragraph1>
            {
              isFr
                ? 'En décrivant finement la demande de mobilité, l\'outil ODsee fournit de l’information stratégique aux opérateurs de transports en commun et les aide à mieux s’adapter à la demande. En plus d’améliorer la compréhension des territoires et des modes de vies, l\'outil sert aussi à prendre des décisions d’investissement et d’aménagement du territoire.'
                : 'The ODsee tool describes in great detail the demand for mobility, providing strategic information to public transport operators to help them adapt their services to demand. In addition to improving the understanding of transport areas and commuter lifestyles, the tool is also used to make investment and spatial planning decisions.'
            }
          </Paragraph1>
        </Section>
        <SectionImage>
          <Img hasBorder src={imgBody2} />
        </SectionImage>
        <Section>
          <ImgLegend>
            {
              isFr
                ? 'Nous avons conçu ODsee pour répondre aux lourdes contraintes posées par le grand volume de données\u00A0: l\'outil repose sur une architecture multi-serveurs avec gestion de tâche asynchrone de façon à assurer l’évolutivité et la performance de l’outil.'
                : 'We designed ODsee to respond to the heavy constraints that large volumes of data impose. The tool is based on multi-server architecture with asynchronous task management to safeguard scalability and performance.'
            }
          </ImgLegend>
        </Section>
        <SectionImage marginBottom='spacingM'>
          <Img hasBorder src={imgBody3} />
        </SectionImage>
        <SectionImage marginBottom='spacingXL'>
          <Img hasBorder src={imgBody4} />
        </SectionImage>
      </Section>
    </>
  )
}

const infosMetrolabODsee = {
  component: MetrolabODsee,
  client: {
    fr: 'Groupe RATP',
    en: 'Groupe RATP'
  },
  label: {
    fr: 'ODSee',
    en: 'ODSee'
  },
  theme: {
    isDark: true,
    background: '#0F1F25'
  },
  video: '427804567',
  results: {
    fr: 'ODsee a été utilisé par RATP Dev à Casablanca, au Maroc, pour optimiser l\'offre de transport pendant certaines périodes, comme le Ramadan.',
    en: 'ODsee was used by RATP Dev in Casablanca, Morocco, to optimize transport services during certain periods, such as Ramadan.'
  },
  chapo: {
    fr: 'Modéliser et visualiser des millions de trajets en transports en commun pour mieux adapter l’offre de transport à la demande.',
    en: 'Model and visualize millions of public transport journeys to better match transport services with demand.'
  },
  category: {
    fr: 'Outil',
    en: 'Tool'
  },
  date: {
    fr: '2016 - 6 mois',
    en: '2016 - 6 months'
  },
  carousel: {
    isBig: false,
    pics: [imgCarousel1, imgCarousel2, imgCarousel3]
  },
  slug: 'metrolab-odsee',
  isOnHome: false,
  serviceId: 'user-research',
  galleryPics: []
}

export default MetrolabODsee
export { infosMetrolabODsee }
