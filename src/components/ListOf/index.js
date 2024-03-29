import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
// import { useIntl } from 'react-intl'
import PropTypes from 'prop-types'

import { Paragraph1 } from '../../components/Paragraphs'

const List = styled('ul')(({ theme }) => css`
  margin-bottom: ${theme.spacingM}px;
  margin: 0 0 ${theme.spacingS}px 0;
  padding: 0;
`)
const ListItem = styled('li')(({ theme }) => css`
  margin-bottom: ${theme.spacingXS}px;
  color: ${theme.secondary};
`)
const ListText = styled(Paragraph1)(({ theme }) => css`
  color: ${theme.main};
`)

const ListOf = ({ ids, texts }) => {
  // const intl = useIntl()

  return (
    <List>
      {
        ids
          ? ids.map((d) => (
            <ListItem key={d}>
              <ListText>
                {/* {intl.messages[d]} */}
              </ListText>
            </ListItem>))
          : texts.map((text, index) => (
            <ListItem key={index}>
              <ListText>
                {text}
              </ListText>
            </ListItem>
          ))
      }
    </List>
  )
}

ListOf.propTypes = {
  /** array of ids (for FormattedMessage) */
  ids: PropTypes.arrayOf(PropTypes.string),

  /** array of strings */
  texts: PropTypes.arrayOf(PropTypes.string)
}

export default ListOf
