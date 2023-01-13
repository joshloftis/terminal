import React, { useState } from 'react';
import { LabelContainer, Label, Container, EmailLink, Button, Copied } from './styles';

export default () => {
  const [reveal, setReveal] = useState(false);
  const [active, setActive] = useState(false);
  const [copied, setCopied] = useState('');

  const copyToClipboard = () => {
    navigator.clipboard.writeText('josh.a.loftis@gmail.com');
    setCopied('Copied!');
  };

  const clickHandler = () => {
    setReveal(!reveal);
    setActive(!active);
  };

  const isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);

  return (
    <Container className={active && !copied ? 'contact_button active' : 'contact_button'} onClick={clickHandler}>
      {!reveal && !copied && (
        <>
          <Label className="label">Contact Me</Label>
          <LabelContainer />
        </>
      )}
      {reveal && !copied && (
        <>
          <EmailLink href="mailto:josh.a.loftis@gmail.com" style={{ display: `${reveal}` }}>
            josh.a.loftis@gmail.com
          </EmailLink>
          {isChrome && (
            <Button type="button" style={{ display: `${reveal}` }} onClick={copyToClipboard}>
              Copy
            </Button>
          )}
        </>
      )}
      {copied && <Copied>{copied}</Copied>}
    </Container>
  );
};
