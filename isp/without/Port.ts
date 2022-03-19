export interface Port {
    useUSB: () => void;
    useLAN: () => void;
    usePS2: () => void;
    useVGA: () => void;
}
