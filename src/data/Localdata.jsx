import {GrLocation} from "react-icons/gr";


export let employeesGrid = [
    {
        headerText: 'Name',
        field: 'name',
        width: '150',
        textAlign: 'Center',
    },
    {
        headerText: 'Email',
        field: 'email',
        width: '200',
        textAlign: 'Center',
    },
    {
        headerText: 'Phone',
        field: 'phone',
        width: '150',
        textAlign: 'Center',
    },
    {
        headerText: 'Bike Make',
        field: 'bikeMake',
        width: '150',
        textAlign: 'Center',
    },
    // Add more columns for other fields as needed
];


// export const employeesGrid = [
//     { headerText: 'Users',
//         width: '150',
//         // template: gridEmployeeProfile,
//         textAlign: 'Center' },
//     { field: 'Name',
//         headerText: '',
//         width: '0',
//         textAlign: 'Center',
//     }
// ];
//     { field: 'Title',
//         headerText: 'Designation',
//         width: '170',
//         textAlign: 'Center',
//     },
//     { headerText: 'Country',
//         width: '120',
//         textAlign: 'Center',},
//         //template: gridEmployeeCountry },
//
//     { field: 'HireDate',
//         headerText: 'Hire Date',
//         width: '135',
//         format: 'yMd',
//         textAlign: 'Center' },
//
//     { field: 'ReportsTo',
//         headerText: 'Reports To',
//         width: '120',
//         textAlign: 'Center' },
//     { field: 'EmployeeID',
//         headerText: 'Employee ID',
//         width: '125',
//         textAlign: 'Center' },
// ];
//
// const gridEmployeeProfile = () => (
//     <div className="flex items-center gap-2">
//         <img
//             className="rounded-full w-10 h-10"
//             src={""}
//             alt="employee"
//         />
//         <p>{}</p>
//     </div>
// );
//
// const gridEmployeeCountry = () => (
//     <div className="flex items-center justify-center gap-2">
//         <GrLocation />
//         <span>{}</span>
//     </div>
// );