import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { injectIntl } from 'react-intl'
import { compose } from 'redux'
import messages from './messages'
import injectSaga from '../../../utils/injectSaga'
import injectReducer from '../../../utils/injectReducer'
import reducer from './reducer'
import saga from './saga'
import { AminateFadeInWrapper, WapperLoading } from './styles'
import {
  selectProductsLoading,
  selectProductsData,
} from './selectors'
import { loadProducts } from './actions'
import SearchResultCate from '../../../components/SearchResultCate'
import ProductsTable from '../../../components/ProductsTable'
import CircularLoading from '../../../components/CircularLoading'

export class SearchProducts extends React.PureComponent {
  componentWillMount() {
    this.loadProductsData()
  }

  componentWillReceiveProps({ searchQuery }) {
    if (this.props.searchQuery !== searchQuery) {
      this.loadProductsData()
    }
  }

  loadProductsData = () => {
    const { dispatchLoadProducts } = this.props
    dispatchLoadProducts()
  }

  renderLoading = () => (
    <WapperLoading>
      <CircularLoading haveBackground wrapperHeight={300} size={100} />
    </WapperLoading>
  )

  renderProducts = data => (
    <AminateFadeInWrapper>
      <SearchResultCate
        dataType={this.props.intl.formatMessage(messages.products)}
        results={10}
        time={0.3824782342}
      />
      <ProductsTable data={data} />
    </AminateFadeInWrapper>
  )

  render() {
    const {
      productsLoading, productsData,
    } = this.props
    return (
      <div>
        {productsLoading ? this.renderLoading() : this.renderProducts(productsData)}
      </div>
    )
  }
}

SearchProducts.propTypes = {}

const mapStateToProps = createStructuredSelector({
  productsLoading: selectProductsLoading(),
  productsData: selectProductsData(),
})

const mapDispatchToProps = dispatch => ({
  dispatchLoadProducts: () => {
    dispatch(loadProducts())
  },
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)
const withReducer = injectReducer({ key: 'searchProducts', reducer })
const withSaga = injectSaga({ key: 'searchProducts', saga })

export default compose(
  withReducer,
  withSaga,
  withConnect,
  injectIntl,
)(SearchProducts)
