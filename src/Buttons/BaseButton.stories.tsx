import React from 'react';
import {make as BaseButton} from './BaseButton.gen';
import {Typography} from '../Typography';
import {action} from '@storybook/addon-actions';

const Story = () => (
  <>
    <BaseButton onPress={action('onPress')}>
      <Typography style={{padding: 8}}>Click Me!</Typography>
    </BaseButton>
    <BaseButton
      onPress={action('onPress')}>
      <Typography style={{padding: 8}}>With Leading Component</Typography>
    </BaseButton>
    <BaseButton
      onPress={action('onPress')}>
      <Typography style={{padding: 8}}>With Tailing Component</Typography>
    </BaseButton>
  </>
);

export const light = () => <Story />;


export default {
  title: 'Buttons/BaseButton',
};
