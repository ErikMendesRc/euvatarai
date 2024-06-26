import { Component, Inject, OnInit } from '@angular/core';
import { ChatbotService } from '../chatbot.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private chatbotService: ChatbotService) { }

  ngOnInit(): void {
    this.chatbotService.showChatbotApp();
  }

  onCloseChatbotApp() {
    this.chatbotService.closeChatbotApp();
  }
}