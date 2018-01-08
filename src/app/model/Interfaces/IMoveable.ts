import { Vector } from './../utility/Vector';
import { IMovementComponent } from './IMovementComponent';

export interface IMoveable {
    moveTo(vector: Vector): void;
    bodyComponent: IMovementComponent;
}