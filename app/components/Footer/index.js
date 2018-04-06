import React from 'react'
import { FormattedMessage } from 'react-intl'
import messages from './messages'
import {Wrapper, WrapperInfo, WrapperCopy, Text } from './styles'
import { Main } from '../../globals/components'

const Footer = () => (
  <Wrapper>
    <WrapperInfo>
      <Main className="container-fluid">
        <div className="row">
          <div className="col-md-5">
            <Text><FormattedMessage {...messages.locationName} /></Text>
            <Text><FormattedMessage {...messages.locationAddress} /></Text>
            <Text><FormattedMessage {...messages.locationHotline} />: 0439336570</Text>
            <Text><FormattedMessage {...messages.locationEmail} />: info@ntbic.com</Text>
          </div>
          <div className="col-md-4">
            <Text list><FormattedMessage {...messages.dataProfiles} /></Text>
            <Text list><FormattedMessage {...messages.dataPatents} /></Text>
            <Text list><FormattedMessage {...messages.dataCompanies} /></Text>
            <Text list><FormattedMessage {...messages.dataProducts} /></Text>
            <Text list><FormattedMessage {...messages.dataProjects} /></Text>
          </div>
          <div className="col-md-3">
            <Text><FormattedMessage {...messages.guideLine} /></Text>
            <Text><FormattedMessage {...messages.intro} /></Text>
          </div>
        </div>
      </Main>
    </WrapperInfo>
    <WrapperCopy>
      <Text>Copyright &copy; 2016 csdl.ntbic.com</Text>
    </WrapperCopy>
  </Wrapper>
)

Footer.propTypes = {}

export default Footer
