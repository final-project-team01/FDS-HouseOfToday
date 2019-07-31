import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo-article',
  template: `
    <div class="article-container">
      <div class="article-type">
        <span class="bar">10평대</span>
        <span class="bar">모던 스타일</span>
        <span>빌라&amp;연립</span>
        <span>어제</span>
      </div>
    Nullam finibus, nisl vitae dictum egestas, nunc velit volutpat dolor, eu euismod arcu magna in ligula. Aenean in euismod dolor. Etiam varius urna ac quam tempor, sed sollicitudin metus consequat. Vivamus condimentum lectus elit, laoreet convallis lectus ultricies in. Maecenas non tempus felis, non sagittis metus. Nullam vitae vulputate tortor, eget ullamcorper risus. Nulla sit amet accumsan mauris, vitae scelerisque est.

    Mauris aliquam, risus eget dignissim rhoncus, nisl leo mollis purus, sed cursus magna metus id lorem. Praesent rhoncus venenatis ligula vel gravida. Fusce sollicitudin ligula non felis imperdiet pellentesque et laoreet lectus. Proin porttitor egestas velit, sit amet porta orci feugiat vitae. Praesent ut est nec risus eleifend sollicitudin. Nullam nec ultricies quam. Duis vitae porttitor erat. Cras a porta nulla, ac semper ante. Nunc ullamcorper fringilla ipsum, nec pellentesque mi tincidunt nec. Fusce nulla justo, consequat a dignissim id, congue sit amet nisl.
    
    Duis quis erat dignissim, sollicitudin tortor non, blandit velit. Mauris et lectus eu diam scelerisque commodo. Curabitur tempor porttitor enim, quis iaculis neque mollis eget. Suspendisse tincidunt dapibus est et blandit. Pellentesque condimentum hendrerit blandit. Pellentesque vulputate convallis nisl, vitae aliquet odio dictum in. Etiam pellentesque at dolor eu auctor. Aliquam tristique ultrices sem at ullamcorper.
    
    Quisque ac semper magna. Ut consequat vehicula enim. Sed eu diam massa. Quisque a ullamcorper lorem. Nulla mollis sagittis purus eu blandit. Maecenas ac faucibus turpis. In sit amet urna justo. Suspendisse ultrices turpis in ipsum aliquam, nec luctus arcu mattis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Curabitur vitae porttitor urna, non sodales ligula. Duis in ultrices lorem. Suspendisse potenti. Donec nisi nulla, sagittis nec magna eget, ornare vehicula libero. Vivamus malesuada est placerat elit lobortis, quis suscipit ipsum aliquam. Curabitur porta nisi eu ex hendrerit, id gravida dolor tempor.
    
    Nam sit amet leo blandit, dapibus nunc eget, tristique tortor. Fusce in mollis enim. Mauris porttitor mi et ultricies faucibus. Aliquam imperdiet enim nec metus iaculis fermentum. Donec feugiat mi quam, in malesuada urna tincidunt ac. Vestibulum dictum massa non aliquam semper. Curabitur a elit aliquam ex accumsan efficitur. Proin tincidunt vehicula vulputate. Vivamus blandit odio nunc, sit amet tincidunt metus consequat quis. In mollis vulputate mauris, non euismod nisi elementum at. Donec pharetra odio id magna molestie, eu varius nulla maximus.
    </div>
  `,
  styles: [`
  .article-container{
    width: 700px;
    display: inline-block;
    position: relative;
    padding-right: 40px;
    background-color: yellow;
  }
  .article-type{
    margin-bottom: 30px;
  }
  .article-type span{
    color: #bdbdbd;
  }
  .article-type > span:last-child{
    float: right;
  }
  .bar::after{
    content: '|';
    margin: 0 6px;
  }
  `]
})
export class PhotoArticleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
