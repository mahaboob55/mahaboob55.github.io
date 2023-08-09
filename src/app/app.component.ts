import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentProgress = 0;
  public startMigration =false;
  title = 'amplelogic-ui';
  timer:any;


  getProgressClass():string{
    return `progress-bar w-${this.currentProgress.toString()}`
  }


  runDataMigration():void{
    this.currentProgress =0;
      this.startMigration = !this.startMigration;
      this.runDataInterval();
    
  }

  runDataInterval(){
    this.timer = setTimeout(() => {
      this.currentProgress+=20;
       if (this.currentProgress > 0 && this.currentProgress<100) {
         this.runDataInterval();
       } else if (this.currentProgress == 100) {
         window.clearTimeout(this.timer);
         this.startMigration = false;
       }
     }, 1000);
  }
}
