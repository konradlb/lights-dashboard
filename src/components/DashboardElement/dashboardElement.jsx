import React from 'react';

import Toggle from 'react-toggle';
import 'react-toggle/style.css';
import { ReactComponent as Battery } from '../../static/icons/battery.svg';

import classes from './dashboardElement.module.css';

const DashboardElement = props => {
    const { element, funs } = props;

    const {
        toggleNV,
        toggleDTD,
        toggleFlashing,
        increasePower,
        decreasePower
    } = funs;

    const { id, name, nv, dtd, flashing, power, timeLeft } = element;

    const indicator1Class =
        power >= 1 ? classes.lightIndicatorOn : classes.lightIndicatorOff;
    const indicator2Class =
        power >= 3 ? classes.lightIndicatorOn : classes.lightIndicatorOff;
    const indicator3Class =
        power >= 10 ? classes.lightIndicatorOn : classes.lightIndicatorOff;
    const indicator4Class =
        power >= 30 ? classes.lightIndicatorOn : classes.lightIndicatorOff;
    const indicator5Class =
        power >= 100 ? classes.lightIndicatorOn : classes.lightIndicatorOff;

    return (
        <div className={classes.root}>
            <span className={classes.name}>{name}</span>
            <div className={classes.lightIndicators}>
                <div className={indicator1Class} />
                <div className={indicator2Class} />
                <div className={indicator3Class} />
                <div className={indicator4Class} />
                <div className={indicator5Class} />
            </div>
            <div className={classes.powerSettings}>
                <button
                    className={classes.increaseButton}
                    onClick={() => {
                        increasePower(id);
                    }}
                >
                    +
                </button>
                <div className={classes.value}>{power}%</div>
                <button
                    className={classes.decreaseButon}
                    onClick={() => {
                        decreasePower(id);
                    }}
                >
                    -
                </button>
            </div>
            <div className={classes.right}>
                <div className={classes.timeLeft}>
                    <div className={classes.timeLeftWrapper}>
                        <Battery className={classes.timeLeftIcon} />
                        Time left: {timeLeft} s
                    </div>
                </div>
                <div className={classes.switches}>
                    <label className={classes.switch}>
                        <span>Night Vision</span>
                        <Toggle
                            checked={nv}
                            onChange={() => {
                                toggleNV(id);
                            }}
                        />
                    </label>
                    <label className={classes.switch}>
                        <span>Dust Till Dawn</span>
                        <Toggle
                            checked={dtd}
                            onChange={() => {
                                toggleDTD(id);
                            }}
                        />
                    </label>
                    <label className={classes.switch}>
                        <span>Flashing</span>
                        <Toggle
                            checked={flashing}
                            onChange={() => {
                                toggleFlashing(id);
                            }}
                        />
                    </label>
                </div>
            </div>
        </div>
    );
};

export default DashboardElement;
