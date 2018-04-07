import React from 'react'
import PropTypes from 'prop-types'
import { CircularProgress } from 'material-ui/Progress'
import { Wrapper } from './styles'

const CircularLoading = ({ wrapperHeight, size }) => (
  <Wrapper wrapperHeight={wrapperHeight}>
    <CircularProgress size={size ? size : 50} color="primary" />
  </Wrapper>
)

CircularLoading.propTypes = {
  size: PropTypes.number,
  wrapperHeight: PropTypes.number,
}

export default CircularLoading
