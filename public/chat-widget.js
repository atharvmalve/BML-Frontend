class ChatWidget extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <style>
        .chat-frame {
          position: fixed;
          bottom: 20px;
          right: 20px;
          width: 380px;
          height: 520px;
          border: none;
          z-index: 999999;
        }

        @media (max-width: 768px) {
          .chat-frame {
            width: 90vw;
            height: 80vh;
            bottom: 10px;
            right: 10px;
          }
        }
      </style>

      <iframe class="chat-frame" src="/"></iframe>
    `;
  }
}

customElements.define("chat-widget", ChatWidget);
