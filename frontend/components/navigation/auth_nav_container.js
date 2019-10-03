import { connect } from 'react-redux';
import AuthNavBar from './authnavbar';
import { logout } from '../../actions/session_actions';


const mapStateToProps = (state) => {
   return { 
       currentUser: state.entities.users[state.session.id]  
    }
};

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthNavBar)