type AnyToAnyT = (...xs: any) => any;
type AnyToAny2T = (...xs: any) => AnyToAnyT;
type AnyToAny3T = (...xs: any) => AnyToAny2T;
export {AnyToAnyT, AnyToAny2T, AnyToAny3T};
