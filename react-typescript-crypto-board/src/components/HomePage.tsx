import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import styled from 'styled-components';
import { AppHeader } from './AppHeader';
import { Card } from "./Card";
import { Market } from "./Market";
import { Footer } from "./Footer";
import { TickerData } from '../types';

export const HomePage: React.FC = () => {
  const ticker = useQuery('ticker', () => axios<TickerData[]>('/mock/ticker.json'));
  const globalData = useQuery('global', () => axios('/mock/global.json'));

  useEffect(() => {
    const timer = setInterval(() => {
      ticker.refetch();
      globalData.refetch();
    }, 60 * 1000);

    return () => clearInterval(timer);
  });

  const isLoading = ticker.isLoading || globalData.isLoading;

  return (
    <AppContainer>
      {!ticker.data?.data || !globalData.data?.data ? 'Loading...' : (
        <>
          <AppHeader
            active_cryptocurrencies={globalData.data?.data.active_cryptocurrencies}
            active_markets={globalData.data?.data.active_markets}
            total_market_cap={globalData.data?.data.total_market_cap}
          />
          <LoadingContainer isLoading={!isLoading}>
            <center>
              <h3>Loading...</h3>
            </center>
          </LoadingContainer>
          <LoadingContainer isLoading={isLoading}>
            <div className="page-width">
              <Market />
            </div>
            <div className="wrapper">
              <div className="page-width">
                <CardContainer>
                  {
                    ticker.data?.data.map((item, index) => {
                      return <Card data={item} key={index} />
                    })
                  }
                </CardContainer>
              </div>
            </div>
            <Footer />
          </LoadingContainer>
        </>
      )}
    </AppContainer>
  );
};

const AppContainer = styled.div`
text-align: center;
`;

const LoadingContainer = styled.div<{ isLoading: boolean }>`
display: ${props => props.isLoading ? 'none' : 'block'};
`;

const CardContainer = styled.div`
display: flex;
justify-content: space-between;
padding: 20px 10px;
align-items: center;
flex-wrap: wrap;
margin-top: 0;
margin-bottom: 30px;

@media only screen and (max-width: 768px) {
  display: block;
  margin-bottom: 0;
}
`;

