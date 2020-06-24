import React from 'react';

import AddTask from './AddTask';
import Card from './Card';
import './Dashboard.css';

class Dashboard extends React.Component{

    render(){
        return(
            <div className='container-dashboard'>
                <AddTask />
                <Card name="NAME" rating="RAT" duration="DUR" />

            </div>
        );
    }

}

export default Dashboard;
