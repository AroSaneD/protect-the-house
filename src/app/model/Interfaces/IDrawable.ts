import { DrawingComponent } from "../grid/DrawingComponent";

export interface IDrawable{
    color: string;
    draw();
    readonly drawingComponent: DrawingComponent;
}