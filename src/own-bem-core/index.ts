import { ComponentType } from 'react';

export interface IClassNameProps {
  className?: string;
}

export type Enhance<T extends IClassNameProps> = (
  WrappedComponent: ComponentType<T>,
) => ComponentType<T>;

export function bemModValue<V extends string, EP extends IClassNameProps>(
  value: V,
  enhance?: Enhance<EP>,
) {
  return { value, enhance };
}
