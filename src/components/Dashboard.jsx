import useAuth from "../hooks/useAuth";

const Dashboard = () => {
    const { user } = useAuth();
    return (
        <div>Current user is : {user?.email ? user.email : 'Guest'}</div>
    )
}

export default Dashboard;
