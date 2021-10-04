<<<<<<< HEAD
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
=======
import React from 'react'
import { useHistory } from 'react-router';

//The react-router property useHistory is applied to make it easier to got back to the last page/url

const Dashboard = () => {
    const history = useHistory();
    return (
        <div>
            <button onClick={() => history.push('/student/create')}>Add Student</button>
        </div>
    )
}

export default Dashboard;
>>>>>>> cbecd07b04c91a99afd52bf33b77745c17f44c81
