const UseDate = {
  format(date, options, type = "dateTime") {
    const d = new Date(date);

    switch (type) {
      case "date":
        return d.toLocaleDateString("en-US", options);
      case "time":
        return d.toLocaleTimeString("en-US", options);
      default:
        return d.toLocaleString("en-US", options);
    }
  },

  fullDateTime(date) {
    return this.format(date, {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  },

  getFormattedDate(date) {
    return {
      weekday: this.format(date, { weekday: "short" }, "date"),
      monthDay: this.format(date, { day: "numeric", month: "long" }, "date"),
    };
  },

  localTime(date) {
    return this.format(
      date,
      { hour12: false, hour: "2-digit", minute: "2-digit" },
      "time",
    );
  },

  to24Hour(time) {
    return this.format(
      `1970-01-01T${time}`,
      { hour12: false, hour: "2-digit", minute: "2-digit" },
      "time",
    );
  },
};

export default UseDate;