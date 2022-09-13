import { Component,OnInit } from '@angular/core';
import {
  CopyleaksReportConfig,
  CopyleaksService
} from "@copyleaks/plagiarism-report";
import { ScanService } from "src/app/scan.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  scanId: string = (window as any)["pxq_pgck_scan_id"]; //'coimk6ykypk7naam';
  userId: string = (window as any)["pxq_pgck_user_id"];
  url:string = (window as any)["pxq_pgck_report_url"];
  public config: CopyleaksReportConfig = {
    download: true,
  };

  constructor(
    private reportService: CopyleaksService,
    private scanService: ScanService //private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    //const scanId = this.activatedRoute.snapshot.params["scanId"];
    this._buildCopyleaksReportAsync(this.scanId, this.userId);
  }
  onDownloadBtnClick(e:any) {
    const pdfUrl = this.url + `/${this.userId}/${this.scanId}/pdf-report.pdf?download`;
    window.open(pdfUrl, '_blank');
  }
  private async _buildCopyleaksReportAsync(scanId: string, userId: string) {
    try {
      /** crawled version handling */
      const source = await this.scanService.getCrawledVersionAsync(
        scanId,
        userId
      );
      this.reportService.pushDownloadedSource(source);

      /** complete result handling */
      const complete = await this.scanService.getCompleteResultAsync(
        scanId,
        userId
      );
      this.reportService.pushCompletedResult(complete);

      /**
       * Scan results handling
       *
       * for more informations about completeResult.results please see
       * https://api.copyleaks.com/documentation/v3/webhooks/completed
       */
      const allResultsIds = [
        ...complete?.results?.internet?.map((r) => r.id),
        //...complete?.results?.database.map((r) => r.id),
        //...complete?.results?.batch.map((r) => r.id),
        //...complete?.results?.repositories.map((r) => r.id)
      ];
      await Promise.all(
        allResultsIds.map(async (id) => {
          const result = await this.scanService.getResultByIdAsync(
            scanId,
            id,
            userId
          );
          this.reportService.pushScanResult({ id, result });
        })
      );
    } catch (error) {
      /** Handle error */
      console.error(error);
    }
  }
}
