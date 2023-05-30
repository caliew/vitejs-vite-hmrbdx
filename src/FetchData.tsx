import React, { useEffect, useState } from 'react';

const FetchData = (props) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
          throw new Error('Request failed');
        }
        const data = await response.json();
        setData(data);
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
      <h2>FETCH API DATA Posts</h2>
      {data && (
        <ul>
          {data.map((post,index) => { return index < props.limits ? <li key={post.id}>{post.title}</li> : null })}
        </ul>
      )}
    </div>
  );
};

export default FetchData;
