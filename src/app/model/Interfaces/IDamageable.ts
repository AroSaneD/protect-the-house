export interface IDamageable{
    hp: number;

    getDamaged(hp: number): void;
}