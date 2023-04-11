import React from 'react';

import DashboardElement from '../DashboardElement';
import { useDashboardPanel } from '../../talons/DashboardPanel/useDashboardPanel';
import classes from './dashboardPanel.module.css';

const DashboardPanel = () => {
    const { elements, loading, toggleSwitch, increasePower, decreasePower } =
        useDashboardPanel();

    const dashboardElements = elements.length
        ? elements.map(element => (
              <DashboardElement
                  element={element}
                  key={element.id}
                  loading={loading}
                  toggleSwitch={toggleSwitch}
                  increasePower={increasePower}
                  decreasePower={decreasePower}
              />
          ))
        : null;

    return <div className={classes.root}>{dashboardElements}</div>;
};

export default DashboardPanel;
