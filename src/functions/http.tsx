type OptionsGetType = {
    method?: string,
};

type OptionsPostType = {
    method?: string,
    body?: string
};

const get = async (url: string) => {
    const options: OptionsGetType = {
      method: 'GET',
    };
    const res = await fetch(`http://localhost:4000/${url}`, options);
    return res.json();
  };

  const post = async (url: string, data: any[]) => {
    const options: OptionsPostType = {
      method: 'POST',
      body: JSON.stringify(data),
    };
    const res = await fetch(`http://localhost:4000/${url}`, options);
    return res.json();
  };

  export { get, post };
