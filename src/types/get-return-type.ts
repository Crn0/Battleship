export type GetReturnType<Type> = Type extends (
  ...args: never[]
) => infer ReturnType
  ? ReturnType
  : never;
