import React from 'react';
import Dashboard from "../layout/Dashboard";
import Payments from "./Payments";

export default function BodyContent({ activeButton }) {
    let content;

    switch (activeButton) {
        case 'dashboard':
            content = <Dashboard />;
            break;
        case 'payments':
            content = <Payments />;
            break;

        default:
            content = null;
    }

    return <div className="body-content">{content}</div>;
}