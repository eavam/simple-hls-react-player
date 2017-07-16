import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import TopControls from '../../components/TopControls'
import { getTitle } from '../../selectors'

const mapStateToProps = createStructuredSelector({
  title: getTitle
})

export default connect(mapStateToProps)(TopControls)
