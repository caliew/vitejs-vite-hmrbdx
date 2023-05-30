import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ExampleComponent = (props) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <p>AXIOS API DATA Posts</p>
      {data && (
        <ul>
          {data.map((post,index) => {
            return index < props.limits ? <li className='listItem' key={post.id}>{post.title}</li> : null
          })}
        </ul>
      )}
    </div>
  );
};

export default ExampleComponent;
