export function formatCurrency(value) {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
    }).format(value);
  }
  
  export function formatDate(dateStr) {
    return new Intl.DateTimeFormat('en-NG', {
      day: 'numeric',
      month: 'short',
      hour: '2-digit',
      minute: '2-digit',
    }).format(new Date(dateStr));
  }
  
  export function calcMinutesLeft(dateStr) {
    const now = Date.now();
    const target = new Date(dateStr).getTime();
    return Math.round((target - now) / 60000);
  }
  