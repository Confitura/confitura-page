import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(client: HttpClient) {
    client.get<(string | number)[][]>('/dashboard/tshirts').subscribe(it => {
      this.tShirtsChartData.dataTable = it;
    });
    client.get<(string | number)[][]>('/dashboard/meal').subscribe(it => {
      this.foodChartData.dataTable = it;
    });
    client.get<(string | number)[][]>('/dashboard/vouchers').subscribe(it => {
      this.vouchersChartData.dataTable = it;
    });
    client.get<(string | number)[][]>('/dashboard/registration').subscribe(it => {
      this.usersChartData.dataTable = it;
    });
  }

  tShirtsChartData = {
    chartType: 'ColumnChart',
    dataTable: [
      ['size', 'Male', 'Female'],
      ['S', 0, 0],
      ['M', 0, 0],
      ['L', 0, 0],
      ['XL', 0, 0],
      ['XXL', 0, 0]
    ],
    options: {'title': 'T-Shirts'},
  };

  foodChartData = {
    chartType: 'PieChart',
    dataTable: [
      ['option', 'count'],
      ['vegetarian', 0],
      ['meat', 0]
    ],
    options: {'title': 'Food option'},
  };

  vouchersChartData = {
    chartType: 'PieChart',
    dataTable: [
      ['option', 'count'],
      ['not user', 0],
      ['used', 0]
    ],
    options: {'title': 'Vouchers'},
  };

  usersChartData = {
    chartType: 'PieChart',
    dataTable: [
      ['option', 'count'],
      ['without voucher', 0],
      ['not registered as participant', 0],
      ['registered', 0]
    ],
    options: {'title': 'Users'},
  };

  presentationsChartData = {
    chartType: 'Table',
    dataTable: [
      ['option', 'count'],
      ['without voucher', 0],
      ['not registered as participant', 0],
      ['registered', 0]
    ],
    options: {'title': 'presentations'},
  };

}
