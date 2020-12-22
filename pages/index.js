import React from 'react';
import Layout from '../components/Layout';
import styled from '@emotion/styled';

const ContainerHome = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`


export default function Home() {
  return (
    <div>
      <Layout>
        <ContainerHome>
          <h1>Home page</h1>
        </ContainerHome>
      </Layout>
    </div>
  )
}
