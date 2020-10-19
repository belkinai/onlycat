let uuid = 1000;

export default {
  mounted () {
    this.uuid = uuid.toString();
    uuid += 1;
  },
};
