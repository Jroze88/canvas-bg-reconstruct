import React from 'react'
import { useParams } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'

// Images Gallery
import imgGallery1 from '././assets/gallery/compagnon_gallery_0001.jpg'
import imgGallery2 from '././assets/gallery/compagnon_gallery_0002.jpg'
import imgGallery3 from '././assets/gallery/compagnon_gallery_0003.jpg'

// images body
import imgBody1 from '././assets/body/compagnon_img_0001.jpg'
import imgBody3 from '././assets/body/compagnon_img_0003.jpg'
import imgBody4 from '././assets/body/compagnon_img_0004.jpg'

// images carousel
import imgCarousel1 from '././assets/carousel/compagnon_img_carousel_0001.jpg'
import imgCarousel2 from '././assets/carousel/compagnon_img_carousel_0002.jpg'
import imgCarousel3 from '././assets/carousel/compagnon_img_carousel_0003.jpg'
import imgCarousel4 from '././assets/carousel/compagnon_img_carousel_0004.jpg'

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

const DVCompagnon = () => {
  const { lang } = useParams()
  const isFr = lang === LANG.FR.SLUG
  return (
    <>
      <Section>
        <Chapo>
          {
            isFr
              ? 'Nous avons imaginé une application simple, pratique, ludique, pour comprendre et maîtriser la consommation électrique de son domicile. Compagnon s\'adresse au grand public, et entend démontrer comment de meilleures interfaces peuvent réconcilier le grand public avec les données.'
              : 'We created a simple, practical and fun application to help the general public better understand and control energy consumption at home. Companion aims to demonstrate how better interfaces can change the public’s ideas about data.'
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
              ? 'Économiser les ressources énergétiques est un des défis des smart cities, mettant les solutions de “smart grid” et de compteurs connectés sur le devant de la scène. Malgré les promesses économiques et environnementales portées par ces technologies, les citoyens peinent à s’en saisir. Le sentiment que ces dispositifs sont trop compliqués, l\'impression de ne pas être la bonne personne pour régler l\'électricité chez soi, ou tout simplement la peur de tout dérégler\u00A0: les retours d\'utilisateurs laissent penser que les interfaces actuelles ce ces nouvelles technologies doivent être améliorées.'
              : 'Saving energy is one of the key challenges facing smart cities, with the solutions like smart grids and connected meters now center stage. However, citizens are struggling to take advantage of the economic and environmental benefits that these technologies offer. Stumbling blocks include fears of disruption, misconceptions about devices being too complicated, and problems convincing individuals that they are the “right” person to regulate the electricity supply at home. This feedback suggests that interfaces on these new technologies need to be improved.'
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
                ? 'L\'application fournit des incitations concrètes via des conseils personnalisés.'
                : 'The app provides concrete incentives via personalized advice.'
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
              ? 'Compagnon est conçu pour se brancher sur les données des compteurs intelligents, comme Linky. Ces données ne sont aujourd\'hui pas suffisamment ouvertes pour autoriser la connexion d\'une telle application. Compagnon est avant tout un projet prospectif, militant pour rendre possibles des usages des données électriques plus centrés sur les citoyens.'
              : 'Companion is designed to connect to data from smart meters, such as Linky, which is used in France. This data, however, is not currently open enough to facilitate a connection in this way. Companion is a forward-looking project that’s working to make the use of electricity data more focused on citizens.'
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
                ? 'L\'application aide à contextualiser les données via la comparaison à son historique, ou à d\'autres logements similaires.'
                : 'The app helps to contextualize the data by comparing it to older data, or to other similar dwellings.'
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
              ? 'Nous avons cherché à répondre à trois enjeux :'
              : 'We sought to address three challenges.'
          }
        </Paragraph1>
        <Paragraph1>
          {
            isFr
              ? 'La pédagogie d\'abord\u00A0: aider les citoyens à comprendre comment améliorer leur consommation énergétique.'
              : 'Firstly, education: helping citizens to understand how they can improve their own energy consumption.'
          }
        </Paragraph1>
        <Paragraph1>
          {
            isFr
              ? 'L’attractivité ensuite\u00A0: leur donner envie d’interagir avec ces nouvelles technologies et de découvrir de nouveaux usages.'
              : 'Secondly, attractiveness: citizens need to want to interact with these new technologies and discover new uses.'
          }
        </Paragraph1>
        <Paragraph1>
          {
            isFr
              ? 'La confiance enfin\u00A0: les mettre en capacité d’adopter avec sérénité de nouveaux usages des données domestiques.'
              : 'Finally, trust: empowering citizens to embrace—with peace of mind—new ways of using domestic data.'
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
                ? 'Nous utilisons le levier de la gamification avec un système de badges, et de comparaison des quartiers de la ville.'
                : 'We also use gaming principles with a system of badges, and allow users to compare data from different areas of the town or city.'
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
              ? 'L’application Compagnon montre à l’utilisateur la consommation de son foyer, lui donne un récapitulatif quotidien ou mensuel, et lui permet de filtrer par appareil électrique. Elle lui permet, par exemple, de prendre conscience que lave-linge et four sont toujours actifs en même temps, ou d’anticiper quelles économies pourraient être faites en décalant l’heure du lancement du lave-vaisselle.'
              : 'The Companion app shows the user their household consumption, provides a daily or monthly summary, and allows the data to be filtered by electrical device. It allows the user to, for example, realize that the washing machine and the oven are always active at the same time, or to predict what savings would result from delaying the start time of the dishwasher.'
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
              ? 'Nous nous sommes inspirés des “nudges verts” (green nudges), une approche tirée de l\'économie comportementale visant à favoriser des comportements socialement vertueux par l’incitation, sans recourir à la contrainte.'
              : 'We were inspired by ‘green nudges’, an approach drawn from behavioral economics aimed at incentivizing socially responsible behavior without resorting to coercion.'
          }
        </Paragraph1>
      </Section>
      <Section>
        <LongVideo uri='428091019' />
      </Section>
    </>
  )
}

const infosDVCompagnon = {
  component: DVCompagnon,
  client: {
    fr: 'Confidentiel',
    en: 'Confidential'
  },
  label: {
    fr: 'Compagnon',
    en: 'Companion'
  },
  theme: {
    isDark: true,
    background: '#033838'
  },
  video: '426955466',
  results: {
    fr: 'Cité dans plusieurs ouvrages sur les bonnes pratiques design.',
    en: 'Cited in several books on good design practices.'
  },
  chapo: {
    fr: 'Prouver qu’une application bien conçue peut aider le grand public à mieux gérer sa consommation d\'électricité.',
    en: 'Demonstrate that a well-designed application can help the general public better manage their electricity consumption.'
  },
  category: {
    fr: 'Application',
    en: 'Application'
  },
  date: {
    fr: '2016 - 2 mois',
    en: '2016 - 2 months'
  },
  carousel: {
    isBig: false,
    pics: [imgCarousel1, imgCarousel2, imgCarousel3, imgCarousel4]
  },
  slug: 'compagnon',
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

export default DVCompagnon
export { infosDVCompagnon }
