export default {
  prettyDate (date) {
    if (!date) {
      return null;
    }
    if(!(date instanceof Date)) {
      let originalDate = date;
      date = new Date(date);
      if (date.toString() === 'Invalid Date') {
        return originalDate;
      }
    }
    return new Intl.DateTimeFormat("ru-Ru", {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    }).format(date);
  }
}
