import { useEffect, useState } from 'react';
import { Blog } from '../types/Blog';
import { Article } from '../types/Article';

export interface Articles {
  results: Article[];
}

const usePostStarshipService = (filter, sort) => {
  const [result, setResult] = useState<Blog<Articles>>({
    status: 'loading'
  });

  useEffect(() => {
    fetch('https://upply-interview.herokuapp.com/')
      .then(response => response.json())
      .then(response => {
        const reg = new RegExp(filter);
        const payload = response.map(article =>
          reg.test(article) ? article : null  
        ).filter(e => !!e).sort((a, b) =>
          sort === 'descending'
          ? (console.log(a.date), new Date(b.date).getTime() - new Date(a.date).getTime())
          : new Date(a.date).getTime() - new Date(b.date).getTime()
        )
        return setResult({ status: 'loaded', payload })
      })
      .catch(error => setResult({ status: 'error', error }));
  }, []);

  return result;
};

export default usePostStarshipService;