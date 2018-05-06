import React from 'react'
import ReactPaginate from 'react-paginate'
import { withRouter } from 'react-router-dom'
import queryString from 'query-string'
import { animateScroll } from 'react-scroll'
import { Wrapper } from './styles'

class TablePagination extends React.PureComponent {
  handlePageChange = ({ selected }) => {
    const searchQuery = this.props.location.search
    const searchObject = queryString.parse(searchQuery)
    const page = selected + 1
    this.props.history.push(`/search/?${queryString.stringify({ ...searchObject, page })}`)
    animateScroll.scrollToTop({ duration: 1000 })
  }

  render() {
    const { total, location: { search } } = this.props
    const { page } = queryString.parse(search)
    return (
      <Wrapper>
        <ReactPaginate
          previousLabel={"previous"}
          nextLabel={"next"}
          breakLabel={<a className="page-link">...</a>}
          breakClassName="page-item"
          pageClassName="page-item"
          previousClassName="page-item"
          nextClassName="page-item"
          pageLinkClassName="page-link"
          previousLinkClassName="page-link"
          nextLinkClassName="page-link"
          pageCount={total}
          forcePage={page ? page - 1 : 0}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.handlePageChange}
          containerClassName={"pagination"}
          activeClassName={"active"}
        />
      </Wrapper>
    )
  }
}

export default withRouter(TablePagination)
