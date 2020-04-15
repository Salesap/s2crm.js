/**
 * Simple JS library for S2CRM
 * @see {@link https://github.com/salesap/s2crm.js}
 * @license MIT
 * @version 0.1
 * @author S2CRM <info@salesap.ru> 
 */
class S2CRM {
  constructor(hash) {
    this.hash = hash
  }

  notification(text, type = 'info') {
    window.parent.postMessage({
      action: 'notification',
      hash: this.hash,
      data: { message: text, type: type }
    }, '*');
  }

  closeModal() {
    window.parent.postMessage({
      action: 'close_modal',
      hash: this.hash,
      data: {}
    }, '*');
  }
}