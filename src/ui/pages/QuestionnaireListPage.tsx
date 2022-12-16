import AddCircleIcon from "@mui/icons-material/AddCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import {
  Button,
  Grid,
  IconButton,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Questionnaire } from "core/application/model";
import { makeQuestionnaireUseCase } from "core/factory";
import { useNotifier } from "core/infrastructure";
import { memo, useEffect, useState } from "react";
import { useIntl } from "react-intl";
import { Link } from "react-router-dom";
import { makeStyles } from "tss-react/mui";
import { Block, Loader, Title } from "ui/components/base";
import { QuestionnaireDelete } from "ui/components/QuestionnaireDelete";

export const QuestionnaireListPage = memo(() => {
  const [questionnaires, setQuestionnaires] = useState<Questionnaire[]>();
  const questionnaireUseCase = makeQuestionnaireUseCase();
  const intl = useIntl();
  const [isLoading, setLoading] = useState(true);
  const notifier = useNotifier();
  const { classes } = useStyles();

  useEffect(() => {
    loadQuestionnaires();
  }, []);

  const loadQuestionnaires = (): void => {
    setLoading(true);
    questionnaireUseCase
      .getQuestionnaires()
      .then((questionnairesData) => {
        setQuestionnaires(questionnairesData);
        setLoading(false);
      })
      .catch(() => {
        notifier.error(intl.formatMessage({ id: "error_request_failed" }));
      });
  };

  return (
    <Grid component="main" container justifyContent="center">
      <Grid item xs={12} md={10}>
        <Block>
          <Loader isLoading={isLoading}>
            <Title>
              {intl.formatMessage({ id: "questionnaire_list_label" })}
            </Title>
            <Stack direction="row" justifyContent="end">
              <Link to={`/questionnaires/check`} className={classes.btnAdd}>
                <Button
                  color="info"
                  variant="contained"
                  startIcon={<AddCircleIcon />}
                >
                  {intl.formatMessage({ id: "questionnaire_list_btn_add" })}
                </Button>
              </Link>
            </Stack>
            <TableContainer component={Paper}>
              <Table aria-label="questionnaire table">
                <TableHead>
                  <TableRow>
                    <TableCell>
                      {intl.formatMessage({
                        id: "questionnaire_id",
                      })}
                    </TableCell>
                    <TableCell>
                      {intl.formatMessage({
                        id: "questionnaire_name",
                      })}
                    </TableCell>
                    <TableCell>
                      {intl.formatMessage({
                        id: "questionnaire_mode",
                      })}
                    </TableCell>
                    <TableCell align="center">
                      {intl.formatMessage({
                        id: "questionnaire_list_actions",
                      })}
                    </TableCell>
                  </TableRow>
                </TableHead>
                {
                  <TableBody>
                    {questionnaires?.map((questionnaire) => (
                      <TableRow key={questionnaire.id}>
                        <TableCell component="th" scope="row">
                          {questionnaire.poguesId}
                        </TableCell>
                        <TableCell component="th" scope="row">
                          {questionnaire.label}
                        </TableCell>
                        <TableCell component="th" scope="row">
                          {questionnaire.modes}
                        </TableCell>
                        <TableCell align="center">
                          <Link to={`/questionnaires/${questionnaire.id}`}>
                            <IconButton aria-label="edit">
                              <SettingsIcon />
                            </IconButton>
                          </Link>
                          <QuestionnaireDelete
                            questionnaire={questionnaire}
                            loadQuestionnaires={loadQuestionnaires}
                          />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                }
              </Table>
            </TableContainer>
          </Loader>
        </Block>
      </Grid>
    </Grid>
  );
});

const useStyles = makeStyles()((theme) => ({
  btnAdd: {
    marginBottom: theme.spacing(2),
  },
}));

QuestionnaireListPage.displayName = "QuestionnaireListPage";
