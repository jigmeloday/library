import { createAction } from '@reduxjs/toolkit';

export const setTheme = createAction('currentTheme', args => ( { payload: args } ) );
export const setMenu = createAction('isOpen', args => ( { payload: args } ) );
