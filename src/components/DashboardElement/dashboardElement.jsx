import React from 'react';

import Toggle from 'react-toggle';
import 'react-toggle/style.css';
import { ReactComponent as Battery } from '../../static/icons/battery.svg';

import classes from './dashboardElement.module.css';

function DashboardElement() {
    const handleBaconChange = event => {
        console.log('changed');
        console.log(event.target.checked);
    };

    return (
        <div className={classes.root}>
            <span className={classes.name}>THR08</span>
            <div className={classes.lightIndicators}>
                <div className={classes.lightIndicatorOn} />
                <div className={classes.lightIndicatorOn} />
                <div className={classes.lightIndicatorOff} />
                <div className={classes.lightIndicatorOff} />
                <div className={classes.lightIndicatorOff} />
            </div>
            <div className={classes.powerSettings}>
                <button className={classes.increaseButton}>+</button>
                <div className={classes.value}>0%</div>
                <button className={classes.decreaseButon}>-</button>
            </div>
            <div className={classes.right}>
                <div className={classes.timeLeft}>
                    <div className={classes.timeLeftWrapper}>
                        <Battery className={classes.timeLeftIcon} />
                        Time left
                    </div>
                </div>
                <div className={classes.switches}>
                    <label className={classes.switch}>
                        <span>Night Vision</span>
                        <Toggle
                            defaultChecked={false}
                            onChange={handleBaconChange}
                        />
                    </label>
                    <label className={classes.switch}>
                        <span>Dust Till Dawn</span>
                        <Toggle
                            defaultChecked={false}
                            onChange={handleBaconChange}
                        />
                    </label>
                    <label className={classes.switch}>
                        <span>Flashing</span>
                        <Toggle
                            defaultChecked={false}
                            onChange={handleBaconChange}
                        />
                    </label>
                </div>
            </div>
        </div>
    );
}

export default DashboardElement;
