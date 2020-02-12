const EMPLOYEE='EMPLOYEE';
const EMPLOYEE_DETAILS='DETAIL';
const EMPLOYEE_DETAILS_PROFILE='PROFILE';
const EMPLOYEE_DETAILS_FINANCE='FINANCE';
const EMPLOYEE_LEAVE='LEAVE';
const EMPLOYEE_LEAVE_CALENDAR='CALENDAR'

const employeeLeaveCalendar = { 
    value:EMPLOYEE_LEAVE_CALENDAR,
    icon:'fa fa-calendar',
};
const employeeLeave= {
    value:EMPLOYEE_LEAVE,
    icon:'fa fa-calendar',
    children: [employeeLeaveCalendar]
}
const employeeDetailsProfile = { 
    value: EMPLOYEE_DETAILS_PROFILE,
    icon:'fa fa-user-circle',
};
const employeeDetailsFinance = { 
    value: EMPLOYEE_DETAILS_FINANCE,
    icon:'fa fa-usd',
};
const employeeDetails = { 
    value : EMPLOYEE_DETAILS,
    icon:'fa fa-id-card',
    children: [ employeeDetailsProfile,
                employeeDetailsFinance ]}

const employee = {
    value:EMPLOYEE,
    path:'/Dashboard',
    children:[employeeDetails
        ,employeeLeave
    ]
}
export default employee;