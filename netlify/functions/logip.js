exports.handler = async (event, context) => {
  const ip =
    event.headers['x-forwarded-for'] ||
    event.headers['client-ip'] ||
    event.ip ||
    "unknown";

  console.log("Visitor IP:", ip);

  return {
    statusCode: 200,
    body: "ok"
  };
};
