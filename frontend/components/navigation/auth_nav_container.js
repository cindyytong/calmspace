import { connect } from 'react-redux';
import AuthNavBar from './authnavbar';
import { logout } from '../../actions/session_actions';


const mapStateToProps = (state) => {
    return {
        therapists: state.entities.therapist,
        users: state.entities.users, 
        session: state.session
    }
};

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthNavBar)