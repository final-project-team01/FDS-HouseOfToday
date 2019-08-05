import { Pipe, PipeTransform } from '@angular/core';
import { review } from 'src/app/core/models/store.interface';

@Pipe({
  name: 'reviewFilter'
})
export class ReviewFilterPipe implements PipeTransform {

  transform(originalList: review[], score: number): review[] {
    if(!originalList) return;
    const chosenList = originalList.filter(review => {
      if(review.star_score >= score) return review;
    }); 
    return chosenList;
  }

}
