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
  workOnHomework (): string;
  displayName (): string;
}

interface StudentConstructor {
  new (firstName: string, lastName: string): StudentInterface;
}

const StudentClass: StudentConstructor = class StudentClass implements StudentInterface {

  constructor (firstName: string, lastName: string): StudentInterface {
  }

  workOnHomework (): string {
    return 'Currently working';
  }


  displayName (): string {
    return '';
  }
};
