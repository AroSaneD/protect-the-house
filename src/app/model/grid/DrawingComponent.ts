import { UsingCanvas } from "../Utility/UsingCanvas";

export class DrawingComponent {
    // Todo: Implement this
    private static _instance: DrawingComponent;
    public static get Instance(): DrawingComponent {
        if (DrawingComponent._instance == null) {
            throw new Error("Drawing component not yet initialized");
        }

        return DrawingComponent._instance;
    }

    public static Initialize(context: CanvasRenderingContext2D): void {
        if (DrawingComponent._instance != null) {
            throw new Error("Drawing component is already initialized");
        }

        DrawingComponent._instance = new DrawingComponent(context);
    }


    private constructor(private context: CanvasRenderingContext2D) {

    }

    // Todo: Implement body argument.
    public drawFigure(): void {
        new UsingCanvas(this.context, (context) => {
            context.fillStyle = "red";
            context.beginPath();
            context.arc(50, 50, 20, 0, Math.PI * 2, true);
            context.fill();
            context.closePath();
        });
    }
}