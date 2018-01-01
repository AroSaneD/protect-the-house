import { IBuilding } from "./Interfaces/IBuilding";
import { IDamageable } from "./Interfaces/IDamageable";
import { IDrawable } from "./Interfaces/IDrawable";
import { UsingCanvas } from "./Utility/UsingCanvas";
import { Vector } from "./Utility/Vector";

export class ABuilding implements IBuilding, IDamageable, IDrawable {

    color: string;
    hp: number;

    position: Vector = new Vector(375, 250);
    size: Vector = new Vector(50, 50);

    constructor(private context: CanvasRenderingContext2D) {

    }

    getDamaged(hp: number): void {
        this.hp -= hp;
    }

    draw() {
        new UsingCanvas(this.context, (context) => {
            context.fillStyle = "lightgreen";
            context.fillRect(this.position.x - this.size.x / 2, this.position.y - this.size.y / 2, this.size.x, this.size.y); // Todo: Use position and width parameters
        });
    }

}