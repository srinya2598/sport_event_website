import {CommonUtils} from './common.utils';
import {IBranch} from '../model/branch';
import {IGender} from '../model/gender';
import {IHosteler} from '../model/hosteler';
import {ISportCategory} from '../model/sports';

describe('CommonUtils', () => {
  describe('getBranchTitle', () => {
    it('should return the correct branch', () => {
      expect(CommonUtils.getBranchTitle(IBranch.CS)).toEqual('Computer Science');
    });
    it('should return the correct branch', () => {
      expect(CommonUtils.getBranchTitle(IBranch.IT)).toEqual('Information Technology');
    });
  });

  describe('getGenderTitle', () => {
    it('should  return the correct gender', () => {
      expect(CommonUtils.getGenderTitle(IGender.MALE)).toEqual('Male');
    });
    it('should return the correct gender', () => {
      expect(CommonUtils.getGenderTitle(IGender.FEMALE)).toEqual('Female');
    });
  });

  describe('getHostelerTitle', () => {
    it('should return the correct hosteler', () => {
      expect(CommonUtils.getHostelerTitle(IHosteler.YES)).toEqual('Yes');
    });
    it('should return the correct hosteler', () => {
      expect(CommonUtils.getHostelerTitle(IHosteler.NO)).toEqual('No');
    });
  });

  describe('getSportsTitle', () => {
    it('should return the correct sport', () => {
      expect(CommonUtils.getSportsTitle(ISportCategory.POOL)).toEqual('Pool');
    });
    it('should return the correct sport', () => {
      expect(CommonUtils.getSportsTitle(ISportCategory.FOOTBALL)).toEqual('Football');
    });
  });

  describe('getSportIcon', () => {
    it('should return the correct sport icon', () => {
      expect(CommonUtils.getSportIcon(ISportCategory.FOOTBALL)).toEqual('/assets/images/football.png');
    });
    it('should return the correct sport icon', () => {
      expect(CommonUtils.getSportIcon(ISportCategory.POOL)).toEqual('/assets/images/pool.png');
    });
  });


});
