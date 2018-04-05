import styled from 'styled-components'
import vars from '../../globals/vars'
import {
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarToggler,
  Navbar,
} from 'reactstrap'

const CustomNavbar = styled(Navbar) `
  background: ${vars.blue};
  && {
    @media only screen and (min-width: 768px)  {
      height: 55px;
    }
  }
`

const CustomDropdownToggle = styled(DropdownToggle) `
  color: ${vars.white};
  font-size: 18px;
  && {
    padding-left: 8px;
  }
  &:hover, &:active {
    color: ${vars.white};
    background: ${vars.lightBlue};
  }
`

const CustomDropdownMenu = styled(DropdownMenu) `
  border-radius: 0;
  padding: 0;
`

const CustomDropdownItem = styled(DropdownItem) `
  padding: 10px;
  cursor: pointer;
  font-size: 18px;
  &:hover {
    background: ${vars.lightGrey};
  }
   &:active {
    background: ${vars.lightBlue};
  }
`

const CustomNavbarToggler = styled(NavbarToggler) `
  &:first-child {
    color: ${vars.white};
  }
`

const Flag = styled.img `
  width: 55px;
  margin-right: 5px;
`

const FlagSelect = styled.img `
  width: 40px;
  margin-right: 5px;
`

export {
  CustomNavbar,
  CustomDropdownToggle,
  CustomDropdownMenu,
  CustomDropdownItem,
  CustomNavbarToggler,
  Flag,
  FlagSelect,
}
