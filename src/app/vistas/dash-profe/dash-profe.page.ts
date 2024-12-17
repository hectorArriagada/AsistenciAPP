import { Component, OnInit } from '@angular/core';
import * as QRCode from 'qrcode';

@Component({
  selector: 'app-dash-profe',
  templateUrl: './dash-profe.page.html',
  styleUrls: ['./dash-profe.page.scss'],
})
export class DashProfePage implements OnInit {

  qrData = 'https://www.google.cl';
  qrGenerated: boolean = false;
  qrCodeImage: string = '';


  constructor() { 
  }

  generateQR() {
    QRCode.toDataURL(this.qrData, { errorCorrectionLevel: 'M' }, (err, url) => {
      if (err) {
        console.error(err);
        return;
      }
      this.qrCodeImage = url;
      this.qrGenerated = true;
    });
    console.log(this.qrData);
    console.log("QR generado");
  }

  ngOnInit() {
  }

}
