import { Vector } from "../Utility/Vector";
import { GridChunk } from "./GridChunk";
import { error } from "selenium-webdriver";

// Todo: Think of a more fitting name
export class SpatialGrid {

    private static readonly gridSize = new Vector(750, 500);
    private static readonly gridSizeHorizontal = 5;
    private static readonly gridSizeVertical = 3;

    private static _instance: SpatialGrid;

    public static get Instance(): SpatialGrid{
        if(SpatialGrid._instance == null){
            throw new Error("Spatial grid not yet initialized");
        }

        return SpatialGrid._instance;
    }

    public static InitializeGrid(context: CanvasRenderingContext2D): SpatialGrid{
            if(SpatialGrid._instance != null){
                throw new Error("Spatial grid is already initialized");
            }

            // SpatialGrid._instance = new SpatialGrid(SpatialGrid.gridSize, SpatialGrid.gridSizeHorizontal, SpatialGrid.gridSizeVertical, )
            return null;
    }

    chunkMatrix = {}; // Test... array of arrays may or not be better.

    constructor(public size: Vector,
        public chunksWide: number,
        public chunksHigh: number,
        public context: CanvasRenderingContext2D) {

        // The values are floored, to prevent floating point numbers, which are troublesome when rendering pixels.
        // Todo: Test if binary operators are faster than flooring.
        const chunkWidth = Math.floor(this.size.x / chunksWide);
        const chunkHeight = Math.floor(this.size.y / chunksHigh);

        for (let x = 0; x < this.chunksWide; x++) {
            this.chunkMatrix[x] = {};
            for (let y = 0; y < this.chunksHigh; y++) {

                this.chunkMatrix[x][y] = new GridChunk(
                    new Vector(chunkWidth * x, chunkHeight * y),
                    new Vector(chunkWidth, chunkHeight),
                    this.context
                );
            }
        }
    }

    public draw(): void {
        for (let x = 0; x < this.chunksWide; x++) {
            for (let y = 0; y < this.chunksHigh; y++) {
                // Todo: Think of a solution for dynamic properties and types.
                this.chunkMatrix[x][y].draw();
            }
        }
    }

}