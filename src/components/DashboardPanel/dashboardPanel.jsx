import React from 'react';

import DashboardElement from '../DashboardElement';
import { useDashboardElementsContext } from '../../context/DashboardElements';

import classes from './dashboardPanel.module.css';

const DashboardPanel = () => {
    const [{ elements }] = useDashboardElementsContext();

    const dashboardElements = elements.length
        ? elements.map(element => (
              <DashboardElement element={element} key={element.id} />
          ))
        : null;

    return <div className={classes.root}>{dashboardElements}</div>;
};

export default DashboardPanel;
