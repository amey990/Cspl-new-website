export async function fetchApi(endpoint: string, options: RequestInit = {}) {
  const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL || "";
  const fullUrl = `${API_BASE}${endpoint}`;

  // Retrieve token if in client environment
  let token: string | null = null;
  if (typeof window !== 'undefined') {
    token = localStorage.getItem('commedia_hr_token');
  }

  // Set up default headers
  const headers = new Headers(options.headers || {});
  if (!headers.has('Content-Type') && !(options.body instanceof FormData)) {
    headers.set('Content-Type', 'application/json');
  }

  if (token) {
    headers.set('Authorization', `Bearer ${token}`);
  }

  const response = await fetch(fullUrl, {
    ...options,
    headers,
  });

  const isJson = response.headers.get('content-type')?.includes('application/json');
  const data = isJson ? await response.json() : await response.text();

  if (!response.ok) {
    // Return early if we want consumers to handle redirects on 401/403
    // E.g. throw an error with status so we can catch it.
    throw {
      status: response.status,
      message: data.message || data || 'An error occurred during API request.',
      data: data
    };
  }

  return data;
}
