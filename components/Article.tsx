import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Wrapper = styled.header`
  padding: 1rem 0 3rem;
`;

const Title = styled.h1`
  color: #000000;
  font-size: 1rem;
  text-decoration: none; 
`;

const Content = styled.div`
  img {
    height: 200px;
    float: right;
  }
`;

interface ArticleProps {
  title: string,
  date: string,
  src: string,
  text: string,
}

const Article: React.SFC<ArticleProps> = (props) => {
  return (
    <Wrapper>
      <Title data-testid="title">{props.title} {props.date}</Title>
      <Content>
        <img
          data-testid="img"
          src={`https://upply-interview.herokuapp.com/images/${props.src}`}
          alt="js"
        />
        <div>{props.text}</div>
      </Content>
    </Wrapper>
  )
}

export default Article;
