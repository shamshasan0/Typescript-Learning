// INTERFACES

type Student = {
    name: string;
    grade: number;
}

let students: Student[] = [{
    name: "Michael Jordan",
    grade: 93
},
{
    name: "Lebron James",
    grade: 92
},

{
    name: "Dirk Nowitzki",
    grade: 90
}];

type Faculty = {
    firstName: string;
    lastName: string;
    age: number;
    responsibilities: string[];
}

class Professor implements Faculty {
    firstName: string;
    lastName: string;
    age: number;
    responsibilities: string[];

    gradePapers() {

    }

    updateGrades() {

    }

    giveFeedback(): void {

    }

    overRideGrades() {

    }
}

class TeachingAssistant {

    firstName: string;
    lastName: string;
    age: number;
    program: string;
    responsibilities: string[];

    gradePapers() {

    }

    giveFeedback(): void {

    }
}
