const GetErr = (error) => {
  return error.response && error.response.data.msg
    ? error.response.data.msg
    : error.message;
};

export default GetErr;
