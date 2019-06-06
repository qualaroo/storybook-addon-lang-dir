import React from 'react';
import addons, { types } from '@storybook/addons';

import { ADDON_ID } from './constants';

import TextDirectionSwitcher from './components/TextDirectionSwitcher';

addons.register(ADDON_ID, (api) => {
  addons.add(ADDON_ID, {
    title: 'Text direction switcher',
    type: types.TOOL,
    render: () => <TextDirectionSwitcher api={api} />,
  });
});
