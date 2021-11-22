import { ChartsService } from './../../../../shared/services/charts.service';
import { Component, OnInit } from '@angular/core';
import { GoogleChartInterface } from 'ng2-google-charts';

@Component({
  selector: 'tc-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {

  columnChartDesc: GoogleChartInterface | null = null
  columnChartAsc: GoogleChartInterface | null = null
  constructor(private chartsServices: ChartsService) { }

  async ngOnInit(): Promise<void> {
    await this.getChartsDesc()
    await this.getChartsAsc()
  }

  async getChartsDesc() {
    let resp = await this.chartsServices.getChartsDesc()
    let dataTable: any[] = [['Requisito', 'Quantidade de Vagas']]
    let colors: any[] = []

    resp.forEach((c: any) => {
      let color = Math.floor(Math.random()*16777215).toString(16)
      colors.push(color)
      dataTable.push([c._id, c.count])
    })

    this.columnChartDesc = {
      chartType: 'ColumnChart',
      dataTable,
      //firstRowIsData: true,
      options: { 'title': 'Requisitos mais solicitados (Top 10)', colors: ["#3498db"] },
    }
  }
  async getChartsAsc() {
    let resp = await this.chartsServices.getChartsAsc()
    let dataTable: any[] = [['Requisito', 'Quantidade de Vagas']]
    let colors: any[] = []

    resp.forEach((c: any) => {
      let color = Math.floor(Math.random()*16777215).toString(16)
      colors.push(color)
      dataTable.push([c._id, c.count])
    })

    this.columnChartAsc = {
      chartType: 'ColumnChart',
      dataTable,
      //firstRowIsData: true,
      options: { 'title': 'Requisitos menos solicitados (Top 10)', colors: ["#3498db"] },
    }
  }
}
