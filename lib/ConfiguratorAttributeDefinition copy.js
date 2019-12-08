import { SortInfoOrder } from "webpanel-data";
import { Entity } from "webpanel-admin";
export var getConfiguratorAttributeDefinition = function (dataSource) {
    return new Entity({
        name: "ConfiguratorAttributeDefinition",
        list: {
            initialSorting: [{ columnKey: "name", order: SortInfoOrder.ascend }]
        },
        dataSource: dataSource,
        searchable: true
    })
        .stringField("name")
        .enumField("type", {
        options: [
            { value: "STRING", label: "String" },
            { value: "INT", label: "Int" },
            { value: "FLOAT", label: "Float" }
        ]
    });
};
//# sourceMappingURL=ConfiguratorAttributeDefinition copy.js.map