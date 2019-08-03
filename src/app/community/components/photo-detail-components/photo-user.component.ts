import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo-user',
  template: `
  <div class="user-container">
  Nam interdum, turpis sit amet commodo tristique, neque elit pretium velit, vel eleifend justo leo a tellus. Duis non consectetur ex. Praesent nec mauris accumsan, interdum sapien vel, posuere felis. Mauris dictum dapibus euismod. Fusce commodo eros nisi. Cras semper purus ac quam ultrices, sit amet dapibus orci lobortis. Praesent et felis tortor. Donec tincidunt ultricies elit ut rhoncus. Praesent tincidunt fringilla turpis vitae feugiat. Praesent a dolor maximus, scelerisque sem quis, vestibulum odio. Sed pretium euismod est et pulvinar. Vestibulum non quam eros. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce id dolor ut lacus viverra mattis.
  </div>
  `,
  styles: [`
  .user-container{
    width: 330px;
    display: inline-block;
    height: calc(100vh - 81px);
    position: sticky;
    top: 81px;
    padding: 40px 0 0 40px;
    background-color: lightgreen;
  }
  `]
})
export class PhotoUserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
