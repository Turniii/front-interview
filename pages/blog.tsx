import styled from 'styled-components';
import { useState } from 'react';
import Layout from '../components/Layout';
import Article from '../components/Article';
import articleService from '../services/articleService'

const FilterInput = styled.div`
  display: flex;
  width: 100%;
  div {
  }
  input {
    margin-left: 20px;
    flex-grow: 2
  }
`;

const Blog: React.FC = () => {
  const [ filter, setFilter ] = useState('');
  const [sort, setSort] = useState('descending');
  const service = articleService(filter, sort);
  let articles;
  service.status === 'loaded' && service.payload
    ? articles = service.payload
    : articles = [];

  const handleSearchChange = (e) => {
    setFilter(e.target.value);
  }
  const handleSortChange = (e) => {
    setSort(e.target.value);
  }
  return (
    <Layout>
      <h1 data-testid="page-title">Blog</h1>
      <p data-testid="text">This page displays blog posts fetched from: https://upply-interview.herokuapp.com/</p>
      <FilterInput>
        <label>
          Search:
        </label>
        <input type='text' value={filter} onChange={handleSearchChange} />
        <select value={sort} onChange={handleSortChange}>
          <option value='descending'>Descending</option>
          <option value='ascending'>Ascending</option>
        </select>
      </FilterInput>
      {service.status === 'loading' && <div>Loading...</div>}
      {
        service.status === 'loaded' &&
        articles.map(article => (
          <Article 
            key={article.id}
            title={article.title}
            date={article.date}
            src={article.src}
            text={article.text}
          />
        ))
      }
      {service.status === 'error' && (
        <div>Error, the backend moved to the dark side.</div>
      )}
    </Layout>
  )
};

export default Blog;
