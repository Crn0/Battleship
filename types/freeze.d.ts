export type Freeze<Type> = {
    readonly [Property in keyof Type]: Type[Property];
};
//# sourceMappingURL=freeze.d.ts.map