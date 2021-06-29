import React from 'react';
import { Button, TextField, Typography, Container, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Options = ({children}) => {
  return (
    <div>
      Options
      {children}
    </div>
  )
}

export default Options
