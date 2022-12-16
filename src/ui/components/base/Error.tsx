import Typography from "@mui/material/Typography";
import * as React from "react";
import { memo } from "react";
import { Title } from ".";

export const Error = memo(() => {
  return (
    <React.Fragment>
      <Title>Erreur</Title>
      <Typography component="p">Une erreur est survenue !!!</Typography>
    </React.Fragment>
  );
});

Error.displayName = "Error";
