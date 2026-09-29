function formatTime(date) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  const pad = (n) => (n < 10 ? "0" + n : "" + n);

  return (
    [year, month, day].map(pad).join("-") +
    " " +
    [hour, minute, second].map(pad).join(":")
  );
}

module.exports = { formatTime };
