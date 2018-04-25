module.exports = (handler) => {
  return async (event, context, callback) => {
    try {
      const results = await handler(context);
      callback(null, results);
    } catch (error) {
      callback(error);
    }
  };
};