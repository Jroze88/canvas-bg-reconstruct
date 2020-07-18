import { IntlProvider } from 'react-intl'
import { withRouter } from 'react-router-dom'
import { compose, withProps } from 'recompose'

// import messagesFr from '../wording/fr.json'
// import messagesEn from '../wording/en.json'

// const messages = {
//   fr: messagesFr,
//   en: messagesEn
// }

const messages = null

export default compose(
  withRouter,
  withProps(props => {
    // const {
    //   params: { lang }
    // } = props.match
    // return { locale: lang, messages: messages[lang] }
    return { locale: null, messages: null }
  })
)(IntlProvider)
