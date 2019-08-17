import {AbstractControl} from '@angular/forms';

export class ValidatorsUtils {
  public static validateStudentNumber(control: AbstractControl): { [key: string]: boolean } {
    const student_number = control.value;
    if (!student_number || student_number.toString().length !== 7) {
      return {studentNumber: true};

    } else {
      return null;
    }
  }


}
