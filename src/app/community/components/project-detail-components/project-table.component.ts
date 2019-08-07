import { Component, OnInit, Input } from '@angular/core';
import { housewarming_info } from 'src/app/core/models/community.interface';

@Component({
  selector: 'app-project-table',
  template: `
  <table *ngIf="projectInfo">
    <tbody>
      <tr *ngIf="projectInfo.structure">
        <td class="table key">건물</td>
        <td class="table">{{ projectInfo.structure }}</td>
      </tr>
      <tr *ngIf="projectInfo.floor_space !== '-'">
        <td class="table key">평수</td>
        <td class="table">{{ projectInfo.floor_space }}</td>
      </tr>
      <tr *ngIf="projectInfo.style !== '-'">
        <td class="table key">스타일</td>
        <td class="table">{{ projectInfo.style }}</td>
      </tr>
      <tr *ngIf="projectInfo.work !== '-'">
        <td class="table key">작업</td>
        <td class="table">{{ projectInfo.work }}</td>
      </tr>
      <tr *ngIf="projectInfo.area !== '-'">
        <td class="table key">분야</td>
        <td class="table">{{ projectInfo.area }}</td>
      </tr>
      <tr *ngIf="projectInfo.period !== '-'">
        <td class="table key">기간</td>
        <td class="table">{{ projectInfo.period }}</td>
      </tr>
      <tr *ngIf="projectInfo.budget !== '-'">
        <td class="table key">예산</td>
        <td class="table">{{ projectInfo.budget }}</td>
      </tr>
      <tr *ngIf="projectInfo.detail_part !== '-'">
        <td class="table key">세부공정</td>
        <td class="table">{{ projectInfo.detail_part }}</td>
      </tr>
      <tr *ngIf="projectInfo.family !== '-'">
        <td class="table key">가족형태</td>
        <td class="table">{{ projectInfo.family }}</td>
      </tr>
      <tr *ngIf="projectInfo.location !== '-'">
        <td class="table key">지역</td>
        <td class="table">{{ projectInfo.location }}</td>
      </tr>
    </tbody>
  </table>
  `,
  styles: [`
  table{
    border-collapse: collapse;
    width: 50%;
    table-layout: fixed;
    font-size: 15px;
    color: #424242;
    margin: 20px 0 0 30px;
  }
  .table{
    border-bottom: 1px solid #424242;
    padding: 10px 0 5px 10px;
  }
  .table.key{
    width: 30%;
  }
  `]
})
export class ProjectTableComponent implements OnInit {

  @Input() projectInfo: housewarming_info;

  constructor() { }

  ngOnInit() {
  }

}
