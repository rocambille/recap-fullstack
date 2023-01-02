const sayHello = (req, res, next) => {
  console.warn("hello");

  next();
};

module.exports = sayHello;
