import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { FormattedMessage } from 'react-intl'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'
import _ from 'lodash'
import injectSaga from '../../utils/injectSaga'
import injectReducer from '../../utils/injectReducer'
import { selectHotProfileSliderLoading, selectHotProfileSliderData } from './selectors'
import reducer from './reducer'
import saga from './saga'
import messages from './messages'
import { loadHotProfiles } from './actions'
import { settingSlider } from './utils'
import ProfileCardSlider from '../../components/ProfileCardSlider'
import { Wrapper, CustomSlider, SliderWrapper } from './styles'
import CircularLoading from '../../components/CircularLoading'
import CateTitle from '../../components/CateTitle'

export class HotProfileSlider extends React.PureComponent {
  static propTypes = {
    loading: PropTypes.bool.isRequired,
    data: PropTypes.array.isRequired,
  }

  componentWillMount() {
    this.props.dispatchLoadHotProfiles()
  }

  renderLoading = () => (
    <CircularLoading size={90} wrapperHeight={300} />
  )

  renderProfilesSlider = data => (
    <SliderWrapper>
      <CustomSlider {...settingSlider}>
        {
          _.map(data, value => (
            <ProfileCardSlider {...value} />
          ))
        }
      </CustomSlider>
    </SliderWrapper>
  )

  render() {
    const { loading, data } = this.props
    return (
      <Wrapper>
        <CateTitle title={<FormattedMessage {...messages.cateTitle} />} />
        {loading ? this.renderLoading() : (_.isEmpty(data) || this.renderProfilesSlider(data))}
      </Wrapper>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  loading: selectHotProfileSliderLoading(),
  data: selectHotProfileSliderData(),
});

const mapDispatchToProps = dispatch => ({
  dispatchLoadHotProfiles: () => {
    dispatch(loadHotProfiles())
  },
})

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'hotProfileSlider', reducer });
const withSaga = injectSaga({ key: 'hotProfileSlider', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HotProfileSlider)
