import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const currencyOptions = {
  USD: '&#36; USD',
  INR: '&#8377; INR',
  EUR: '&#8364; EUR',
};

export type AppHeaderProps = {
  active_cryptocurrencies: string;
  active_markets: string;
  total_market_cap: number;
};
export const AppHeader: React.FC<AppHeaderProps> = ({
  active_cryptocurrencies,
  active_markets,
  total_market_cap,
}) => {
  const [currency, setCurrency] = useState(currencyOptions.USD);
  const { t } = useTranslation();

  return (
    <Header>
      <HeaderContainer className="page-width">
        <HeaderTitle>
          {t('header.title')}
        </HeaderTitle>
        <InfoLabelContainer>
          <span>
            {t('header.cryptocurrencies')} {active_cryptocurrencies}
          </span>
          <span>
            {t('header.markets')} {active_markets}
          </span>
          <span>
            {t('header.marketCap')} ${total_market_cap.toLocaleString()}
          </span>
        </InfoLabelContainer>

        <SelectPosContainer>
          <SelectPosRelative>
            <CurrencyLabel htmlFor="currency">
              {t('header.currency')}
            </CurrencyLabel>
            <CurrencySelect value={currency} id="currency" onChange={ev => setCurrency(ev.target.value)}>
              {Object.entries(currencyOptions).map(([k, v]) => (
                <option value={k} dangerouslySetInnerHTML={{ __html: v }} />
              ))}
            </CurrencySelect>
            <DownTriangle />
          </SelectPosRelative>
        </SelectPosContainer>
      </HeaderContainer>
    </Header>
  );
};

const Header = styled.header`
background-image: linear-gradient(135deg, #81FBB8 10%, #28C76F 100%);

@media only screen and (max-width: 768px) {
  height: 200px;
}
`;

const HeaderContainer = styled.div`
height: 250px;
padding: 20px;
color: #FFF;
position: relative;
text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.25);

@media only screen and (max-width: 768px) {
  height: 200px;
}
`;

const HeaderTitle = styled.h1`
font-size: 40px;
letter-spacing: 0.5px;
position: absolute;
top: 50%;
left: 50%;
line-height: 0;
margin: 0;
transform: translate(-50%, -50%);
text-transform: uppercase;

@media only screen and (max-width: 768px) {
  font-size: 26px;
}
`;

const InfoLabelContainer = styled.div`
font-size: 12px;
color: #000;
text-shadow: none;

& span{
  margin: 0 20px;
}

@media only screen and (max-width: 768px) {
  & span {
    display: inline-block;
    padding-bottom: 5px;
  }
}
`;

const SelectPosContainer = styled.div`
position: absolute;
right: 16px;
top: 16px;

@media only screen and (max-width: 768px) {
  bottom: 16px;
  top: auto;
}
`;

const SelectPosRelative = styled.div`
position: relative;
`;

const CurrencyLabel = styled.label`
font-size: 12px;
font-weight: 400;
padding-right: 10px;
letter-spacing: 0.5px;
text-shadow: none;
`;

const CurrencySelect = styled.select`
border: 0;
background: #FFF;
color: #000;
padding: 5px 15px;
text-transform: uppercase;
font-size: 14px;
border-radius: 4px;
display: inline-block;
min-width: 95px;
appearance: none;
text-align: center;

&:focus
{
  outline: none;
}

& option
{
  text-align: center;
}
`;

const DownTriangle = styled.div`
pointer-events: none;
width: 0; 
height: 0; 
border-left: 6px solid transparent;
border-right: 6px solid transparent;
border-top: 6px solid #000;
position: absolute;
right: 8px;
top: 50%;
transform: translateY(-50%);
`;