import { infoIncidentType } from "./info-incident.model";

export const incidentList: infoIncidentType[] = [
    {
        numberIncident:20220116,
        date:new Date,
        declaDetails:'John Doe',
        riskCat:'Financial Errors',
        riskSubCat:'Entity Financial Statements',
        risk:'Entity Level Financial Statements',
        workflow:['Pending Manager'],
        status:"Open",
        imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS887J3TlVkLQzxPje4PsnPGYDVale-3hJu7Q&usqp=CAU"
    },
    {
        numberIncident:20220117,
        date:new Date,
        declaDetails:'John Doe 2',
        riskCat:'Financial Errors 2',
        riskSubCat:'Entity Financial Statements 2',
        risk:'Entity Level Financial Statements 2',
        workflow:['Pending Manager','Pending Manager 2'],
        status:"Closed",
        imgUrl:"https://img.freepik.com/premium-photo/modern-business-buildings-from-bottom-up_209729-568.jpg"
    },
    
]