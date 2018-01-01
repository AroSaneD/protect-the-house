import { Vector } from "../Utility/Vector";
import { UsingCanvas } from "../Utility/UsingCanvas";

export class GridChunk{
    constructor(public position: Vector, public size: Vector, public context: CanvasRenderingContext2D){
        
    }

    public draw(): void{
        new UsingCanvas(this.context, (c: CanvasRenderingContext2D)=>{
            console.log("drawing");
            c.fillStyle = "black";
            c.strokeRect(this.position.x, this.position.y, this.size.x, this.size.y); // Todo: Think if this should be centered as well, just as the objects.
        });
    }
}