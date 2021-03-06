import React from 'react';
import {View} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay/lib';

interface Props {
  visible?: string;
  testID?: string;
}

/*Spinner lib is wrapped because of this issue
https://github.com/ladjs/react-native-loading-spinner-overlay/issues/30
*/
export default function XiteSpinner({
  visible,
  testID,
}: Props): JSX.Element | null {
  return visible === 'loading' ? (
    <View testID={testID}>
      <Spinner visible={true} />
    </View>
  ) : null;
}
