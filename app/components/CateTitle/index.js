import React from 'react'
import PropTypes from 'prop-types'
import { Wrapper } from './styles'

const CateTitle = ({ title }) => (
  <Wrapper>
    {title}
  </Wrapper>
)

CateTitle.propTypes = {
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
}

export default CateTitle
