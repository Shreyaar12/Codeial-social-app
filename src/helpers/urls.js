const API_ROOT = 'https://codeial.codingninjas.com:8000/api/v2';
// https://codeial.codingninjas.com:8000/api/v2/posts?page=1&limit=5
export const APIUrls = {
  login: () => `${API_ROOT}/users/login`,
  signup: () => `${API_ROOT}/users/signup`,
  editProfile: () => `${API_ROOT}/users/edit`,
  fetchPosts: (page = 1, limit = 5) =>
    `${API_ROOT}/posts?page=${page}&limit=${limit}`,
};
