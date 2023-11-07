import React from 'react';

export default function FinanceData(){
return(
    <div className={"finance-data"}>
        <div className={"goodmorning"}>
            <p>Good Morning</p>
            <h2>Gogo Dashboard</h2>
        </div>
        <div className={"finance-balances"}>
            <div className={"balance"}>
                <p>Balance</p>
                <h2>1,655.00<sup>$</sup></h2>
            </div>
            <div className={"balance"}>
                <p>Income</p>
                <h2>950.00<sup>$</sup></h2>
            </div>
            <div className={"balance"}>
                <p>Expenses</p>
                <h2>382.00<sup>$</sup></h2>
            </div>
        </div>


    </div>
);
}