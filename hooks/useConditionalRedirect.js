import { useRouter } from "next/router";
import { useEffect } from "react";

export default function useConditionalRedirect({ condition, path }) {
  const router = useRouter();

  useEffect(() => {
    if (condition) {
      router.push(path);
    }
  }, [condition, path, router]);
}
