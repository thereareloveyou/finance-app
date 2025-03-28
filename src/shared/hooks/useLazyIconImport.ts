import { ComponentProps, FC, useEffect, useRef, useState } from "react";

export const useLazyIconImport = (name: string) => {
  const importRef = useRef<FC<ComponentProps<"svg">>>(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error>();

  useEffect(() => {
    setLoading(true);
    const importIcon = async () => {
      try {
        importRef.current = (
          await import(`../../assets/Icons/${name}.svg?react`)
        ).default;
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };
    importIcon();
  }, [name]);

  return { error, loading, Svg: importRef.current };
};
