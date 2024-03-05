import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const marketList = [
  {
    name: 'Binance',
    url: 'https://www.binance.com'
  },
  {
    name: 'Coinbase',
    url: 'https://www.coinbase.com'
  },
  {
    name: 'KuCoin',
    url: 'https://www.kucoin.com'
  },
  {
    name: 'CEX.IO',
    url: 'https://cex.io'
  },
  {
    name: 'Cryptopia',
    url: 'https://www.cryptopia.co.nz'
  },
  {
    name: 'Bitfinex',
    url: 'https://www.bitfinex.com'
  },
  {
    name: 'Bittrex',
    url: 'https://bittrex.com'
  },
  {
    name: 'QUOINEX',
    url: 'https://quoinex.com'
  },
  {
    name: 'CoinEx',
    url: 'https://www.coinex.com'
  },
  {
    name: 'Bitstamp',
    url: 'https://www.bitstamp.net'
  },
  {
    name: 'Kraken',
    url: 'https://www.kraken.com'
  },
];

export const Market: React.FC = () => {
  const { t } = useTranslation();
  return (
    <MarketContainer>
      <h2>
        {t('market.title')}
      </h2>
      <MarketList>
        {
          marketList.map((item, index) => {
            return <li key={index}><a href={item.url} target="_blank" rel="noopener noreferrer">{item.name}</a></li>
          })
        }
      </MarketList>
    </MarketContainer>
  );
};

const MarketContainer = styled.div`
text-align: left;

& h2
{
  color: #495057;
  margin: 0;
  padding-top: 40px;
  font-size: 24px;
}

@media only screen and (min-width: 769px) and (max-width: 1200px)
{
  padding: 0 16px;
}
@media only screen and (max-width: 768px)
{
  padding: 0 16px;

  & h2
  {
    font-size: 18px;
    padding-top: 20px;
  }
}
`;

const MarketList = styled.ul`
list-style: none;
color: #000;
padding-left: 0;

& li {
  display: inline-block;
  margin-right: 25px;

  & a {
    text-decoration: none;
    display: inline-block;
    cursor: pointer;
    color: #0F4E8A;

    &:hover,
    &:focus {
      opacity: 0.8;
      outline: none;
      color: red;
    }
  }
}
`;