import { DummyResource, DummyResourceCollection } from "webpanel-data";
import { boolean, number, text, withKnobs } from "@storybook/addon-knobs";

import { Card } from "antd";
import React from "react";
import { action } from "@storybook/addon-actions";
import { api } from "./api";
import { configuratorItemDefinition } from "../lib/ConfiguratorItemDefinition";
import { storiesOf } from "@storybook/react";

storiesOf("Comments", module)
  .addDecorator(withKnobs)
  .add(
    "list",
    () => {
      const entity = configuratorItemDefinition(api);
      return (
        <div style={{ padding: 80 }}>
          <Card title="ItemDefinitions">
            {entity.getListView({
              fields: ["type", "state", "createdAt"]
            })}
          </Card>
        </div>
      );
    },
    { notes: "A very simple component" }
  );
