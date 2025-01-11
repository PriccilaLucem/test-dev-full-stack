import * as Yup from "yup";

const taskSchema = Yup.object({
  title: Yup.string().required("Título é obrigatório"),
  description: Yup.string().nullable(),
  status: Yup.string().oneOf(["PENDING", "IN_PROGRESS", "COMPLETED"], "Status inválido").required("Status é obrigatório")
});

export default taskSchema;