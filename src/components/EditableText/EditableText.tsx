import React, { ReactType } from 'react';
import { IClassNameProps } from '../../own-bem-core';
import './EditableText.css';

export interface IEditableTextProps extends IClassNameProps {
  children?: string;
  as?: ReactType;
}

export const EditableText: React.FC<IEditableTextProps> = ({
  children,
  className,
  as: Component = 'div',
}) => <Component className={className}>{children}</Component>;
