import React from 'react'
import { useParams } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'

import LANG from '../../../../common/wording/lang'
import { Paragraph1 } from '../../../../components/Paragraphs'

import {
  Chapo,
  SectionTitle,
  Section,
  SectionImage,
  Img,
  ImgLegend
} from '../../../../components/PieceOfWork/Gallery/shared'
import LongVideo from '../../../../components/PieceOfWork/LongVideo'

// Images Gallery
import imgGallery1 from '././assets/gallery/bitcoin_gallery_0001.jpg'
import imgGallery2 from '././assets/gallery/bitcoin_gallery_0002.jpg'
import imgGallery3 from '././assets/gallery/bitcoin_gallery_0003.jpg'

// images body
import imgBody1 from '././assets/body/bitcoin_img_0001.jpg'
import imgBody2 from '././assets/body/bitcoin_img_0002.jpg'

// images carousel
import imgCarousel1 from '././assets/carousel/bitcoin_img_carousel_0001.jpg'
import imgCarousel2 from '././assets/carousel/bitcoin_img_carousel_0002.jpg'
import imgCarousel3 from '././assets/carousel/bitcoin_img_carousel_0003.jpg'

const DVBitcoinVisualizer = ({ isDarkTheme }) => {
  const { lang } = useParams()
  const isFr = lang === LANG.FR.SLUG
  return (
    <>
      <Section>
        <Chapo>
          {
            isFr
              ? 'Nous avons conçu et développé une visualisation ambiante pour montrer aux spectateurs la blockchain Bitcoin, ses transactions et ses blocs. Cette expérience rend visible le rythme de vie de la blockchain, comme la création de nouveaux blocs et l’absorption des transactions en leur sein. Au croisement des compétences de JanoRoze, ce projet montre comment une visualisation esthétique peut aider à faire comprendre des concepts complexes.'
              : 'We designed and developed an ambient visualization to explain the Bitcoin blockchain, and to show viewers its transactions and blocks. It makes the pace of blockchain more visible and demonstrates the creation of new blocks and the absorption of transactions within them. This project showcases our vast skill sets to show how an aesthetic visualization can help explain complex concepts.'
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
              ? 'Les cryptomonnaies et la blockchain sont des concepts méconnus et difficiles à vulgariser. Comment les faire comprendre au grand public sans les déformer, tout en apportant de l’information utile\u00A0?'
              : 'Cryptocurrencies and blockchain are still largely obscure concepts and they can be difficult to make accessible to mainstream audiences. How can we help people to better understand these concepts and what information can we use to make this possible?'
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
              ? 'Nous avons développé un serveur connecté à l’API de Bitcoin. Pour cela, nous avons dû initier notre propre nœud Bitcoin sur le réseau. Grâce à ce serveur, nous avons ensuite pu récupérer en temps réel tous les évènements de la blockchain, comme par exemple la création de blocs ou les transactions non-confirmées.'
              : 'We developed a server connected to the Bitcoin API by initiating our own Bitcoin node on the network. Thanks to this server, we were then able to retrieve all blockchain events—such as the creation of blocks and unconfirmed transactions—in real time.'
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
                ? 'Chaque barre verticale représente un bloc de blockchain Bitcoin. Les blocs sont triés par ordre chronologique, les plus récents à droite et les plus anciens à gauche.'
                : 'Each vertical bar represents a block in the Bitcoin blockchain. The blocks are sorted in chronological order, the most recent on the right and the oldest on the left.'
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
              ? 'Les cryptomonnaies et la blockchain étant des sujets peu ou mal connus, nous avons dû rendre la visualisation d’autant plus attirante. C’est pourquoi nous avons développé une visualisation esthétique en 3D, ne montrant qu’une partie de la blockchain et de ses concepts. En combinant notre expertise technique, notre capacité à simplifier un problème complexe, et un design soigné, nous avons rendu la blockchain tangible et accessible.'
              : 'We had to make our visualization all the more attractive given that cryptocurrencies and blockchain are little known subjects. That’s why we developed an aesthetic 3D visualization showing only part of the blockchain and its concepts. We combined a careful design with our technical expertise and our experience simplifying complex problems to make the blockchain world more tangible and accessible.'
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
                ? 'Dans l’attente d’un nouveau bloc, des transactions non-confirmées s’accumulent sous forme de particules à droite de l’écran. Dès qu’un nouveau bloc est créé, ces transactions y sont absorbées et disparaissent avec une animation.'
                : 'While waiting for a new block, unconfirmed transactions accumulate in the form of particles on the right-hand side of the screen. As soon as a new block is created, these transactions are absorbed and disappear by way of an animation.'
            }
          </ImgLegend>
        </Section>
      </Section>
      <Section>
        <SectionTitle>
          <FormattedMessage id='project-body-main-point' />
        </SectionTitle>
        <Paragraph1>
          {
            isFr
              ? 'Cette visualisation était destinée à un événement ponctuel, une conférence d’une dizaine de minutes au Live Magazine, et devait donc se marier avec un exposé oral. Nous avons fait une capture vidéo de l’application à un moment intéressant, et l’avons synchronisé avec le script de la conférence. Les explications orales ont ainsi aidé les visiteurs à comprendre la visualisation.'
              : 'The visualization was designed for a one-off event—a 10-minute conference at Live Magazine—and it had to be combined with an oral presentation. We took a screen recording of the app at a key moment and synchronized this with the conference script to help reinforce understanding of the visualization alongside the oral explanations.'
          }
        </Paragraph1>
      </Section>
      <Section>
        <LongVideo uri='428090354' />
      </Section>
    </>
  )
}

const infosDVBitcoinVisualizer = {
  component: DVBitcoinVisualizer,
  label: {
    fr: 'Bitcoin Blockchain Visualizer',
    en: 'Bitcoin Blockchain Visualizer'
  },
  theme: {
    isDark: true
  },
  video: '424103968',
  date: {
    fr: '2017',
    en: '2017'
  },
  results: {
    fr: 'La visualisation a été projetée devant des milliers de spectateurs au Casino de Paris, lors du Live Magazine de septembre 2017.',
    en: 'The visualization was projected in front of thousands of spectators during the September 2017 edition of Live Magazine at Casino de Paris.'
  },
  chapo: {
    fr: 'Visualiser en temps réel le rythme de la blockchain Bitcoin, pour expliquer ses concepts.',
    en: 'Explain the basic concept of the Bitcoin blockchain by visualizing it in real time.'
  },
  category: {
    fr: 'Prototype',
    en: 'Prototype'
  },
  carousel: {
    isBig: false,
    pics: [imgCarousel1, imgCarousel2, imgCarousel3]
  },
  slug: 'bitcoin-visualizer',
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

export default DVBitcoinVisualizer
export { infosDVBitcoinVisualizer }
