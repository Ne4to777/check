type AnyToAnyT = (...xs: any) => any;
type AnyToAny2T = (...xs: any) => AnyToAnyT;
type AnyToAny3T = (...xs: any) => AnyToAny2T;
type AnyToAny4T = (...xs: any) => AnyToAny3T;
export {AnyToAnyT, AnyToAny2T, AnyToAny3T, AnyToAny4T};
