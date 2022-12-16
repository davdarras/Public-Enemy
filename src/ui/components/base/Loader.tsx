import { Box, CircularProgress } from "@mui/material";
import React, { memo, PropsWithChildren } from "react";
import { makeStyles } from "tss-react/mui";

type LoaderType = PropsWithChildren<{
  children?: React.ReactNode;
  isLoading: boolean;
}>;

/**
 * Loading component
 */
export const Loader = memo(({ isLoading, children }: LoaderType) => {
  const { classes } = useStyles();
  return (
    <React.Fragment>
      {isLoading ? (
        <Box className={classes.root}>
          <CircularProgress />
        </Box>
      ) : (
        children
      )}
    </React.Fragment>
  );
});

const useStyles = makeStyles()(() => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

Loader.displayName = "Loader";
