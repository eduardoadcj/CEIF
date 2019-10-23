import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

export class QRCodeScanner {

    constructor(private barcodeScanner: BarcodeScanner){}

    scanCode(onComplete): void{
        this.barcodeScanner.scan().then(barcode => onComplete(barcode));
    }

    //https://www.youtube.com/watch?v=2N6MZVULgDM

}