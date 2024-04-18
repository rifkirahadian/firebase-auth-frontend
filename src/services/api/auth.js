import axiosRequest from "@/utils/axiosRequest";

const register = async (data) => {
  const {
    data: response,
    isError,
    error,
  } = await axiosRequest({
    url: `${process.env.NEXT_PUBLIC_API_HOST}/auth/register`,
    method: 'POST',
    data,
  });

  return { data: response, isError, error };
}

const putLastLogin = async (data) => {
  const {
    data: response,
    isError,
    error,
  } = await axiosRequest({
    url: `${process.env.NEXT_PUBLIC_API_HOST}/auth/last-login`,
    method: 'PUT',
    data,
  });

  return { data: response, isError, error };
}

export { register, putLastLogin }