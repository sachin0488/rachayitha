import { useSnackbar } from "notistack";
import { useCallback } from "react";

export default function useFormError() {
  const { enqueueSnackbar } = useSnackbar();

  const handleFormError = useCallback(
    (error) => {
      const [field, info] = Object.entries(error)?.[0];
      enqueueSnackbar(info.message, {
        variant: "error",
      });
    },
    [enqueueSnackbar]
  );

  return { handleFormError };
}
