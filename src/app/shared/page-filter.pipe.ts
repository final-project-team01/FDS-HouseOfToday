import { Pipe, PipeTransform } from '@angular/core';
import { review } from 'src/app/core/models/store.interface';

@Pipe({
  name: 'pageFilter'
})
export class PageFilterPipe implements PipeTransform {

  transform(originalList: review[], i: number): review[] {
    if(!originalList) return;
    const start = i * 5;
    const end = start + 5;
    const chosenList
      = originalList.filter((review, index) => index >= start && index < end);
      console.log(originalList, chosenList);
      
    return chosenList;
  }

}
