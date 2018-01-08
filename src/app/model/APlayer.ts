import { Vector } from './utility/Vector';
import { IMovementComponent } from './Interfaces/IMovementComponent';
import { DrawingComponent } from './grid/DrawingComponent';
import { IDrawable } from './Interfaces/IDrawable';
import { IDamageable } from './Interfaces/IDamageable';
import { IMoveable } from './Interfaces/IMoveable';
import { PlayerMovementComponent } from './movement/PlayerMovementComponent';


export class APlayer implements IDamageable, IDrawable, IMoveable{

    constructor(position: Vector){
        this.bodyComponent = new PlayerMovementComponent(position);
    }

    // Movement
    moveTo(vector: Vector): void {
        throw new Error("Method not implemented.");
    }

    bodyComponent: IMovementComponent;


    // Drawing
    color: string;

    draw() {
        DrawingComponent.Instance.drawFigure();
    }

    drawingComponent: DrawingComponent; // Todo: This is not thought through well...

    // Damage
    hp: number;

    getDamaged(hp: number): void {
        throw new Error("Method not implemented.");
    }
    
}