import type { GetReturnType } from "../../types/get-return-type.ts";
export type TCreateDirection = GetReturnType<typeof createDirection>;
export declare const createDirection: (parent: HTMLElement) => {
    directionContainer: HTMLDivElement;
    shipPlacement: HTMLDivElement;
    startBtn: HTMLButtonElement;
    directionSelect: HTMLSelectElement;
};
//# sourceMappingURL=create-direction.d.ts.map