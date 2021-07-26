import { Component, OnInit } from '@angular/core';
import { Report } from './report.model';
import { ReportService } from './report.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.page.html',
  styleUrls: ['./report.page.scss'],
})
export class ReportPage implements OnInit {

  loadedReport: Report[];

  constructor(private reportService: ReportService) { }

  ngOnInit() {
    this.loadedReport = this.reportService.report;
  }


}
