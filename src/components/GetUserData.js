import axios from "axios";

const getUserData = async (userId) => {
  const { data: user } = await axios(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );

  const { data: posts } = await axios(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );

  const resultData = { ...user, posts };
  return resultData;
};

export default getUserData;
