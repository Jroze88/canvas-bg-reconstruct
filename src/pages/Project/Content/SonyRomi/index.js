import React from 'react'
import { useParams } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'
import Link from '../../../../components/Links'

// images body
import imgBody1 from '././assets/body/romi_img_0001.jpg'
import imgBody2 from '././assets/body/romi_img_0002.jpg'
import imgBody3 from '././assets/body/romi_img_0003.jpg'
import imgBody4 from '././assets/body/romi_img_0004.jpg'
import imgBody5 from '././assets/body/romi_img_0005.jpg'

// images carousel
import imgCarousel1 from '././assets/carousel/romi_img_carousel_0001.jpg'
import imgCarousel2 from '././assets/carousel/romi_img_carousel_0002.jpg'
import imgCarousel3 from '././assets/carousel/romi_img_carousel_0003.jpg'
import imgCarousel4 from '././assets/carousel/romi_img_carousel_0004.jpg'

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
import GIFVideo from '../../../../components/PieceOfWork/GIFVideo'

const SonyRomi = () => {
  const { lang } = useParams()
  const isFr = lang === LANG.FR.SLUG
  return (
    <>
      <Section>
        <Chapo>
          {
            isFr
              ? 'Nous avons doté le projet ROMI Plant Viewer d\'un outil d\'analyse visuelle en 3D qui accélère les vérifications des mesures des plantes. Il aide ainsi les chercheurs à diagnostiquer le développement de ces plantes plus efficacement, et à améliorer leurs algorithmes de reconnaissance d\'image.'
              : 'We have provided the ROMI Plant Viewer project with a 3D visual analysis tool to help speed up the verification of plant measurements. It helps researchers diagnose crop development more efficiently and improve their image recognition algorithms.'
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
              ? 'La plateforme du projet de recherche ROMI fournit des outils ouverts pour aider les communautés d\'agriculture biologique et de polyculture à surveiller leurs récoltes. Parmi ces outils, des algorithmes de reconnaissance d\'image permettent d\'extraire des modèles 3D et des mesures depuis des photos des plantes. Les résultats de ces algorithmes ne sont pas directement lisibles, et nécessitent une interface pour être compris, vérifiés et exploités. Sony Computer Science Lab nous a confié la réalisation de cette interface.'
              : 'The ROMI platform provides open-source tools to help organic and polyculture farming communities monitor their crops. Among these tools, image recognition algorithms can be used to extract measurements from the collected plant scans. The results of these algorithms are not directly readable, and require an interface to be understood, verified and processed. Sony Computer Science Lab entrusted us with the creation of this interface.'
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
                ? 'L\'outil Romi Scan encourage les chercheurs de différents laboratoires de collaborer autour des algorithmes de mesure automatique des plantes.'
                : 'The Romi Scan tool allows researchers from different laboratories to collaborate on automatic plant measurement algorithms.'
            }
          </ImgLegend>
        </Section>
        <SectionImage>
          <Img hasBorder src={imgBody4} />
        </SectionImage>
      </Section>
      <Section>
        <SectionTitle>
          <FormattedMessage id='project-body-data' />
        </SectionTitle>
        <Paragraph1>
          {
            isFr
              ? 'Les données utilisées proviennent d\'expériences en laboratoires, où des plantes sont mesurées à l\'aide d\'une boîte de photogrammétrie. À l\'avenir, ces mesures pourront être prises par des robots et des drones légers directement dans les champs.'
              : 'Currently, the data used comes from laboratory experiments, in which plants are measured using a photogrammetry box. In the future, these measurements will be taken by robots and light drones directly in the fields.'
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
                ? 'Avec les panneaux, les chercheurs peuvent vérifier les distances entre les nœuds et les angles de divergence pour analyser le développement des plantes.'
                : 'Using the visual analytics tool, researchers can check internode distances and divergence angles to analyze plant development.'
            }
          </ImgLegend>
        </Section>
        <SectionImage>
          <Img hasBorder src={imgBody5} />
        </SectionImage>
      </Section>
      <Section>
        <SectionTitle>
          <FormattedMessage id='project-body-method' />
        </SectionTitle>
        <Paragraph1>
          {
            isFr
              ? 'La capacité à restituer les données en 3D et à les faire correspondre aux photos de scans des plantes était cruciale pour ce projet. Nous avons donc fait des tests de rendu 3D dès le lancement, pour lever rapidement les risques techniques. Dans un deuxième temps, nous avons approfondi l\'ergonomie et l\'expérience utilisateur de l\'interface réalisant des wireframes.'
              : 'The ability to render data in 3D and match it to the plant scans was crucial for this project. We therefore carried out 3D rendering tests right from the start, to quickly assess technical feasibility. We then focused on developing the interface’s usability and user experience by making wireframes.'
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
                ? 'Les experts peuvent vérifier la qualité des scans de photogrammétrie avec différents modes de vue\u00A0: une vue Mesh, une vue Point Cloud, une vue Skeleton et une vue Organs.'
                : 'Experts can verify the quality of the photogrammetric scans using several view modes: a Mesh view, a Point Cloud view, a Skeleton view, and an Organs view.'
            }
          </ImgLegend>
        </Section>
        <Section>
          <GIFVideo uri='429919325' formatPercent={89.44} />
        </Section>
      </Section>
      <Section>
        <SectionTitle>
          <FormattedMessage id='project-body-solution' />
        </SectionTitle>
        <Paragraph1>
          {
            isFr
              ? 'Nous avons utilisé la représentation 3D et la visualisation interactive des données pour aider les chercheurs à vérifier rapidement la qualité des scans de photogrammétrie. Nous avons conçu l\'interface pour qu\'elle facilite la comparaison entre les données collectées de façon automatisées et les mesures manuelles. Les chercheurs peuvent ainsi rapidement identifier des problèmes de détection au sein de leurs algorithmes, et les améliorer.'
              : 'We used 3D modeling and interactive data visualization to help researchers quickly check the quality of photogrammetric scans. We designed the interface to make it easy to compare automatically collected data with manual measurements. This allows researchers to swiftly identify problems within their algorithms and improve them.'
          }
        </Paragraph1>
      </Section>
      <Section>
        <GIFVideo hasBorder uri='429919299' />
      </Section>
      <Section>
        <SectionTitle>
          <FormattedMessage id='project-body-main-point' />
        </SectionTitle>
        <Paragraph1>
          {
            isFr
              ? 'L\'interface permet aux chercheurs de gagner un temps significatif dans l\'analyse des résultats de leurs algorithmes. Elle améliore aussi leur confort de travail, et leur permet de se concentrer sur l\'information essentielle. Enfin, l\'outil encourage la collaboration entre les chercheurs, en centralisant les mesures et les expériences réalisées dans différents laboratoires.'
              : 'The interface allows researchers to save significant time when analyzing the results of their algorithms. Furthermore, it improves their working comfort and allows them to focus on essential information. Finally, the tool promotes collaboration between researchers by centralizing measurements and experiments carried out in different laboratories.'
          }
        </Paragraph1>

        <Paragraph1>
          {
            isFr
              ? 'ROMI fait partie du programme de recherche et d\'innovation de l\'Union Européenne “Horizon 2020”  (convention de subvention n ° 773875). Le code source du  projet a été rendu public sur '
              : 'ROMI is part of the European Union’s research and innovation program “Horizon 2020” (grant agreement ID: 773875). The project’s source code has been made public on '
          }
          <Link target='_blank' href='https://github.com/romi/3d-plantviewer'>https://github.com/romi/3d-plantviewer.</Link>
        </Paragraph1>
      </Section>
      <Section marginBottom='spacingXL'>
        <LongVideo uri='428084690' />
      </Section>
    </>
  )
}

const infosSonyRomi = {
  component: SonyRomi,
  client: {
    fr: 'ENS-Lyon/CNRS, Sony CSL, Inria',
    en: 'ENS-Lyon/CNRS, Sony CSL, Inria'
  },
  label: {
    fr: 'Romi Plant Viewer',
    en: 'Romi Plant Viewer'
  },
  theme: {
    isDark: true,
    background: '#124334'
  },
  video: '427640814',
  results: {
    fr: 'Le temps pour comparer mesures automatiques et mesures manuelles a été divisé par 4.',
    en: 'The time to compare automatic and manual measurements has been divided by 4.'
  },
  chapo: {
    fr: 'Aider à diagnostiquer le développement des plantes en accélérant la collecte et la vérification de leurs mesures.',
    en: 'Enhancing the diagnostics of crop development by speeding up the verification of their measurements.'
  },
  category: {
    fr: 'Application',
    en: 'Application'
  },
  date: {
    fr: '2019 - 2 mois',
    en: '2019 - 2 months'
  },
  src: {
    url: 'https://romi-project.eu/',
    label: 'https://romi-project.eu/'
  },
  carousel: {
    isBig: false,
    pics: [imgCarousel1, imgCarousel4, imgCarousel3, imgCarousel2]
  },
  slug: 'sony-romi',
  isOnHome: true,
  serviceId: 'decision-tools',
  galleryPics: []
}

export default SonyRomi
export { infosSonyRomi }
