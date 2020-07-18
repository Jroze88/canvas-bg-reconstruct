import React from 'react'
import { useParams } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'

// Images Gallery
import imgGallery1 from '././assets/gallery/carto-competence_gallery_0001.jpg'
import imgGallery2 from '././assets/gallery/carto-competence_gallery_0002.jpg'

// images body
import imgBody1 from '././assets/body/carto-competence_img_0001.jpg'
import imgBody2 from '././assets/body/carto-competence_img_0002.jpg'
import imgBody3 from '././assets/body/carto-competence_img_0003.jpg'

// images carousel
import imgCarousel1 from '././assets/carousel/cartocompetences_img_carousel_0001.jpg'
import imgCarousel2 from '././assets/carousel/cartocompetences_img_carousel_0002.jpg'
import imgCarousel3 from '././assets/carousel/cartocompetences_img_carousel_0003.jpg'
import imgCarousel4 from '././assets/carousel/cartocompetences_img_carousel_0004.jpg'

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

const DVCartographieCompetences = () => {
  const { lang } = useParams()
  const isFr = lang === LANG.FR.SLUG
  return (
    <>
      <Section>
        <Chapo>
          {
            isFr
              ? 'Nous avons conçu un outil d’aide à la décision basé sur l\'exploitation des données tirées des fiches de poste et des mobilités internes. Nous avons révélé le riche potentiel de ces données pour orienter la stratégie de gestion des emplois et des carrières.'
              : 'We designed a decision support tool based on the use of data from job descriptions and internal mobility. We revealed the rich potential of this data to guide human resources strategy in terms of managing jobs and careers.'
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
              ? 'Notre client avait à sa disposition un riche historique de fiches de poste et de mobilités internes entre postes, pour tous les métiers de son entreprise. Ces fiches n\'avait jamais été exploitées en tant que base de données, ni dans une perspective temporelle. Notre client nous a sollicités pour créer un outil qui mette ces données au service d’une meilleure stratégie de gestion des emplois et des carrières.'
              : 'Our client had a large set of historical files cataloguing job descriptions and internal mobility between positions for all areas of their business. These files had never been used as a database, nor analyzed retrospectively. Our client asked us to create a tool to enable this data to be used as part of an improved job and career management strategy.'
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
                ? 'L\'outil montre l\'organigramme de façon vivante\u00A0: chaque équipe correspond à un nœud, et les liens traduisent les relations hiérarchiques.'
                : 'The tool shows the organizational chart in a lively way: each team corresponds to a node, and the links translate the hierarchical relationships.'
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
              ? 'Les fiches de postes sont riches pour comprendre une entreprise\u00A0: elle racontent l’évolution de l’organisation humaine, comment chacun se forme, fait évoluer son métier, change de trajectoire, etc. Notre client possédait une version propre et numérisée de l\'ensemble de ces fiches de poste, rendant possible leur exploitation en tant que base de données.'
              : 'Job descriptions are a rich source of information to help understand a business: they tell the story of human organization, staff development, changes to professions and career trajectories, etc. Our client had a clean and digitized version of all their job descriptions, making it possible to use them as a database.'
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
                ? 'La cartographie des compétences visualise l\'ensemble des savoir-faire décrits dans les fiches de poste, le nombre de personnes qui les possèdent et leur proximité, lorsque plusieurs personnes possèdent des compétences en commun.'
                : 'The skills mapping shows all the skills described in the job descriptions, the number of people who have them and their proximity, as well as when several people have skills in common.'
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
              ? 'Nous avons analysé les données tirées des fiches de postes, puis nous avons réalisé une vingtaine d’interviews avec différents décideurs stratégiques et responsables des ressources humaines. Cette phase exploratoire nous a permis d\'identifier où et comment des données RH peuvent aider à la prise de décision, et surtout, la façon dont il fallait visualiser ces données pour libérer leur potentiel informationnel.'
              : 'We analyzed the data that was drawn from the job descriptions before carrying out around 20 interviews with strategic decision-makers and human resources managers. This initial phase helped us identify where and how the HR data could help decision-making. It also helped us to understand how to visualize this data in order to unlock its potential as an information source.'
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
                ? 'L\'outil visualise toutes les carrières menées dans l\'entreprise : à partir d\'un métier, il est possible de s\'orienter vers les autres postes.'
                : 'The tool visualizes all the career options at the company, and it shows how it is possible to progress from one job into other roles.'
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
              ? 'L’outil réalisé utilise la visualisation de données pour aider les dirigeants du groupe à appréhender les évolutions de leur entreprise sous différents points de vue\u00A0: l’évolution des compétences, l’évolution des métiers, l’évolution des besoins de recrutement, l’évolution de l’organisation, etc. Grâce à sa dimension visuelle et interactive, l’outil agit comme un révélateur des transformations du groupe. Il aide ses utilisateurs à y projeter l’impact de leur futures décisions, et apporte un cadre à leurs choix stratégiques.'
              : 'The tool we produced uses data visualization to help the organization’s leaders to understand the changes in their business from different points of view: changes in skill sets, changes in jobs, changes in recruitment needs, organizational development, etc. Thanks to its visual and interactive dimensions, the tool reveals the company’s evolution. It helps its users to project the impact of their future decisions, and provides a framework for their strategic choices.'
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
              ? 'En plus de la capacité à traiter de gros historiques de données, l\'outil a mis en valeur l’importance de la visualisation de données pour l’aide à la décision RH.'
              : 'In addition to the ability to process large data histories, the tool highlighted the importance of data visualization as an HR decision support mechanism.'
          }
        </Paragraph1>
      </Section>
    </>
  )
}

const infosDVCartographieCompetences = {
  component: DVCartographieCompetences,
  client: {
    fr: 'Confidentiel',
    en: 'Confidential'
  },
  label: {
    fr: 'Cartographie des compétences',
    en: 'Skills mapping'
  },
  theme: {
    isDark: true,
    background: '#11242E'
  },
  video: '427805393',
  results: {
    fr: 'Le prototype a été utilisé pour faire évoluer la politique de recrutement de notre client en 2017.',
    en: 'The prototype was used to develop our client\'s recruitment policy in 2017.'
  },
  chapo: {
    fr: 'Favoriser de meilleures stratégies RH en visualisant l’organisation, les compétences et les carrières.',
    en: 'Foster better HR strategies by visualizing the organization, its skill sets and career pathways.'
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
    pics: [imgCarousel1, imgCarousel2, imgCarousel3, imgCarousel4]
  },
  slug: 'cartographie-competences',
  isOnHome: false,
  serviceId: 'decision-tools',
  galleryPics: [
    {
      src: imgGallery1
    },
    {
      src: imgGallery2
    }
  ]
}

export default DVCartographieCompetences
export { infosDVCartographieCompetences }
