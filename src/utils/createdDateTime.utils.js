const createdDateTime = () => {
  // created DateTime now

  const dateTimeNow = () => {
    const date = new Date();

    return new Date(date)
      .toLocaleString("sv-SE", { timeZone: "Asia/Jakarta" })
      .replace("T", "");
  };

  const expires_at = (time) => {
    const date = new Date();

    return new Date(date.getTime() + time * 60 * 60 * 1000)
      .toLocaleString("sv-SE", { timeZone: "Asia/Jakarta" })
      .replace("T", "");
  };

  return { dateTimeNow, expires_at };
};

export default createdDateTime;
