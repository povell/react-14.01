import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Profile} from '../components/Profile/Profile';

const mapStateToProps = ({profileReducer}, ownProps) => {
    return {
        name: profileReducer.user.name
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);