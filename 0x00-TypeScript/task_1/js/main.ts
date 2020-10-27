/* eslint-disable */

interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [other: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}


interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = function (firstName: string, lastName: string): string {
  return `${firstName[0]}. ${lastName}`;
}

interface StudentInterface {
  firstName: string;
  lastName: string;
  workOnHomework (): string;
  displayName (): string;
}

interface StudentConstructor {
  new (firstName: string, lastName: string): StudentInterface;
}

const StudentClass: StudentConstructor = class StudentClass implements StudentInterface {
  firstName: string;
  lastName: string;

  constructor (firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework (): string {
    return 'Currently working';
  }


  displayName (): string {
    return this.firstName;
  }
};
