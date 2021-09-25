import { FC } from "react";
import { MessageWithoutId } from "../../../types/message";
import { useFormik, FormikErrors } from "formik";
import { Conversation } from "../../../types/conversation";
import { getLoggedUserId } from "../../../utils/getLoggedUserId";
import { sendNewMessage } from "../../../utils/messages";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { Input, Layout, Button } from "./Form.styles";

interface OwnProps {
  onSubmit(): void;
  conversation: Conversation;
}

const Form: FC<OwnProps> = ({ conversation, onSubmit }) => {
  const { t } = useTranslation();

  const { values, handleChange, handleSubmit, resetForm } = useFormik({
    initialValues: {
      newMessage: "",
    },
    validate: ({ newMessage }) => {
      // TIP : use Yup to validate form if it will be more complex
      const errors: FormikErrors<{
        newMessage: string;
      }> = {};

      if (!newMessage) {
        errors.newMessage = "errors.form.required";
      }

      return errors;
    },
    onSubmit: (values) => {
      const newMessage: MessageWithoutId = {
        authorId: getLoggedUserId(),
        conversationId: conversation.id,
        body: values.newMessage,
        timestamp: Date.now(),
      };
      sendNewMessage(newMessage)
        .then(resetForm)
        .then(onSubmit)
        .catch(() => toast.error(t("errors.messages.send")));
    },
  });

  return (
    <Layout onSubmit={handleSubmit}>
      <Input
        id="newMessage"
        name="newMessage"
        placeholder={t("messagePlaceholder")}
        type="text"
        onChange={handleChange}
        value={values.newMessage}
      />
      <Button type="submit">{t("submit")}</Button>
    </Layout>
  );
};

export default Form;
