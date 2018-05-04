import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { injectIntl } from 'react-intl'
import { compose } from 'redux'
import _ from 'lodash'
import messages from './messages'
import injectSaga from '../../../utils/injectSaga'
import injectReducer from '../../../utils/injectReducer'
import reducer from './reducer'
import saga from './saga'
import { Wrapper, AminateFadeInWrapper, WapperLoading } from './styles'
import {
  selectProductsLoading,
  selectProductsData,
} from './selectors'
import { loadProducts } from './actions'
import { changePaginationParam } from '../../FormSearchInput/PaginationParam/actions'
import SearchResultCate from '../../../components/SearchResultCate'
import ProductsTable from '../../../components/ProductsTable'
import CircularLoading from '../../../components/CircularLoading'
import TablePagination from '../../../components/TablePagination'

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
      <CircularLoading haveBackground size={200} />
    </WapperLoading>
  )

  renderProducts = productsData => (
    <AminateFadeInWrapper>
      <SearchResultCate
        dataType={this.props.intl.formatMessage(messages.products)}
        results={10}
        time={0.3824782342}
      />
      <ProductsTable data={productsData.data} />
      <TablePagination total={productsData.data.total} />
    </AminateFadeInWrapper>
  )

  render() {
    const { productsLoading, productsData } = this.props
    return (
      <Wrapper>
        {productsLoading && this.renderLoading()}
        {_.isEmpty(productsData) || this.renderProducts(productsData)}
      </Wrapper>
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
  dispatchChangePaginationParam: value => {
    dispatch(changePaginationParam(value))
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
