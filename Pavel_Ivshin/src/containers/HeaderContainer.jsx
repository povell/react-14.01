import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Header} from '../components/Header/Header';

const mapStateToProps = ({profileReducer}) => {
    return {
        name: profileReducer.user.name
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
    }, dispatch);
};

// const mergeProps = (stateProps, dispatchProps, ownProps) => {
//     return {
//         ...stateProps,
//     }
// }

export default connect(mapStateToProps, mapDispatchToProps/*, mergeProps*/)(Header);