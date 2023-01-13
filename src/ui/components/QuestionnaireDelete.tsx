import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import { Questionnaire } from "core/application/model";
import { makeQuestionnaireUseCase } from "core/factory";
import { useNotifier } from "core/infrastructure";
import { memo, useState } from "react";
import { useIntl } from "react-intl";
import { ConfirmationDialog } from "./base";

type QuestionnaireDeleteType = {
  questionnaire: Questionnaire;
  loadQuestionnaires: () => void;
};

/**
 * Component used for questionnaire deletion
 */
export const QuestionnaireDelete = memo(
  ({ questionnaire, loadQuestionnaires }: QuestionnaireDeleteType) => {
    const [openConfirmationDialog, setOpenConfirmationDialog] = useState(false);
    const notifier = useNotifier();
    const questionnaireUseCase = makeQuestionnaireUseCase();
    const intl = useIntl();

    /**
     * open/close confirmation dialog
     */
    const toggleConfirmationDialog = () => {
      setOpenConfirmationDialog(!openConfirmationDialog);
    };

    /**
     * Event used when deletion is triggered
     */
    const handleDelete = () => {
      questionnaireUseCase
        .deleteQuestionnaire(questionnaire.id)
        .then(() => {
          notifier.success(
            intl.formatMessage({ id: "questionnaire_delete_success" })
          );
        })
        .catch((err: Error) => {
          notifier.error(intl.formatMessage({ id: "error_request_failed" }));
          console.log(err);
        })
        .finally(() => {
          loadQuestionnaires();
          setOpenConfirmationDialog(false);
        });
    };

    return (
      <>
        <IconButton aria-label="delete" onClick={toggleConfirmationDialog}>
          <DeleteIcon />
        </IconButton>
        <ConfirmationDialog
          title={intl.formatMessage({
            id: "questionnaire_delete_confirmation_label",
          })}
          body={intl.formatMessage(
            { id: "questionnaire_delete_confirmation_body" },
            { name: questionnaire.label }
          )}
          disagreeBtnLabel={intl.formatMessage({
            id: "questionnaire_delete_confirmation_disagree",
          })}
          agreeBtnLabel={intl.formatMessage({
            id: "questionnaire_delete_confirmation_agree",
          })}
          handleConfirmation={handleDelete}
          openConfirmationDialog={openConfirmationDialog}
          setOpenConfirmationDialog={setOpenConfirmationDialog}
        />
      </>
    );
  }
);

QuestionnaireDelete.displayName = "QuestionnaireDelete";
