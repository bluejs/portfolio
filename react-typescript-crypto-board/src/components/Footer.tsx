import React from 'react';
import styled from 'styled-components';
import github from '../img/github.svg';
import linkedIn from '../img/linkedin.svg';

export const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <div className="page-width">
        <Credit>
          API: <a href="https://coinmarketcap.com/" target="_blank" rel="noopener noreferrer">CoinMarketCap</a>
        </Credit>
        <Contact>
          <a href="https://github.com/bluejs" target="_blank" rel="noopener noreferrer">
            <img src={github} alt="Github" />
          </a>
          <a href="https://www.linkedin.com/in/blue-s" target="_blank" rel="noopener noreferrer">
            <img src={linkedIn} alt="Linkedin" />
          </a>
        </Contact>
      </div>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
background: #343a40;
padding: 10px 10px;
overflow: hidden;
letter-spacing: 0.5px;

a {
  color: #FFF;
  text-decoration: underline;
  letter-spacing: 0.5px;
  font-size: 12px;

  &:hover {
    opacity: 0.8;
  }
}
`;

const Credit = styled.div`
text-align: left;
color: #FFF;
font-size: 14px;
float: left;
`;

const Contact = styled.div`
text-align: right;
float: right;

& a:not(:last-child) {
  margin-right: 20px;
}

& img {
  max-width: 20px;
}
`;
