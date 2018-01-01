import { Component, ElementRef, ViewChild } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import {ABuilding} from "../../model/ABuilding"

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
    const building = new ABuilding(context);
    building.draw();
  }
  
  title = 'app';



}
