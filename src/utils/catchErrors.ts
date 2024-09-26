// Higher-order function for async/await error handling
const catchErrors = (fn) =>
  function (...args) {
    return fn(...args).catch((err) => {
      console.error(err);
    });
  };

export default catchErrors;
