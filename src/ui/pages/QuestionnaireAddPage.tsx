import { Grid } from "@mui/material";
import { useNotifier } from "core/infrastructure";
import * as React from "react";
import { memo } from "react";
import { useIntl } from "react-intl";
import { useLocation, useNavigate } from "react-router-dom";
import { Block } from "ui/components/base";
import { QuestionnaireEditForm } from "ui/components/QuestionnaireEditForm";

export const QuestionnaireAddPage = memo(() => {
  const notifier = useNotifier();
  const location = useLocation();
  const navigate = useNavigate();
  const intl = useIntl();

  if (location.state === undefined) {
    notifier.error(intl.formatMessage({ id: "questionnaire_add_notfound" }));
    navigate("/questionnaires");
  }

  const questionnaire = location.state;
  questionnaire.context = "";
  return (
    <React.Fragment>
      <Grid component="main" container justifyContent="center" spacing={3}>
        <Grid item xs={12} md={8}>
          <Block>
            <QuestionnaireEditForm
              questionnaire={questionnaire}
              isEditMode={false}
            />
          </Block>
        </Grid>
      </Grid>
    </React.Fragment>
  );
});

QuestionnaireAddPage.displayName = "QuestionnaireAddPage";
