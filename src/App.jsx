import React from 'react';

import DashboardPanel from './components/DashboardPanel';

import DashboardElementsProvider from './context/DashboardElements';

function App() {
    return (
        <DashboardElementsProvider>
            <DashboardPanel />
        </DashboardElementsProvider>
    );
}

export default App;
