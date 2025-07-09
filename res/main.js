import { greet }   from 'greeting';
import { answer }  from 'answer';

document.getElementById('out').textContent =
  `${greet('World')} — ${answer()}`; 