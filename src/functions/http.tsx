const SERVER_IP = process.env.REACT_APP_SERVER_API_ADDRESS;

console.log(SERVER_IP);

const post = async (url:string, data: any) => {
    const options: RequestInit = {
      method: 'POST',
      credentials: 'include',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data),
    };
    const res = await fetch(`http://${SERVER_IP}/${url}`, options);
    return res.json();
  };

  export default post;
