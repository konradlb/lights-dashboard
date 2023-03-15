import React from 'react';

import DashboardElement from '../DashboardElement';
import classes from './dashboardPanel.module.css';

function DashboardPanel() {
    return (
        <div className={classes.root}>
            <DashboardElement />
        </div>
    );
}

export default DashboardPanel;
