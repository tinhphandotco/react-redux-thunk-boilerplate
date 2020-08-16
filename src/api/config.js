export const authHeader = () => {
  const token = localStorage.getItem('token');

  return {
    Authorization: `Token ${token}`,
  };
};
