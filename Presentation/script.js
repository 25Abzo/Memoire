document.getElementById('start-chat').addEventListener('click', function() {
  document.getElementById('chat-container').classList.remove('d-none');
  this.classList.add('d-none');
});

document.getElementById('send-message').addEventListener('click', function() {
  const userInput = document.getElementById('user-input').value;
  if (userInput.trim() !== '') {
      appendMessage('User', userInput);
      document.getElementById('user-input').value = '';

      // Simuler une réponse du chatbot
      setTimeout(function() {
          appendMessage('Chatbot', 'Merci pour votre message !');
      }, 1000);
  }
});

function appendMessage(sender, message) {
  const chatBox = document.getElementById('chat-box');
  const messageElement = document.createElement('div');
  messageElement.classList.add('mb-2');
  messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
  chatBox.appendChild(messageElement);
  chatBox.scrollTop = chatBox.scrollHeight;
}
