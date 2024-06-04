import axiosInstance from '@/utils/axios';

export const signUpParent = async (data: any) => {
  try {
    const response = await axiosInstance.post('/user', {
      ...data,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to sign up');
  }
};

export const Login = async (data: any) => {
  try {
    const response = await axiosInstance.post('/user/login', {
      ...data,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to sign in');
  }
};

export const getParent = async () => {
  try {
    const response = await axiosInstance.get('/parent');
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to get Parent');
  }
};

export const activateParent = async (id: any) => {
  try {
    const response = await axiosInstance.patch('/parent/' + id, {
      activate: true,
    });
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || 'Failed to activate Parent'
    );
  }
};

export const deleteParent = async (id: any) => {
  try {
    const response = await axiosInstance.delete('/parent/' + id);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to delete Parent');
  }
};

export const createMeeting = async (data: any) => {
  try {
    const response = await axiosInstance.post('/meeting', {
      ...data,
    });
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || 'Failed to create Meeting'
    );
  }
};

export const getMeetings = async () => {
  try {
    const response = await axiosInstance.get('/meeting');
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to get Meetings');
  }
};
