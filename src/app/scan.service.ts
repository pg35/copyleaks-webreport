import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {
  CompleteResult,
  ScanResult,
  ScanSource
} from "@copyleaks/plagiarism-report";

import { delay } from "rxjs/operators";
import { lastValueFrom } from "rxjs";

const REQUEST_DELAY = 3000; // 3 sec

@Injectable({
  providedIn: "root"
})
export class ScanService {
  //url = "https://www.goodcopy.xyz/_pxq_pgck_/report";
  url:string = (window as any)["pxq_pgck_report_url"];
  constructor(private _httpClient: HttpClient) {}

  public async getCrawledVersionAsync(scanId: string, userId: string) {
    return await lastValueFrom(
      this._httpClient.get<ScanSource>(
        this.url + `/${userId}/${scanId}/crawled-version.json`
      )
      //.pipe(delay(REQUEST_DELAY))
      //.toPromise();
    );
  }

  public async getCompleteResultAsync(scanId: string, userId: string) {
    return await lastValueFrom(
      this._httpClient.get<CompleteResult>(
        this.url + `/${userId}/${scanId}/completed.json`
      )
      //.pipe(delay(REQUEST_DELAY))
      //.toPromise();
    );
  }

  public async getResultByIdAsync(
    scanId: string,
    resultId: string,
    userId: string
  ) {
    return await lastValueFrom(
      this._httpClient.get<ScanResult>(
        this.url + `/${userId}/${scanId}/${resultId}.json`
      )
      //.pipe(delay(REQUEST_DELAY))
      // .toPromise();
    );
  }
}
