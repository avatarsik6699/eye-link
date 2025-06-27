import { Box, Container, Divider, Grid, rem } from "@mantine/core";
import type { FC } from "react";
import LinkCard from "./ui/link-card";
import { useDisclosure } from "@mantine/hooks";
import LinkEditor from "./ui/link-editor";
import CreateLinkButton from "./ui/create-link-button";
import DisplaySettings from "./ui/display-settings/display-settings";
import Filters, { type FiltersProps } from "./ui/filters";
import { Link } from "@tanstack/react-router";

const links = Array.from({ length: 10 }).map(() => {
  return {};
});

const filters: FiltersProps["items"] = [
  {
    id: 1,
    value: "authors",
    label: "Авторы",
    children: [
      {
        id: 11,
        value: "john-doe",
        label: "John Doe",
      },
      {
        id: 12,
        value: "jane-smith",
        label: "Jane Smith",
      },
    ],
  },
  {
    id: 2,
    value: "tags",
    label: "Теги",
    children: [
      {
        id: 21,
        value: "react",
        label: "React",
      },
      {
        id: 22,
        value: "typescript",
        label: "TypeScript",
      },
    ],
  },
  {
    id: 3,
    value: "statuses",
    label: "Статусы",
    children: [
      {
        id: 31,
        value: "active",
        label: "Активные",
      },
      {
        id: 32,
        value: "inactive",
        label: "Неактивные",
      },
    ],
  },
];

const MainPage: FC = () => {
  const [isLinkEdtiorOpened, { open: onOpenLinkEditor, close: onCloseLinkEditor }] = useDisclosure(false);

  return (
    <>

      <Container size="xl">
        <Grid justify="space-between">
          <Grid.Col styles={{ col: { display: "flex", gap: "var(--mantine-spacing-xs)" } }} span={8}>
            <DisplaySettings />
            <Divider
              color="dark.0"
              opacity={0.75}
              h={24}
              size={1}
              orientation="vertical"
              styles={{
                root: {
                  alignSelf: "center",
                },
              }}
            />
            <Filters items={filters} />
          </Grid.Col>
          <Grid.Col styles={{ col: { display: "flex", justifyContent: "flex-end" } }} span={2}>
            <CreateLinkButton />
          </Grid.Col>
        </Grid>

        <Grid>
          {links.map(() => (
            <Grid.Col span={{ base: 12, sm: 6, lg: 4 }}>
              <LinkCard onOpenLinkeEditor={onOpenLinkEditor} />
            </Grid.Col>
          ))}
        </Grid>
      </Container>

      <LinkEditor opened={isLinkEdtiorOpened} onClose={onCloseLinkEditor} />
    </>
  );
};

export default MainPage;
