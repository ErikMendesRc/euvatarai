import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatbotService {

  constructor() { }

  closeChatbotApp() {
    const overlay = document.getElementById('chatbot-overlay');
    if(overlay){
      overlay.style.display = 'none'; // Oculta a sobreposição
    } else {
      console.error('Erro ao fechar chatbot.');
    }
  }

  showChatbotApp() {
    const overlay = document.getElementById('chatbot-overlay');
    if (overlay) {
      overlay.style.display = 'block'; // Exibe a sobreposição
    } else {
      console.error('Elemento "chatbot-overlay" não encontrado.');
    }
  }
  
}