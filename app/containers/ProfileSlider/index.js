import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { FormattedMessage } from 'react-intl'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'
import injectSaga from 'utils/injectSaga'
import injectReducer from 'utils/injectReducer'
import makeSelectProfileSlider from './selectors'
import reducer from './reducer'
import saga from './saga'
import messages from './messages'
import CateTitle from '../../components/CateTitle'
import ProfileCardSlider from '../../components/ProfileCardSlider'
import { Wrapper, CustomSlider, SliderWrapper } from './styles'

export class ProfileSlider extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const settings = {
      speed: 500,
      dots: true,
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      responsive: [
        {
          breakpoint: 390,
          settings: {
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 980,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 1240,
          settings: {
            slidesToShow: 5,
          },
        },
      ],
    };

    return (
      <Wrapper>
        <CateTitle title="Top STI profiles" />
        <SliderWrapper>
          <CustomSlider {...settings}>
            <ProfileCardSlider />
            <ProfileCardSlider />
            <ProfileCardSlider />
            <ProfileCardSlider />
            <ProfileCardSlider />
            <ProfileCardSlider />
            <ProfileCardSlider />
            <ProfileCardSlider />
            <ProfileCardSlider />
            <ProfileCardSlider />
            <ProfileCardSlider />
            <ProfileCardSlider />
          </CustomSlider>
        </SliderWrapper>
      </Wrapper>
    )
  }
}

// ProfileSlider.propTypes = {
//   dispatch: PropTypes.func.isRequired,
// };
//
// const mapStateToProps = createStructuredSelector({
//   profileslider: makeSelectProfileSlider(),
// });
//
// function mapDispatchToProps(dispatch) {
//   return {
//     dispatch,
//   };
// }
//
// const withConnect = connect(mapStateToProps, mapDispatchToProps);
//
// const withReducer = injectReducer({ key: 'profileSlider', reducer });
// const withSaga = injectSaga({ key: 'profileSlider', saga });
//
// export default compose(
//   withReducer,
//   withSaga,
//   withConnect,
// )(ProfileSlider);
export default ProfileSlider
