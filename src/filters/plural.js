export default {
  pluralize(count, forms) {
    count = Math.abs(count) % 100;
    let module = count % 10;
    if (count > 10 && count < 20) {
      return forms[2];
    }
    if (module > 1 && module < 5) {
      return forms[1];
    }
    if (module === 1) {
      return forms[0];
    }
    return forms[2];
  }
}
