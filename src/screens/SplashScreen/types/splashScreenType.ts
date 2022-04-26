import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../../configs/router/types/RootNavigationTypes';

type SplashScreenNavigationType = StackNavigationProp<
  RootStackParamList,
  'SplashScreen'
>;

export type SplashScreenProps = {navigation: SplashScreenNavigationType};
