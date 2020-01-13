import { bemMod, GetPropsOfMod } from '../../../own-bem-core';
import { EditableText_type_text } from './EditableText_type_text';
import { EditableText_type_textarea } from './EditableText_type_textarea';

export const EditableText_TypeMod = bemMod('type', [
  EditableText_type_text,
  EditableText_type_textarea,
]);

export type EditableText_TypeProps = GetPropsOfMod<typeof EditableText_TypeMod>;
