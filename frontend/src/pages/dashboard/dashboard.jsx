import React from 'react'
import { useHistory } from 'react-router';
import { Link } from "react-router-dom";

//The react-router property useHistory is applied to make it easier to got back to the last page/url

const Dashboard = () => {
    const history = useHistory();
    return (
        <div>
            <button onClick={() => history.push('/student/create')}>Add Student</button>

            {/* temporary link to first project or first student */}
            <Link to={"/projects/0/0"} >
                <br /><br />
                <h4>Projects: Student 1</h4>
            </Link>
        </div>
    )
}

export default Dashboard;
