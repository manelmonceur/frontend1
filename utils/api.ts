import { API_BASE_URL, ENDPOINTS } from './config';

async function callAPI(endpoint, options = {}) {
  const url = `${API_BASE_URL}${endpoint}`;
  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      //@ts-ignore
      ...options.headers,
    },
    ...options,
  });

  if (!response.ok) {
    const errorMessage = await response.text();
    throw new Error(errorMessage || 'Something went wrong');
  }

  return response.json();
}

export function fetchData() {
  return callAPI(ENDPOINTS.FETCH_DATA);
}
