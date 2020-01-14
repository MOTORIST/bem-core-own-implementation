import React from 'react';
import { bemModValue } from '../../../own-bem-core';
import { IEditableTextProps } from '../EditableText';
import './EditableText_type_textarea.css';

interface ITypeTextareaProps extends IEditableTextProps {
  cols?: number;
  rows?: number;
}

export const EditableText_type_textarea = bemModValue<'textarea', ITypeTextareaProps>(
  'textarea',
  EditableText => ({ className, rows, cols, children }) => (
    <textarea className={className} rows={rows} cols={cols} defaultValue={children} />
  ),
);
