const serverIp:string = '159.223.212.20';

const post = async (url:string, data: any) => {
    const options: RequestInit = {
      method: 'POST',
      credentials: 'include',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data),
    };
    const res = await fetch(`http://${serverIp}:4000/${url}`, options);
    return res.json();
  };

  export default post;
