import React, {
    createContext,
    useContext,
    useMemo,
    useCallback,
    useState
} from 'react';

const DashboardElementsContext = createContext();

const INITIAL_ELEMENTS = [
    {
        id: 1,
        name: 'APH 08',
        nv: true,
        dtd: false,
        flashing: false,
        power: 0,
        timeLeft: 500
    },
    {
        id: 2,
        name: 'THR 08',
        nv: false,
        dtd: true,
        flashing: false,
        power: 1,
        timeLeft: 500
    },
    {
        id: 3,
        name: 'PAPI 08',
        nv: false,
        dtd: false,
        flashing: true,
        power: 3,
        timeLeft: 500
    },
    {
        id: 4,
        name: 'RWE REH',
        nv: false,
        dtd: false,
        flashing: false,
        power: 11,
        timeLeft: 500
    },
    {
        id: 5,
        name: 'SFL 26',
        nv: false,
        dtd: false,
        flashing: false,
        power: 33,
        timeLeft: 500
    },
    {
        id: 6,
        name: 'APH 26',
        nv: false,
        dtd: false,
        flashing: false,
        power: 100,
        timeLeft: 500
    },
    {
        id: 7,
        name: 'THR 26',
        nv: false,
        dtd: false,
        flashing: false,
        power: 0,
        timeLeft: 500
    },
    {
        id: 8,
        name: 'PAPI 26',
        nv: false,
        dtd: false,
        flashing: false,
        power: 0,
        timeLeft: 500
    },
    {
        id: 9,
        name: 'TWY USR',
        nv: false,
        dtd: false,
        flashing: false,
        power: 0,
        timeLeft: 500
    }
];

const DashboardElementsProvider = ({ children }) => {
    const [elements, setElements] = useState(INITIAL_ELEMENTS);
    const [loading, setLoading] = useState(false);

    const state = useMemo(
        () => ({
            elements,
            loading
        }),
        [elements, loading]
    );

    //simulate connection with server
    const simulateConnection = nextElements => {
        const rand = Math.floor(Math.random() * (6 - 1 + 1) + 1);

        if (rand >= 5) {
            setTimeout(() => {
                setElements(nextElements);
                setLoading(false);
            }, 1000);
        } else {
            setTimeout(() => {
                setElements(nextElements);
                setLoading(false);
            }, 100);
        }
    };

    const toggleSwitch = useCallback(
        (id, field) => {
            setLoading(true);
            const nextElements = elements.map(element => {
                if (element.id === id) {
                    return { ...element, [field]: !element[field] };
                } else {
                    return element;
                }
            });
            simulateConnection(nextElements);
        },
        [elements]
    );

    const increasePower = useCallback(
        id => {
            setLoading(true);

            const nextElements = elements.map(element => {
                if (element.id === id && element.power < 100) {
                    if (element.power < 1) {
                        return { ...element, power: 1 };
                    } else if (element.power < 3) {
                        return { ...element, power: 3 };
                    } else if (element.power < 10) {
                        return { ...element, power: 10 };
                    } else if (element.power < 30) {
                        return { ...element, power: 30 };
                    } else {
                        return { ...element, power: 100 };
                    }
                } else {
                    return element;
                }
            });
            simulateConnection(nextElements);
        },
        [elements]
    );

    const decreasePower = useCallback(
        id => {
            setLoading(true);

            const nextElements = elements.map(element => {
                if (element.id === id || element.power === 0) {
                    if (element.power <= 1) {
                        return { ...element, power: 0 };
                    } else if (element.power <= 3) {
                        return { ...element, power: 1 };
                    } else if (element.power <= 10) {
                        return { ...element, power: 3 };
                    } else if (element.power <= 30) {
                        return { ...element, power: 10 };
                    } else {
                        return { ...element, power: 30 };
                    }
                } else {
                    return element;
                }
            });
            simulateConnection(nextElements);
        },
        [elements]
    );

    const actions = useMemo(
        () => ({ decreasePower, increasePower, toggleSwitch }),
        [decreasePower, increasePower, toggleSwitch]
    );

    const contextValue = useMemo(() => [state, actions], [state, actions]);

    return (
        <DashboardElementsContext.Provider value={contextValue}>
            {children}
        </DashboardElementsContext.Provider>
    );
};

export default DashboardElementsProvider;

export const useDashboardElementsContext = () =>
    useContext(DashboardElementsContext);
