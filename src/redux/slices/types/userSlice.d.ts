import {IUserModel} from '../../../configs/types/IUserModel';

export type IUserState = {
  isOfflineMode: boolean;
  isOfflineAllowed: boolean;
  data: IUserModel;
};
