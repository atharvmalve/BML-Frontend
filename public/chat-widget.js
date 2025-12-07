(function () {
  const script = document.createElement("script");
  script.src = "https://bml-frontend-eta.vercel.app/chat-widget.js";
  script.onload = () => {
    const widget = document.createElement("chat-widget");
    document.body.appendChild(widget);
  };
  document.head.appendChild(script);
})();
