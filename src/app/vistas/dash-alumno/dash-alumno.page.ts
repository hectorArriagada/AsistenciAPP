import { Component, OnInit } from '@angular/core';
import * as QRCode from 'qrcode';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';

@Component({
  selector: 'app-dash-alumno',
  templateUrl: './dash-alumno.page.html',
  styleUrls: ['./dash-alumno.page.scss'],
})
export class DashAlumnoPage implements OnInit {

  qrData = 'https://www.google.cl';
  qrGenerated: boolean = false;
  qrCodeImage: string = '';
  attendanceList: { date: string, student: string }[] = [];

  constructor( private qrScanner: QRScanner) { }

  ngOnInit() {
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

  scanQR() {
    this.qrScanner.prepare().then((status: QRScannerStatus) => {
      if (status.authorized) {
        let scanSub = this.qrScanner.scan().subscribe((text: string) => {
          console.log('Scanned something', text);
          this.registerAttendance(text);
          this.qrScanner.hide(); // hide camera preview
          scanSub.unsubscribe(); // stop scanning
        });
        this.qrScanner.show();
      } else if (status.denied) {
        console.error('Camera permission denied');
      } else {
        console.error('Permission denied for this runtime.');
      }
    }).catch((e: any) => console.log('Error is', e));
  }

  registerAttendance(student: string) {
    const date = new Date().toISOString().split('T')[0];
    this.attendanceList.push({ date, student });
  }

}
