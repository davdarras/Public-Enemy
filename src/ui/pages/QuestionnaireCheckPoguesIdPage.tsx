import GetAppIcon from "@mui/icons-material/GetApp";
import LoadingButton from "@mui/lab/LoadingButton";
import { Box, Grid, Stack, TextField } from "@mui/material";
import { Questionnaire } from "core/application/model";
import { useNotifier } from "core/infrastructure";
import * as React from "react";
import { memo, useEffect, useState } from "react";
import { useIntl } from "react-intl";
import { useNavigate, useParams } from "react-router-dom";
import { Block, Loader, Title } from "ui/components/base";

export const QuestionnaireCheckPoguesIdPage = memo(
  (props: {
    fetchPoguesQuestionnaire: (poguesId: string) => Promise<Questionnaire>;
  }) => {
    const notifier = useNotifier();
    const { poguesId } = useParams<string>();
    const navigate = useNavigate();
    const intl = useIntl();
    const [isSubmitting, setSubmitting] = useState(false);
    const [poguesIdInput, setPoguesIdInput] = useState("");
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
      if (poguesId !== undefined) {
        setPoguesIdInput(poguesId);
        handleQuestionnaireRetrieval(poguesId);
        return;
      }
      setLoading(false);
    }, []);

    /**
     * Retrieve questionnaire from pogues Id and redirect to questionnaire add page
     * @param pId pogues identifier
     * @returns
     */
    const handleQuestionnaireRetrieval = (pId: string) => {
      if (pId === undefined) {
        return;
      }
      setSubmitting(true);

      props
        .fetchPoguesQuestionnaire(pId)
        .then((questionnaireData) => {
          notifier.success(
            intl.formatMessage({ id: "questionnaire_retrieve_success" })
          );
          navigate("/questionnaires/add", { state: questionnaireData });
          return;
        })
        .catch((err) => {
          notifier.error(intl.formatMessage({ id: "error_request_failed" }));
          console.log(err);
          setSubmitting(false);
          setLoading(false);
        });
    };

    const handlePoguesIdChange = (
      event: React.ChangeEvent<HTMLInputElement>
    ) => {
      setPoguesIdInput(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      handleQuestionnaireRetrieval(poguesIdInput);
    };

    return (
      <Loader isLoading={isLoading}>
        <Grid component="main" container justifyContent="center" spacing={3}>
          <Grid item xs={12} md={8}>
            <Block>
              <Title>
                {intl.formatMessage({ id: "questionnaire_add_label" })}
              </Title>
              <Box component="form" onSubmit={handleSubmit}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    margin="normal"
                    label={intl.formatMessage({ id: "questionnaire_id" })}
                    fullWidth
                    variant="outlined"
                    helperText={intl.formatMessage({
                      id: "questionnaire_id_helper",
                    })}
                    value={poguesIdInput}
                    onChange={handlePoguesIdChange}
                  />
                </Grid>

                <Stack direction="row" justifyContent="center">
                  <LoadingButton
                    type="submit"
                    color="info"
                    variant="contained"
                    startIcon={<GetAppIcon />}
                    loading={isSubmitting}
                    loadingPosition="start"
                  >
                    {intl.formatMessage({ id: "questionnaire_retrieve" })}
                  </LoadingButton>
                </Stack>
              </Box>
            </Block>
          </Grid>
        </Grid>
      </Loader>
    );
  }
);

QuestionnaireCheckPoguesIdPage.displayName = "QuestionnaireCheckPoguesIdPage";
