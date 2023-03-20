import React from 'react';

import DashboardElement from '../DashboardElement';
import { useDashboardPanel } from '../../talons/DashboardPanel/useDashboardPanel';
import classes from './dashboardPanel.module.css';

const DashboardPanel = () => {
    const {
        elements,
        toggleNV,
        toggleDTD,
        toggleFlashing,
        increasePower,
        decreasePower
    } = useDashboardPanel();

    const funs = {
        toggleNV,
        toggleDTD,
        toggleFlashing,
        increasePower,
        decreasePower
    };

    const dashboardElements = elements.length
        ? elements.map(element => (
              <DashboardElement
                  element={element}
                  key={element.id}
                  funs={funs}
              />
          ))
        : null;

    return <div className={classes.root}>{dashboardElements}</div>;
};

export default DashboardPanel;
