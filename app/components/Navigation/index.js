import React from 'react'
import { FormattedMessage } from 'react-intl'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { createSelector } from 'reselect'
import messages from './messages'
import { makeSelectLocale } from '../../containers/LanguageProvider/selectors'
import { changeLocale } from '../../containers/LanguageProvider/actions'
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
} from 'reactstrap'
import {
  CustomNavbar,
  CustomDropdownToggle,
  CustomDropdownMenu,
  CustomDropdownItem,
  CustomNavbarToggler,
  Flag,
} from './styles'
import { TextField } from '../../globals/components'
import EnFlag from '../../images/en.png'
import ViFlag from '../../images/vi.png'


class Navigation extends React.PureComponent {
  state = { isOpen: false }

  handleChangeLocale = localeTarget => {
    this.props.dispatchChangeLocale(localeTarget)
    localStorage.setItem('locale', localeTarget)
  }


  navbarToggle = () => {
    console.log(this.state.isOpen)
    this.setState({ isOpen: !this.state.isOpen })
  }

  renderViFlag = () => (
    <span>
      <Flag src={ViFlag} alt="vi-locale" />
      <FormattedMessage {...messages.vi} />
    </span>
  )
  renderEnFlag = () => (
    <span>
      <Flag src={EnFlag} alt="en-locale" />
      <FormattedMessage {...messages.en} />
    </span>
  )

  render() {
    const { locale } = this.props

    return (
      <CustomNavbar expand="md">
        <Link to="/">
          <NavbarBrand>
            <TextField color="white" normal>
              <FormattedMessage {...messages.title} />
            </TextField>
          </NavbarBrand>
        </Link>
        <CustomNavbarToggler onClick={this.navbarToggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <CustomDropdownToggle nav caret>
                {locale === 'en' ? this.renderEnFlag() : this.renderViFlag()}
              </CustomDropdownToggle>
              <CustomDropdownMenu right>
                <CustomDropdownItem onClick={() => this.handleChangeLocale('en')}>
                  <Flag src={EnFlag} alt="en-locale" />
                  <FormattedMessage {...messages.en} />
                </CustomDropdownItem>
                <CustomDropdownItem onClick={() => this.handleChangeLocale('vi')}>
                  <Flag src={ViFlag} alt="vi-locale" />
                  <FormattedMessage {...messages.vi} />
                </CustomDropdownItem>
              </CustomDropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </CustomNavbar>
    )
  }
}

Navigation.propTypes = {}

const mapStateToProps = createSelector(
  makeSelectLocale(),
  (locale) => ({ locale })
)

const mapDispatchToProps = dispatch => ({
  dispatchChangeLocale: locale => {
    dispatch(changeLocale(locale))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)
