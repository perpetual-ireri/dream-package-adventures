// ================================================================
//  CHATBOT LOGIC – Rule-based (no API key required)
//  To upgrade to a real AI (OpenAI, DeepSeek, etc.):
//  1. Replace the `getBotResponse(userMsg)` function with an async
//     call to your chosen API endpoint.
//  2. Pass `userMsg` and receive the AI reply.
//  3. Keep the UI logic (addMessage, etc.) unchanged.
// ================================================================

const toggleBtn = document.getElementById('chatbotToggle');
const panel = document.getElementById('chatbotPanel');
const closeBtn = document.getElementById('chatbotClose');
const messagesDiv = document.getElementById('chatbotMessages');
const inputField = document.getElementById('chatbotInput');
const sendBtn = document.getElementById('chatbotSend');
const quickBtns = document.querySelectorAll('.quick-btn');

// Open/close panel
toggleBtn.addEventListener('click', () => {
  panel.classList.toggle('open');
});
closeBtn.addEventListener('click', () => {
  panel.classList.remove('open');
});

// Send message
function sendMessage() {
  const text = inputField.value.trim();
  if (!text) return;
  addMessage(text, 'user');
  inputField.value = '';
  // Simulate typing delay
  setTimeout(() => {
    const reply = getBotResponse(text);
    addMessage(reply, 'bot');
  }, 300);
}

sendBtn.addEventListener('click', sendMessage);
inputField.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') sendMessage();
});

// Quick reply buttons
quickBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const msg = btn.dataset.msg;
    inputField.value = msg;
    sendMessage();
  });
});

// Add message to chat
function addMessage(text, sender) {
  const div = document.createElement('div');
  div.className = sender === 'user' ? 'user-msg' : 'bot-msg';
  div.textContent = text;
  messagesDiv.appendChild(div);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

// ===== RULE-BASED RESPONSES =====
function getBotResponse(msg) {
  const lower = msg.toLowerCase();
  if (lower.includes('kenya') && (lower.includes('safari') || lower.includes('tour'))) {
    return "🇰🇪 Our Kenya safaris cover Maasai Mara, Amboseli, Tsavo, Lake Nakuru, and more. We have 3–7 day packages. Want a sample itinerary?";
  }
  if (lower.includes('price') || lower.includes('cost') || lower.includes('how much')) {
    if (lower.includes('mara') || lower.includes('maasai')) {
      return "A 3-day Maasai Mara budget safari starts from $450 per person. Luxury options are also available – contact us for a custom quote!";
    }
    return "Pricing varies by package. Our 3-day Kenya safari starts from $450, 5-day from $850. We also have luxury lodge options.";
  }
  if (lower.includes('chopper') || lower.includes('helicopter') || lower.includes('hire')) {
    return "🚁 Yes! We offer helicopter charters from Nairobi – scenic flights, Mara transfers, and VIP aerial safaris. Rates start at $1,200/hour. Contact us for a quote.";
  }
  if (lower.includes('vehicle') || lower.includes('car') || lower.includes('4x4') || lower.includes('land cruiser')) {
    return "🚙 Our Land Cruiser 4x4s are safari-modified with pop-up roofs. Self-drive from $120/day, chauffeur-driven from $180/day. Unlimited mileage and insurance included.";
  }
  if (lower.includes('book') || lower.includes('booking') || lower.includes('how do i')) {
    return "📅 You can book by filling the enquiry form on our Contact page, or click the WhatsApp button to chat with a human agent now!";
  }
  if (lower.includes('mombasa') || lower.includes('coastal') || lower.includes('beach')) {
    return "🏖️ Our Local Adventures include Mombasa and Malindi packages – beach resorts, water sports, and cultural tours. Weekend getaways start from $200.";
  }
  if (lower.includes('human') || lower.includes('agent') || lower.includes('person')) {
    return "👤 I'll connect you with a human agent. Click the WhatsApp button (green icon) on the bottom-right – we reply within minutes!";
  }
  if (lower.includes('hello') || lower.includes('hi') || lower.includes('hey')) {
    return "Hello! 👋 I'm your safari assistant. Ask me about Kenya safaris, vehicle hire, or Mombasa getaways!";
  }
  // Default fallback
  return "Thanks for your question! I'm still learning. For detailed quotes, please contact us via WhatsApp or the contact form. I can also tell you about our safaris, vehicle hire, and more!";
}