module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Your function was deployed via CI/CD and executed successfully!",
    }),
  };
};
