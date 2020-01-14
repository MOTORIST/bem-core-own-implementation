import { cn } from '@bem-react/classname';
import { withMods } from '../../own-bem-core';
import { EditableText_TypeMod } from './_type';
import { EditableText } from './EditableText';

export const cnEditableText = cn('EditableText');

export default withMods(cnEditableText, EditableText_TypeMod)(EditableText);
