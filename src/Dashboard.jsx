import React from 'react';

import AddTask from './AddTask';

import './Dashboard.css';

class Dashboard extends React.Component{

    render(){
        return(
            <div className='container-dashboard'>
                <AddTask />

            </div>
        );
    }

}

export default Dashboard;
