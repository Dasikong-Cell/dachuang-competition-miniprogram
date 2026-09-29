const util = require("../../utils/util.js");

Page({
  data: {
    motto: "Hello 大创",
    time: ""
  },
  onLoad() {
    this.setData({ time: util.formatTime(new Date()) });
  }
});
