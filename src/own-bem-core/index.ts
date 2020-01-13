import { ComponentType } from 'react';

export interface IClassNameProps {
  className?: string;
}

export type Enhance<T extends IClassNameProps> = (
  WrappedComponent: ComponentType<T>,
) => ComponentType<T>;

interface IModValue<V, EP extends IClassNameProps = {}> {
  value: V;
  enhance?: Enhance<EP>;
}

interface IMod<N extends string, VS extends IModValue<string>[]> {
  name: N;
  values: VS;
}

export type GetPropsOfMod<
  M extends IMod<string, IModValue<string>[]>
> = M['values'][number]['value'];

export function bemModValue<V extends string, EP extends IClassNameProps>(
  value: V,
  enhance?: Enhance<EP>,
): IModValue<V, EP> {
  return { value, enhance };
}

export function bemMod<N extends string, V extends IModValue<string>>(
  name: N,
  values: V[],
): IMod<N, V[]> {
  return { name, values };
}
