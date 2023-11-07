import React from "react";
import Transfer from "../widgets/Transfer";
import Receive from "../widgets/Receive";
import AnalyticWidget from "../widgets/AnalyticWidget";

export default function () {
    return (
        <div className={"analytical"}>
            <div className={"transfer-receive"}>
                <Transfer/>
                <Receive/>
            </div>
            <AnalyticWidget/>
        </div>
    );
}