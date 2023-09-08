import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as logoutApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";

export function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: logout, isLoading } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      // remove all queries to prevent them being stored in the cache of react query
      queryClient.removeQueries();
      // navigate to login
      navigate("/login", { replace: true });
    },
  });

  return { logout, isLoading };
}
