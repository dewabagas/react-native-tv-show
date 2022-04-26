import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../../configs/router/types/RootNavigationTypes';

type LoginNavigationType = StackNavigationProp<
  RootStackParamList,
  'LoginScreen'
>;

export type LoginProps = {navigation: LoginNavigationType};
