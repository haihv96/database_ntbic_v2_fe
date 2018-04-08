import React from 'react'
import { Main} from '../../globals/components'
import SearchArea from '../../components/SearchArea'
import PieChar from '../PieChart'
import ProfileSlider from '../HotProfileSlider'

const HomePage = () => (
  <div>
    <SearchArea />
    <Main>
      <PieChar />
      <ProfileSlider />
    </Main>
  </div>
)

export default HomePage
