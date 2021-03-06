import { Component, OnInit, Input } from '@angular/core';
import { product_info } from 'src/app/core/models/store.interface';

@Component({
  selector: 'app-product-etc',
  template: `
    <div class="product-etc-container" *ngIf="productInfo">
      <table>
      <caption>제품 상세 정보</caption>
      <tbody>
          <tr>
            <td class="table key">품명 및 모델명</td>
            <td class="table">{{ productInfo.detail_name }}</td>
          </tr>
          <tr>
            <td class="table key">색상</td>
            <td class="table">{{ productInfo.detail_color }}</td>
          </tr>
          <tr>
            <td class="table key">크기</td>
            <td class="table">{{ productInfo.detail_size }}</td>
          </tr>
          <tr>
            <td class="table key">구성품</td>
            <td class="table">{{ productInfo.detail_component }}</td>
          </tr>
          <tr>
            <td class="table key">KC인증 필 유무</td>
            <td class="table">{{ productInfo.detail_auth }}</td>
          </tr>
          <tr>
            <td class="table key">배송/설치비용</td>
            <td class="table">{{ productInfo.detail_cost }}</td>
          </tr>
          <tr>
            <td class="table key">품질보증기준</td>
            <td class="table">{{ productInfo.detail_standard }}</td>
          </tr>
          <tr>
            <td class="table key">제조자</td>
            <td class="table">{{ productInfo.detail_mfc }}</td>
          </tr>
          <tr>
            <td class="table key">제조국(수입여부)</td>
            <td class="table">{{ productInfo.detail_mis }}</td>
          </tr>
          <tr>
            <td class="table key">A/S책임자와 전화번호</td>
            <td class="table">{{ productInfo.detail_as }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  `,
  styleUrls: ['./product-etc.scss']
})

export class ProductEtcComponent implements OnInit {

  @Input() productInfo: product_info;

  constructor() { }

  ngOnInit() {
  }

}
