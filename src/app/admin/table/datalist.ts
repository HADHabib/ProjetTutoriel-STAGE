import { DataTableModel } from "./datatable.model";

export const DataList:DataTableModel[]=[
    {
        type: 'Incident',
        dateOfRequest: new Date,
        businessIssuer: 'John Doe',
        departement: 'FoF',
        office: 'Paris',
        workflow: 'Pending user',
        remediationPlan: 'Yes',
        status: 'n.a'
    }, {
        type: 'Trading Account',
        dateOfRequest:  new Date,
        businessIssuer: 'John Doe',
        departement: 'FoF',
        office: 'Paris',
        workflow: 'Pending user',
        remediationPlan: 'No',
        status: 'Open'
    }, {
        type: 'Personal Transaction',
        dateOfRequest:  new Date,
        businessIssuer: 'John Doe',
        departement: 'FoF',
        office: 'Paris',
        workflow: 'Pending Risk',
        remediationPlan: 'Yes',
        status: 'n.a'
    }, {
        type: 'Outside Business Activity',
        dateOfRequest:  new Date,
        businessIssuer: 'John Doe',
        departement: 'FoF',
        office: 'Paris',
        workflow: 'Accept under condition',
        remediationPlan: 'No',
        status: 'n.a'
    }, {
        type: 'Political Contribution',
        dateOfRequest:  new Date,
        businessIssuer: 'John Doe',
        departement: 'FoF',
        office: 'Paris',
        workflow: 'Rejected',
        remediationPlan: 'Yes',
        status: 'n.a'
    }, {
        type: 'Restricted list and NDAs',
        dateOfRequest:  new Date,
        businessIssuer: 'John Doe',
        departement: 'FoF',
        office: 'Paris',
        workflow: 'Awaiting NDAs',
        remediationPlan: 'Yes',
        status: 'Open'
    }, {
        type: 'Personal Transaction',
        dateOfRequest:  new Date,
        businessIssuer: 'John Doe',
        departement: 'FoF',
        office: 'Paris',
        workflow: 'Pending Risk',
        remediationPlan: 'Yes',
        status: 'n.a'
    }
]
