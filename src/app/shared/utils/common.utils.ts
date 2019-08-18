import {IBranch} from '../model/IBranch';
import {ISportCategory} from '../model/sports';
import {IGender} from '../model/gender';
import {IResidence} from '../model/residence';
import {IYear} from '../model/year';

export class CommonUtils {
  static getBranches() {
    return this.getEnumKeys<IBranch>(IBranch);
  }

  static getSports() {
    return this.getEnumKeys<ISportCategory>(ISportCategory);
  }

  static getGender() {
    return this.getEnumKeys<IGender>(IGender);
  }

  static getYear() {
    return this.getEnumKeys<IYear>(IYear);
  }

  static getResidence() {
    return this.getEnumKeys<IResidence>(IResidence);
  }

  static getEnumKeys<T>(enumRef: any
  ): T[] {
    return Object.keys(enumRef).map(key => enumRef[key]);
  }
}
