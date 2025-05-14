import { useMantineColorScheme, Select } from "@mantine/core";

export const ColorSchemeSwitcher = () => {
  const { setColorScheme, colorScheme } = useMantineColorScheme();

  return (
    <Select
      data={[
        { value: "light", label: "Light" },
        { value: "dark", label: "Dark" },
        { value: "auto", label: "Auto" },
      ]}
      value={colorScheme}
      onChange={(value) => {
        if (value) {
          setColorScheme(value as "light" | "dark" | "auto");
        }
      }}
      placeholder="Select theme"
      size="xs"
      w={100}
    />
  );
};
