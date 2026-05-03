import { useWindowDimensions } from 'react-native';
import { BREAKPOINTS } from '../../theme/numbers';

export function GetNumColumns() {
  const { width } = useWindowDimensions();
  if (width >= BREAKPOINTS.desktop) return 8;
  if (width >= BREAKPOINTS.tablet) return 4;
  return 2;
}
