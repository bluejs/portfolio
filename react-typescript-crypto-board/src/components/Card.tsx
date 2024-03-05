import React from 'react';
import { TickerData } from '../types';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

type CardProps = {
  data: TickerData;
};

export const Card: React.FC<CardProps> = ({
  data,
}) => {
  const {
    "Name": name,
    "Ticker": symbol,
    "Price ($)": price,
    "Market Cap ($M)": market_cap,
    "1H (%)": change_1h,
    "1D (%)": change_24h,
    "1W (%)": change_7d,
  } = data;
  var ss = parseInt(market_cap, 10);
  var marketCap = ss.toLocaleString();
  const { t } = useTranslation();

  return (
    <CardContainer>
      <ImgHolder>
        <img src={`/crypto/${symbol.toUpperCase()}.png`} alt={symbol} onError={ev => {
          ev.currentTarget.src = '/crypto/unknown.png';
        }} />
      </ImgHolder>
      <NameLab>{name}</NameLab>
      <SymbolLab>{symbol}</SymbolLab>
      <PriceLab>
        <div>
          ${price.toFixed(2)}
        </div>
      </PriceLab>
      <StatusLab>
        <div>
          <span className="lab-width">
            {t('card.1h')}
          </span>
          <span className={Math.sign(change_1h) === 1 ? 'positive' : 'negative'}>{change_1h.toFixed(2)}%</span>
        </div>
      </StatusLab>
      <MarketCapLab>{t('header.marketCap')} ${marketCap}M</MarketCapLab>
      <StatusDay>
        <div className="left">
          <span className="lab-width">
            {t('card.24h')}
          </span>
          <span className={Math.sign(change_24h) === 1 ? 'positive' : 'negative'}>{change_24h.toFixed(2)}%</span>
        </div>
        <div className="right">
          <span className="lab-width">
            {t('card.7d')}
          </span>
          <span className={Math.sign(change_7d) === 1 ? 'positive' : 'negative'}>{change_7d.toFixed(2)}%</span>
        </div>
      </StatusDay>
    </CardContainer>
  );
};

const CardContainer = styled.div`
background: #FFF;
padding: 20px 15px 15px 15px;
border-radius: 4px;
min-width: 270px;
margin: 20px 0px;
letter-spacing: 0.5px;
box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.1);
transition: all 0.1s ease;
position: relative;
max-width: 300px;

&:hover {
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.1);
  transform: scale(1.05);
}

@media only screen and (max-width: 768px) {
  margin: auto;
  margin-bottom: 20px;
}

& .lab-width {
  width: 100px;
}
`;

const ImgHolder = styled.div`
margin-bottom: 10px;

& img {
  max-width: 50px;
}
`;

const NameLab = styled.div`
font-size: 16px;
color: #000;
padding-bottom: 0px;
font-weight: 500;
`;

const SymbolLab = styled.div`
font-size: 14px;
color: #777;
padding-bottom: 10px;
`;

const PriceLab = styled.div`
font-size: 15px;
padding-bottom: 15px;
font-weight: bold;
`;

const StatusLab = styled.div`
padding-bottom: 15px;
text-transform: uppercase;
font-size: 14px;
`;

const MarketCapLab = styled.div`
font-size: 12px;
color: #868e96;
`;

const StatusDay = styled.div`
padding-top: 15px;
font-size: 12px;
display: flex;
justify-content: space-between;
padding-right: 20px;

.positive {
  color: #2b8a3e;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-bottom: 6px solid #2b8a3e;
    top: 50%;
    transform: translateY(-50%);
    right: -15px;
  }
}

.negative {
  color: #c92a2a;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 6px solid #c92a2a;
    top: 50%;
    transform: translateY(-50%);
    right: -15px;
  }
}
`;

