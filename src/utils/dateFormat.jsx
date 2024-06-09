let htmlDateFormat = (date = new Date()) => {
  date = new Date(date || new Date()).toLocaleDateString().split("/");
  let month = date[0].length === 1 ? `0${date[0]}` : date[0];
  let day = date[1].length === 1 ? `0${date[1]}` : date[1];
  let year = date[2];

  let dateFormat = `${year}-${month}-${day}`;
  return dateFormat;
};

export default htmlDateFormat;
