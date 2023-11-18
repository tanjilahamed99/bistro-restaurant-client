
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useNavigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const navigate = useNavigate()

    const { user, loading } = useContext(AuthContext)
    if (loading) {
        return <progress className="progress w-56"></progress>
    }
    if (user) {
        return children
    }
    else {
        return <Navigate to={'/'}></Navigate>
    }
};

PrivateRoute.propTypes = {
    children: PropTypes.node
};

export default PrivateRoute;