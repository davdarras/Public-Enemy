import { Grid } from "@mui/material";
import { Questionnaire } from "core/application/model";
import { makeQuestionnaireUseCase } from "core/factory";
import * as React from "react";
import { memo, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Block, Loader } from "ui/components/base";
import { QuestionnaireEditForm } from "ui/components/QuestionnaireEditForm";

export const QuestionnaireEditPage = memo(() => {
  const [questionnaire, setQuestionnaire] = useState<Questionnaire>();
  const questionnaireUseCase = makeQuestionnaireUseCase();
  const { id } = useParams();
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const idNumber = Number(id);
    setLoading(true);
    questionnaireUseCase
      .getQuestionnaire(idNumber)
      .then((questionnaireData) => {
        setQuestionnaire(questionnaireData);
        setLoading(false);
      });
  }, []);

  return (
    <React.Fragment>
      <Grid component="main" container justifyContent="center" spacing={3}>
        <Grid item xs={12} md={8}>
          <Block>
            {questionnaire ? (
              <QuestionnaireEditForm
                questionnaire={questionnaire}
                isEditMode={true}
              />
            ) : (
              <Loader isLoading={isLoading}></Loader>
            )}
          </Block>
        </Grid>
      </Grid>
    </React.Fragment>
  );
});

QuestionnaireEditPage.displayName = "QuestionnaireEditPage";
