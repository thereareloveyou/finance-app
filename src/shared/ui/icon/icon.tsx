import { ComponentProps, FC } from "react";
import { useLazyIconImport } from "../../hooks/useLazyIconImport";

interface IconProps extends ComponentProps<"svg"> {
  iconName: string;
}

export const IconLazy: FC<IconProps> = ({ iconName, ...props }) => {
  const { loading, error, Svg } = useLazyIconImport(iconName);

  if (error) {
    return "An error occurred";
  }

  if (loading) {
    return "Loading...";
  }

  if (!Svg) {
    return null;
  }

  return <Svg {...props} />;
};
