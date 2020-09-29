import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  serverId =10;
  serverStatus='offline';

      getStatus(){
        this.serverStatus = this.serverStatus;
      }


      allowedNewServer=false;

  constructor() { 

      setTimeout(()=>{
          this.allowedNewServer=true;

      },2000)
  }

  ngOnInit(): void {
  }

  serverCreated='this is event binding';
  onServerCreated(){
    this.serverCreated='event binding done!';
  }

}
