import {Injectable, Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'Title'
  })
  @Injectable()
  export class PipeComponent implements PipeTransform {
    transform(Title: any[], Id:number,IsHeader:boolean=true): any {
      debugger
      if(IsHeader)
        return Title.filter(x => x.HeaderId==Id);
      else
        return Title.filter(x => x.SideBarMenu==Id);

    }
  }
