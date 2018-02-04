declare const CONSTANTS = { 
    zeroes:0x00,
    magicCookie:0x2112A442
};
declare enum EBindingMethods {
    request = 0x0001,
    indication = 0x0011, 
    success = 0x0101, 
    error = 0x0111
}