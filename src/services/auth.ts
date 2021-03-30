interface Response {
  token: string;
  user: {
    name: string;
    email: string;
  };
}

export function signIn(): Promise<Response> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: 'my token UDHASDUHDASDHUADS',
        user: {
          name: 'Maganez',
          email: 'maganezf@testmail.com',
        },
      });
    }, 2000);
  });
}
