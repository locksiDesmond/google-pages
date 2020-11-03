import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Redirect, useHistory } from 'react-router-dom';
import { Button } from './../components/ui/AddBookmarkDialog';
import CodeIcon from '@material-ui/icons/Code';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

interface TextProps {
  big?: boolean;
  diff?: boolean;
}

const NoInternetWrapper = styled.div`
  display: flex;
  margin-top: 5rem;
  width: min(600px, 90%);
  margin: auto;
  padding-top: 5rem;
`;
const Center = styled.div`
  display: flex;
  flex-direction: column;
`;
const Text = styled.p<TextProps>`
  font-size: ${(props) => (props.big ? '1.8rem' : '1.3rem')};
  font-weight: ${(props) => props.big && 'bold'};
  color: ${(props) => (props.diff ? 'blue' : '#000')};
  margin: 1rem 0;
  align-items: center;
  display: flex;
`;
const Span = styled.span`
  color: blue;
  font-weight: 600;
`;

const NoInternet = () => {
  const [redirect, setRedirect] = useState(false);
  const history = useHistory();
  const handleKeydown: (e: any) => void = (e) => {
    if (e.key === 's') {
      setRedirect(true);
    }
  };
  useEffect(() => {
    document.addEventListener('keydown', handleKeydown);
    return () => {
      document.addEventListener('keydown', handleKeydown);
    };
  }, []);
  return (
    <NoInternetWrapper>
      <Center>
        {redirect && <Redirect to="/search" />}
        <ErrorOutlineIcon />
        <Text big>This site can't be reached</Text>
        <Text>
          <Span>locksipage.netlify.app</Span>'s server can't be reached
        </Text>
        <Text>Try:</Text>
        <ul>
          <li>Checking the connection</li>
          <li>Checking the proxy and the firewall Running</li>
          <li>Windows Network Diagnostics</li>
        </ul>

        <Text diff>
          Try pressing<span style={{ marginLeft: '.5rem' }}> s</span>
        </Text>
        <Text>
          Locksi <CodeIcon />
        </Text>
        <Button
          onClick={() => history.push('/')}
          margin="3rem 0 0 0"
          type="submit"
        >
          Reload
        </Button>
      </Center>
    </NoInternetWrapper>
  );
};

export default NoInternet;
