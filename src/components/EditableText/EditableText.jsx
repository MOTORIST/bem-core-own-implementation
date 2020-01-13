import React, { ReactNode, ReactType } from 'react';
import { IClassNameProps } from '../../own-bem-core';
import './EditableText.css';

export interface IEditableTextProps extends IClassNameProps {
  children?: ReactNode;
  as?: ReactType;
}

export const EditableText: React.FC<IEditableTextProps> = ({
  children,
  as: Component = 'div',
}) => <Component>{children}</Component>;
