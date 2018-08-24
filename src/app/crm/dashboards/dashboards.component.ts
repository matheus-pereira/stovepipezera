import * as Highcharts from 'highcharts';
import { Component, OnInit } from "@angular/core";
import { calcBindingFlags } from '@angular/core/src/view/util';
import { ContatoService } from '../contatos/contato/contato.service';

@Component({
    templateUrl: './dashboards.component.html'
})
export class DashboardsComponent {

    Highcharts = Highcharts;
    chartOptions = {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Porcentagem de contatos por status'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        series: [{
            name: 'Porcentagem',
            colorByPoint: true,
            data: [{"name":"Oportunidade","y":10},{"name":"Demonstração","y":3},{"name":"Negociação","y":5},{"name":"Fechamento","y":3}]
        }]
    };

}