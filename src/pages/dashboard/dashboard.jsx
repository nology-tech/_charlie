import React from 'react'
import { useHistory } from 'react-router';

//The react-router property useHistory is applied to make it easier to got back to the last page/url

const Dashboard = () => {
    const history = useHistory();
    return (
        <div>
            <button onClick={() => history.push('/student-details')}>Add Student</button>
        </div>
    )
}

export default Dashboard;
