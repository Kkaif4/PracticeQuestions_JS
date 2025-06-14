export const logger = (req, res, next) => {
  console.log(
    `method: ${req.method}, protocol: ${req.protocol}, Host: ${req.get(
      'host'
    )}, URL: ${req.originalUrl}`
  );
  next();
};

