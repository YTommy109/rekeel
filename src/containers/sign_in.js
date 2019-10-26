import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import SignInPage from '~/l5_pages/sign_in'
import {updateText} from '~/modules/sign_in'

const mapStateToProps = state => ({signin: state.signin})

const mapDispatchToProps = dispatch => ({
  action: () => bindActionCreators({
    updateText
  }, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInPage)
