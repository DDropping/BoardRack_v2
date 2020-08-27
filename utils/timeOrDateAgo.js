export default (date, isFormatDate) => {
  let timeAgo = new Date() - new Date(date);
  let newDate = new Date(date).toString();
  let day = newDate.split(" ")[2];
  let month = newDate.split(" ")[1];

  //if timeAgo is greater than 1 day or if explicitly asked to return date (isFormatDate)
  if (timeAgo > 8.64e7 || isFormatDate) {
    return day + " " + month;
  }
  //if timeAgo is < 1 hour  < 1 day
  else if (timeAgo > 3.6e6) {
    if (Math.floor(timeAgo / 3.6e6) === 1) {
      return "1 hour ago";
    } else {
      return Math.floor(timeAgo / 3.6e6) + " hours ago";
    }
  }
  //if timeAgo is < 1 min < 1 hour
  else if (timeAgo > 60e3) return Math.floor(timeAgo / 60e3) + " minutes ago";
  //else return 1 min
  else return "1 minute";
};
