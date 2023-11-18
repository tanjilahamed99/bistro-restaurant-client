
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate } from 'react-router-dom';
import UseAdmin from '../Hooks/useAdmin/UseAdmin';

const AdminRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const [isAdmin, isLoading] = UseAdmin()
    if (loading || isLoading) {
        return <progress className="progress w-56"></progress>
    }
    if (user && isAdmin) {
        return children
    }
    else{
        return <Navigate to={'/'}></Navigate>
    }
};

AdminRoutes.propTypes = {
    children: PropTypes.node
};

export default AdminRoutes;