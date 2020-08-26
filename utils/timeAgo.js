export default (date) => {
  console.log(date);
  let timePostedAgo = new Date() - new Date(date);

  if (timePostedAgo > 8.64e7)
    return Math.floor(timePostedAgo / 8.64e7) + " day(s)";
  else if (timePostedAgo > 3.6e6)
    return Math.floor(timePostedAgo / 3.6e6) + " hour(s)";
  else if (timePostedAgo > 60e3)
    return Math.floor(timePostedAgo / 60e3) + " minute(s)";
  else return "1 minute";
};
