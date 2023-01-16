export interface RouteModel {
    id: string,
    component: JSX.Element,
    route: string
}

export type MatColors = 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
export type MatVariants = 'text' | 'outlined' | 'contained';
export type MatInputVariants = 'filled' | 'outlined' | 'standard';