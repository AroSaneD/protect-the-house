import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { ABuilding } from '../../../model/Building';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  ngOnInit(): void {
    const canvas = document.getElementById("gameCanvas") as HTMLCanvasElement;
    const context = canvas.getContext("2d") as CanvasRenderingContext2D;

    context.fillStyle = "black";
    const building = new ABuilding(context);
    building.draw();
  }
  
  title = 'app';



}
