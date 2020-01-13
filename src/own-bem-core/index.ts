import { ComponentType, createElement } from 'react';
import { ClassNameFormatter } from '@bem-react/classname';
import { classnames } from '@bem-react/classnames';

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

type GetPropsOfMods<T extends IMod<string, IModValue<string>[]>[]> = {
  [K in keyof T]: {
    [N in T[K] extends IMod<string, IModValue<string>[]>
      ? T[K]['name']
      : never]?: T[K] extends IMod<string, IModValue<string>[]>
      ? T[K]['values'][number]['value']
      : never;
  };
}[number];

type GetEnhanceProps<T extends Enhance<any> | undefined> = T extends Enhance<infer P>
  ? P
  : never;

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

const hasProp = (modName: string, props: object): boolean =>
  props.hasOwnProperty(modName);

export function withMods<M extends IMod<string, IModValue<string>[]>[]>(
  cnBlock: ClassNameFormatter,
  ...mods: M
) {
  return function<WCProps extends IClassNameProps>(
    WrappedComponent: ComponentType<WCProps>,
  ) {
    type ModsProps = GetPropsOfMods<M>;
    type EnhancesProps = GetEnhanceProps<M[number]['values'][number]['enhance']>;

    return function(props: WCProps & ModsProps & EnhancesProps) {
      const classNameArr: string[] = [];
      const enhances: Enhance<any>[] = [];

      mods.forEach((mod: IMod<string, IModValue<string>[]>) => {
        const modName = mod.name;

        if (hasProp(modName, props)) {
          classNameArr.push(cnBlock({ [modName]: (props as any)[modName] }));

          mod.values.forEach(modVal => {
            if (modVal.enhance && (props as any)[modName] === modVal.value) {
              enhances.push(modVal.enhance);
            }
          });
        }
      });

      const nextProps = Object.assign({}, props, {
        className: classnames(...classNameArr),
      });

      if (enhances.length > 0) {
        const Component = enhances.reduce((acc: any, enhance) => {
          return enhance(acc);
        }, WrappedComponent);

        return createElement(Component, nextProps);
      }

      return createElement(WrappedComponent, nextProps);
    };
  };
}
