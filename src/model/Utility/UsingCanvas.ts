export class UsingCanvas{

    constructor(c: CanvasRenderingContext2D, callback: (c: CanvasRenderingContext2D)=>any){
        c.save();
        callback(c);
        c.restore();
    }

}