import React from 'react';
import Dashboard from "../pages/Dashboard";
import Users from "../pages/Users";
import Analytics from "../pages/Analytics";
import Cards from "../pages/Cards";
import History from "../pages/History";
import Service from "../pages/Service";

export default function BodyContent({activeButton}) {
    let content;

    switch (activeButton) {
        case 'dashboard':
            content = <Dashboard/>;
            break;
        case 'users':
            content = <Users/>;
            break;
        case 'analytics':
            content = <Analytics/>;
            break;
        case 'cards':
            content = <Cards/>;
            break;
        case 'history':
            content = <History/>;
            break;
        case 'service':
            content = <Service/>;
            break;

        default:
            content = null;
    }

    return <div className="body-content">{content}</div>;
}