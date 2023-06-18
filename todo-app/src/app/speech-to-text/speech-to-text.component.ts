import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { VoiceRecognitionService } from '../service/voice-recognition.service'

@Component({
  selector: 'app-speech-to-text',
  templateUrl: './speech-to-text.component.html',
  styleUrls: ['./speech-to-text.component.css'],
  providers: [VoiceRecognitionService]
})
export class SpeechToTextComponent implements OnInit {


  constructor(
    public service : VoiceRecognitionService
  ) {
    this.service.init()
   }

  ngOnInit(): void {
  }

  startService(){
    this.service.start()
  }

  @Output() testChange: EventEmitter<any> = new EventEmitter();

  stopService(){
    this.testChange.emit(this.service.text)
    this.service.stop()
  }

}