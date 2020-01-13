import React from 'react';
import { bemModValue } from '../../../own-bem-core';
import { IEditableTextProps } from '../EditableText';
import './EditableText_type_textarea.css';

export const EditableText_type_textarea = bemModValue<'textarea', IEditableTextProps>(
  'textarea',
  EditableText => props => <EditableText {...props} as="textarea" />,
);
