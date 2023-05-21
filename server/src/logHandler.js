import { insertLog } from "./routes/log.js";

export const logHandler = (req, res, next) => {
  // Check if request is not get method, then log this request
  if (req.method != "GET") {
    // Check if there is any error in response
    var end = res.end;
    var isError;

    res.end = function (data) {
      res.end = end;
      if (data) {
        isError = data.includes("Error");
      }
      res.end(data);
    };

    // Get log type using request URL, perform string operations
    // Example: /amenity/get/646858823b2d9c6d5df0a774 => Amenity Get
    const logType = req.url
      .substring(1)
      .split("/")
      .slice(0, 2)
      .map((reqUrl) => {
        return reqUrl[0].toUpperCase() + reqUrl.substring(1);
      })
      .join(" ");

    const logDesc = `Method: ${req.method} URL: ${req.url} Hostname: ${req.hostname}`;

    // After response sent, insert log
    res.on("finish", () => {
      const logIsSuccess = res.statusCode == 200 && !isError;
      const response = insertLog({
        logType: logType,
        description: logDesc,
        isSuccess: logIsSuccess,
      });
    });
  }
  next();
};
