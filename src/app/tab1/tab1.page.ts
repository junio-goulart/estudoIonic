import { Component, OnInit } from '@angular/core';
import { Media, MediaObject } from '@ionic-native/media/ngx';
import { Platform } from '@ionic/angular';

@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
    calmaFile: MediaObject;
    uiFile: MediaObject;
    gostaFile: MediaObject;
    calma = '/android_asset/public/assets/que-e-isso-meu-filho-calma.wav';
    ui = '/android_asset/public/assets/ui-rodrigo-faro.wav';
    gosta = '/android_asset/public/assets/tmpd9mca4be.wav';

    constructor(
        public platform: Platform, private media: Media
    ) { }

    ngOnInit(): void {
        this.calmaFile = this.media.create(this.calma);
        this.gostaFile = this.media.create(this.gosta);
        this.uiFile = this.media.create(this.ui);
    }

    som1(): void {
        this.calmaFile.play();
    }

    som2(): void {
        this.uiFile.play();
    }

    som3(): void {
        this.gostaFile.play();
    }

}
