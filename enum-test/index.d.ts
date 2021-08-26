   // The actual type definition file
    // index.d.ts (in node_modules/@types/enum-test)
    export enum EnumType {
        TYPE_A = "TYPEA",
        TYPE_B = "TYPEB"
    }
    export interface SomeInterface {
        stringAttribute: string;
        enumAttribute: EnumType;
    }