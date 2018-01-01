import { Component, ElementRef, ViewChild } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import {ABuilding} from "../../model/ABuilding"
import { SpatialGrid } from '../../model/grid/SpatialGrid';
import { Vector } from '../../model/Utility/Vector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  @ViewChild('gameCanvas') canvas: ElementRef;

  ngOnInit(): void {
    const canvas = this.canvas.nativeElement as HTMLCanvasElement;
    const context = canvas.getContext("2d") as CanvasRenderingContext2D;

    context.fillStyle = "black";
    const worldGrid = new SpatialGrid(new Vector(750, 500), 5, 3, context); // Todo: Turn this into a singleton
    worldGrid.draw();

    const building = new ABuilding(context);
    building.draw();
  }
  
  title = 'app';



}
