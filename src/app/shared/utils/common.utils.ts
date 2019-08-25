import {IBranch} from '../model/branch';
import {ISportCategory} from '../model/sports';
import {IGender} from '../model/gender';
import {IHosteler} from '../model/hosteler';
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

  static getHosteler() {
    return this.getEnumKeys<IHosteler>(IHosteler);
  }

  static getEnumKeys<T>(enumRef: any
  ): T[] {
    return Object.keys(enumRef).map(key => enumRef[key]);
  }

//get titles function unit test
  static getBranchTitle(branch: IBranch) {
    let branchTitle;
    switch (branch) {
      case IBranch.CE:
        branchTitle = 'Civil';
        break;
      case IBranch.CS:
        branchTitle = 'Computer Science';
        break;
      case IBranch.ME:
        branchTitle = 'Mechanical';
        break;
      case IBranch.EN:
        branchTitle = 'Electrical and Electronics';
        break;
      case IBranch.EC:
        branchTitle = 'Electronics and Communication';
        break;
      case IBranch.EI:
        branchTitle = 'Electronics and Instrumentation';
        break;
      case IBranch.IT:
        branchTitle = 'Information Technology';
        break;
      case IBranch.MBA:
        branchTitle = 'MBA';
        break;
      case IBranch.MCA:
        branchTitle = 'MCA';
        break;
      default:
        branchTitle = '';
    }
    return branchTitle;
  }

  static getGenderTitle(gender: IGender) {
    let genderTitle;
    switch (gender) {
      case IGender.MALE:
        genderTitle = 'Male';
        break;
      case IGender.FEMALE:
        genderTitle = 'Female';
        break;
      default:
        genderTitle = '';
    }
    return genderTitle;
  }

  static getHostelerTitle(residence: IHosteler) {
    let residenceTitle;
    switch (residence) {
      case IHosteler.YES:
        residenceTitle = 'Yes';
        break;
      case IHosteler.NO:
        residenceTitle = 'No';
        break;
      default:
        residenceTitle = '';
    }
    return residenceTitle;
  }

  static getSportsTitle(sport) {
    let sportTitle;
    switch (sport) {
      case ISportCategory.ATHLETICS:
        sportTitle = 'Athletics';
        break;
      case ISportCategory.BADMINTON:
        sportTitle = 'Badminton';
        break;
      case ISportCategory.BASKETBALL:
        sportTitle = 'Basketball';
        break;
      case ISportCategory.CARROM:
        sportTitle = 'Carrom';
        break;
      case ISportCategory.CHESS:
        sportTitle = 'Chess';
        break;
      case ISportCategory.CRICKET:
        sportTitle = 'Cricket';
        break;
      case ISportCategory.FOOTBALL:
        sportTitle = 'Football';
        break;
      case ISportCategory.KABADDI:
        sportTitle = 'Kabaddi';
        break;
      case ISportCategory.KHO_KHO:
        sportTitle = 'Kho kho';
        break;
      case ISportCategory.OBSTACLE_RACE:
        sportTitle = 'Obstacle Race';
        break;
      case ISportCategory.POOL:
        sportTitle = 'Pool';
        break;
      case ISportCategory.POWER_LIFTING:
        sportTitle = 'Power lifting';
        break;
      case ISportCategory.TABLE_TENNIS:
        sportTitle = 'Table tennis';
        break;
      case ISportCategory.TUG_OF_WAR:
        sportTitle = 'Tug of war';
        break;
      case ISportCategory.VOLLEYBALL:
        sportTitle = 'Volleyball';
        break;
      default:
        sportTitle = '';
    }
    return sportTitle;
  }

  static isOnMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

  }

  static getSportIcon(sport) {
    let sportIcon;
    switch (sport) {
      case ISportCategory.ATHLETICS:
        sportIcon = '/assets/images/atheletics.png';
        break;
      case ISportCategory.BADMINTON:
        sportIcon = '/assets/images/badminton.png';
        break;
      case ISportCategory.BASKETBALL:
        sportIcon = '/assets/images/basketball.png';
        break;
      case ISportCategory.CARROM:
        sportIcon = '/assets/images/carrom.png';
        break;
      case ISportCategory.CHESS:
        sportIcon = '/assets/images/chess.png';
        break;
      case ISportCategory.CRICKET:
        sportIcon = '/assets/images/cricket.png';
        break;
      case ISportCategory.FOOTBALL:
        sportIcon = '/assets/images/football.png';
        break;
      case ISportCategory.KABADDI:
        sportIcon = '/assets/images/kabaddi.png';
        break;
      case ISportCategory.KHO_KHO:
        sportIcon = '/assets/images/kho-kho.png';
        break;
      case ISportCategory.OBSTACLE_RACE:
        sportIcon = '/assets/images/obstacle_race.png';
        break;
      case ISportCategory.POOL:
        sportIcon = '/assets/images/pool.png';
        break;
      case ISportCategory.POWER_LIFTING:
        sportIcon = '/assets/images/power_lifting.png';
        break;
      case ISportCategory.TABLE_TENNIS:
        sportIcon = '/assets/images/table_tennis.png';
        break;
      case ISportCategory.TUG_OF_WAR:
        sportIcon = '/assets/images/tug_of_war.png';
        break;
      case ISportCategory.VOLLEYBALL:
        sportIcon = '/assets/images/volleyball.png';
        break;
      default:
        sportIcon = '';
    }
    return sportIcon;
  }
}
