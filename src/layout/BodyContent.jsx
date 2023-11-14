import React, {useState} from 'react';
import Dashboard from "../pages/Dashboard";
import ApprovedUsers from "../pages/UserTabs/ApprovedUsers";
import Alerts from "../pages/Alerts";
import Cards from "../pages/Cards";
import History from "../pages/History";
import Service from "../pages/Service";
import UsersTabs from "../components/UsersTabs";

export default function BodyContent({activeButton}) {
    const [activeB] = useState('Approved');
    const [activeBA] = useState('Active');
    let content;



    switch (activeButton) {
        case 'dashboard':
            content = <Dashboard/>;
            break;
        case 'users':
            content = <UsersTabs
                activeBtn={activeB}
            />;
            break;
        case 'alerts':
            content = <Alerts  activeBtn={activeBA}/>;
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

    return <div className="body-content relative">{content}</div>;
}