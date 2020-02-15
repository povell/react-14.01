import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Header} from '../components/Header/Header';

const mapStateToProps = ({profileReducer}) => {
    return {
        name: profileReducer.name
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps/*, mergeProps*/)(Header);