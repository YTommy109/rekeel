import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import SignInPage from '~/l5_pages/sign_in'
import {updateText} from '~/modules/sign_in'

const mapStateToProps = state => ({
  ...state.signin
})

const mapDispatchToProps = dispatch => (  // eslint-disable-line
  bindActionCreators({
    updateText
  }, dispatch)
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInPage)
