function isSevere(cases){
    return (cases.severity >= 4 );
}

function isNotSevere(cases){
    return isSevere(cases) == false;
}

function isOpen(cases){
    return cases.status.toLowerCase() == "open";
}

function openCases(caseArray){
    return caseArray.filter(isOpen);
}

console.log(openCases(database.cases));

function severeCases(caseArray){
    return caseArray.filter(isSevere);
}

function mehCases(caseArray){
    return caseArray.filter(isNotSevere);
}