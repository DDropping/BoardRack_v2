export default (date) => {
  let timePostedAgo = new Date() - new Date(date);

  if (timePostedAgo > 8.64e7) {
    if (Math.floor(timePostedAgo / 8.64e7) === 1) {
      return "1 day";
    } else {
      return Math.floor(timePostedAgo / 8.64e7) + " days";
    }
  } else if (timePostedAgo > 3.6e6) {
    if (Math.floor(timePostedAgo / 3.6e6) === 1) {
      return "1 hour";
    } else {
      return Math.floor(timePostedAgo / 3.6e6) + " hours";
    }
  } else if (timePostedAgo > 60e3) {
    if (Math.floor(timePostedAgo / 60e3) === 1) {
      return "1 minute";
    } else {
      return Math.floor(timePostedAgo / 60e3) + " minutes";
    }
  } else return "1 minute";
};
