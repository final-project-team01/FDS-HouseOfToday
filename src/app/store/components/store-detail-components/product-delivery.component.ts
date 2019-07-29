import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-delivery',
  template: `
    <div class="product-delivery-container" *ngIf="productInfo">
      <table>
        <tbody>
          <tr>
            <td class="table-key">배송</td>
            <td class="table-value">{{ productInfo.deliver }}</td>
          </tr>
          <tr>
            <td class="table-key">배송비</td>
            <td class="table-value">{{ productInfo.deliver_fee }}</td>
          </tr>
          <tr>
            <td class="table-key">배송불가 지역</td>
            <td class="table-value">{{ productInfo.deliver_no_go }}</td>
          </tr>
          <tr>
            <td class="table-key">지역별 차등 배송비</td>
            <td class="table-value">{{ productInfo.deliver_fee_diff }}</td>
          </tr>
        </tbody>
      </table>
      <h4>반품/교환 사유에 따른 요청 가능 기간</h4>
      <p>반품 시 먼저 판매자와 연락하셔서 반품사유, 택배사, 배송비, 반품지 주소 등을 
        협의하신 후 반품상품을 발송해 주시기 바랍니다.</p>
      <ol type="1">
        <li>구매자 단순 변심은 상품 수령 후 7일 이내 <span>(구매자 반품배송비 부담)</span></li>
        <li>표시/광고와 상이, 상품하자의 경우 상품 수령 후 3개월 이내 혹은 표시/광고와 다른 사실을 안 날로부터 30일 이내.<br>
        둘 중 하나 경과 시 반품/교환 불가 <span>(판매자 반품배송비 부담)</span></li>
      </ol>
      <h4>반품/교환 불가능 사유</h4>
      <p>아래와 같은 경우 반품/교환이 불가능합니다.</p>
      <ol>
        <li>반품요청기간이 지난 경우</li>
        <li>구매자의 책임 있는 사유로 상품 등이 멸실 또는 훼손된 경우 
          <span>(단, 상품의 내용을 확인하기 위하여 포장 등을 훼손한 경우는 제외)</span></li>
        <li>포장을 개봉하였으나 포장이 훼손되어 상품가치가 현저히 상실된 경우 
          <span>(예: 식품, 화장품)</span></li>
        <li>구매자의 사용 또는 일부 소비에 의하여 상품의 가치가 현저히 감소한 경우 
          <span>(라벨이 떨어진 의류 또는 태그가 떨어진 명품관 상품인 경우)</span></li>
        <li>시간의 경과에 의하여 재판매가 곤란할 정도로 상품 등의 가치가 현저히 감소한 경우 
          <span>(예: 식품, 화장품)</span></li>
        <li>고객주문 확인 후 상품제작에 들어가는 주문제작상품</li>
        <li>복제가 가능한 상품 등의 포장을 훼손한 경우 
          <span>(CD/DVD/GAME/도서의 경우 포장 개봉 시)</span></li>
      </ol>
    </div>
  `,
  styles: [`
  .product-delivery-container{
    width: 690px;
    padding: 30px 0 100px 0;
  }
  table{
    border-collapse: collapse;
    width: 100%;
    table-layout: fixed;
    height: auto;
    font-size: 15px;
    color: #424242;
    margin-bottom: 30px;
  }
  .table-key, .table-value{
    border-bottom: 1px solid lightgrey;
    padding: 10px;
  }
  .table-key{
    width: 30%;
  }
  h4{
    font-size: 14px;
    font-weight: bold;
    padding-top: 30px;
  }
  p{
    font-size: 12px;
    color: #bdbdbd;
  }
  ol{
    font-size: 12px;
    margin-top: 5px;
  }
  li{
    margin-left: 13px;
  }
  li > span{
    font-size: 10px;
    color: #757575;
  }
  `]
})
export class ProductDeliveryComponent implements OnInit {
    
  @Input() productInfo: any;  

  constructor() { }

  ngOnInit() {
  }

}
