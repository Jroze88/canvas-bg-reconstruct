import React from 'react'
import { useParams } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'

// Images Gallery
import imgGallery1 from '././assets/gallery/actus-jv_gallery_0001.jpg'
import imgGallery2 from '././assets/gallery/actus-jv_gallery_0002.jpg'
import imgGallery3 from '././assets/gallery/actus-jv_gallery_0003.jpg'

// images body
import imgBody1 from '././assets/body/actus-jv_img_0001.jpg'
import imgBody2 from '././assets/body/actus-jv_img_0002.jpg'
import imgBody3 from '././assets/body/actus-jv_img_0003.jpg'

// images carousel
import imgCarousel1 from '././assets/carousel/jeuxvideo_img_carousel_0001.jpg'
import imgCarousel2 from '././assets/carousel/jeuxvideo_img_carousel_0002.jpg'
import imgCarousel3 from '././assets/carousel/jeuxvideo_img_carousel_0003.jpg'

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

const CiteSciencesJeuVideo = () => {
  const { lang } = useParams()
  const isFr = lang === LANG.FR.SLUG
  return (
    <>
      <Section>
        <Chapo>
          {
            isFr
              ? 'Nous avons créé un paysage vivant, généré par les données, pour traduire l\'actualité dans l\'univers du jeu vidéo. Cette installation créative a été projetée pendant huit mois à la Cité des Sciences de Paris,  à l’occasion de sa grande exposition Jeu Vidéo.'
              : 'We created a living landscape—generated by data—to communicate and share news and events from the video games world. This creative installation was screened for 8 months at the Cité des Sciences in Paris during a major video games exhibition.'
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
              ? 'L\'actualité des jeux vidéos est foisonnante, fruit de multiples sources d\'informations aux temporalités différentes. La Cité des Sciences voulait incarner cette vitalité et cette diversité par une installation visuelle poétique, au cœur de son exposition consacrée aux jeux vidéos. Une difficulté supplémentaire nous a été imposée\u00A0: l\'installation devait fonctionner en autonomie pendant les huit\u00A0mois à la Cité des Sciences de Paris.'
              : 'News about video games is everywhere—there are many different and constant sources of information. The Cité des Sciences wanted to capture this vitality and diversity by putting a poetic visual installation at the heart of its video games exhibition. An additional difficulty was imposed on us: the installation had to operate throughout the 8\u00A0months of the exhibition without any ongoing maintenance.'
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
                ? 'Chaque sujet d\'actualité est représenté par une planète. La taille des noyaux est proportionnelle au nombre d’articles qui le composent et le halo est  proportionnel au nombre de partages sociaux.'
                : 'A planet represents each news subject. The size of the nuclei is proportional to the number of articles on the subject and the halo is proportional to the number of social shares.'
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
              ? 'Notre matière première était faite de flux d’articles issus d’une trentaine de sources\u00A0: blogs spécialisés, sites d’info généralistes, Google News, Yahoo News, etc. Ces bribes d’actualité disparates étaient re-traitées par notre partenaire Antidot pour obtenir une liste de thèmes hiérarchisés (clustering) via des algorithmes d’apprentissage automatique.  Au cours des huit mois de l\'exposition, l\'application a traité plus de 20\u00A0000 articles et identifié environ 1\u00A0000 sujets d’actualité.'
              : 'Our raw material was made up of streams of articles from around 30 sources, such as specialized blogs, general information sites, Google News, Yahoo News, etc. These disparate snippets of news were re-processed by our partner Antidot to obtain a list of hierarchical themes (clustering) via machine learning algorithms. During the 8 months of the exhibition, the application processed more than 20,000 articles and identified around 1,000 current topics.'
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
                ? 'Nous avons été inspirés par le concept «\u00A0d’informatique ambiante\u00A0», cette informatique diffuse et omniprésente, traduction d\'un monde où tous les systèmes informatiques seraient aussi libres et naturels que l’air que nous respirons.'
                : 'We were inspired by the concept of ‘ambient computing’—an ubiquitous world where all computer systems would be as free and natural as the air we breathe.'
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
              ? 'Nous avons cherché à construire une installation “calme”\u00A0: un dispositif qui se fond harmonieusement dans le paysage de l\'exposition, qui reste discret, élégant, reposant, qui ne saute pas aux yeux des visiteurs, et ne réclame pas d\'être au centre de l\'attention. Nous voulions que les visiteurs s\'imprègnent des information en passant, au milieu du brouhaha des autres installations interactives de l\'exposition. '
              : 'We sought to build a ‘calm’ installation. We wanted a device that blended harmoniously into the landscape of the exhibition, remaining discreet, elegant, relaxing; an installation that did not claim to be the center of attention. We wanted visitors to soak up the information in passing, amid the hubbub of the other interactive installations at the exhibition.'
          }
        </Paragraph1>
      </Section>
      <Section>
        <GIFVideo uri='429910647' formatPercent={37.5} />
        <ImgLegend>
          {
            isFr
              ? 'L’application est vivante, animée d’une mystérieuse énergie insufflée par les données.'
              : 'The app comes alive thanks to a mysterious energy injected by the data.'
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
              ? 'Nous avons traduit les articles sur les jeux vidéos et leurs partages en un paysage onirique où chaque actualité est représentée par une planète, ses partages par une aura lumineuse, et les derniers articles parus par des satellites. L’interface permet de comprendre quels sont les grands sujets d’actualité, et quelle est leur importance. Elle montre les décalages entre des sujets très viraux, qui génèrent beaucoup d’articles, et les sujets de fond, qui s’étirent de jour en jour.'
              : 'We transformed the articles on video games into a dreamlike landscape where each news item is represented by a planet, while its sharing is presented by a luminous aura; the most recently published articles are represented by satellites. The interface communicates the main news topics. It highlights the differences between very viral subjects that generate a lot of articles, and the more substantive subjects that are followed day after day.'
          }
        </Paragraph1>
      </Section>
      <Section>
        <SectionImage>
          <Img src={imgBody2} />
        </SectionImage>
      </Section>
      <Section>
        <SectionTitle>
          <FormattedMessage id='project-body-main-point' />
        </SectionTitle>
        <Paragraph1>
          {
            isFr
              ? 'Avec ce projet, nous avons poussé le plus loin possible l\'idée de transformer les données en matière. Nous avons souvent recours aux métaphores du monde physique pour donner aux utilisateurs l\'impression que les données sont des choses concrètes, appréhendables. Ici, nous nous été jusqu’à créer un petit univers parallèle\u00A0: les objets de l’application se partagent l’espace disponible à l’intérieur de l’écran, ils s’attirent ou se repoussent, selon des lois physiques comme la gravité. Grâce à ces règles, l\'installation a pu évoluer de façon autonome, au gré des données reçues, pendant les huit mois de l\'exposition.'
              : 'With this project, we pursued the idea of transforming data into matter. We often use metaphors from the physical world to give users the impression that data represents concrete, tangible things. Here, we went as far as creating a small parallel universe: the objects of the app share the space inside the screen, they attract or repel each other in line with physical laws such as gravity. By following these rules, the installation was able to evolve independently—based on the data received—throughout the 8 months of the exhibition.'
          }
        </Paragraph1>
      </Section>
    </>
  )
}

const infosCiteSciencesJeuVideo = {
  component: CiteSciencesJeuVideo,
  client: {
    fr: 'Cité des sciences et de l\'industrie de Paris',
    en: 'Cité des sciences et de l\'industrie de Paris'
  },
  label: {
    fr: 'L\'actualité du jeu vidéo',
    en: 'Video game news'
  },
  theme: {
    isDark: true,
    background: '#181E2C'
  },
  video: '427805729',
  results: {
    fr: 'Projeté sur grand écran en continu pendant 8 mois à la Cité des Sciences de Paris.',
    en: 'Projected on a big screen continuously for 8 months at Paris Cité des Sciences.'
  },
  chapo: {
    fr: 'Traduire de façon poétique l\'actualité du jeu vidéo.',
    en: 'Provide a poetic interpretation of video games news.'
  },
  caseStudy: {
    en: {
      label: 'A living landscape to translate current news related to video games',
      url: 'https://stories.dataveyes.com/a-living-landscape-to-translate-current-news-related-to-video-games-36c78c1d638f'
    },
    fr: {
      label: 'Un paysage vivant pour traduire l’actualité dans l’univers du jeu vidéo',
      url: 'https://medium.com/dataveyes-stories-vf/un-paysage-vivant-pour-traduire-lactualit%C3%A9-dans-l-univers-du-jeu-vid%C3%A9o-3c62d6352595'
    }
  },
  category: {
    fr: 'Installation créative',
    en: 'Creative installation'
  },
  date: {
    fr: '2013 - 4 mois',
    en: '2013 - 4 months'
  },
  carousel: {
    isBig: false,
    pics: [imgCarousel1, imgCarousel2, imgCarousel3]
  },
  slug: 'cite-des-sciences-jeu-video',
  isOnHome: false,
  serviceId: 'prototyping',
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

export default CiteSciencesJeuVideo
export { infosCiteSciencesJeuVideo }