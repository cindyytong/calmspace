import { connect } from 'react-redux';
import AuthNavBar from './authnavbar';
import { logout } from '../../actions/session_actions';


const mapStateToProps = (state) => {
    if (state.session.memberType === 'User'){
        return { currentUser: state.entities.users[state.session.currentUserId] }
    } else {
        return { currentUser: state.entities.therapist[state.session.currentUserId] }
    }
};

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthNavBar)