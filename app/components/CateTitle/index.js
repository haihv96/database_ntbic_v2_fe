import React from 'react'
import PropTypes from 'prop-types'
import { Wrapper, Text } from './styles'

const CateTitle = ({ title }) => (
  <Wrapper>
    <Text>
      {title}
    </Text>
  </Wrapper>
)

CateTitle.propTypes = {
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
}

export default CateTitle
