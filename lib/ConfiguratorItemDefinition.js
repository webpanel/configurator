import { SortInfoOrder } from "webpanel-data";
import { Entity } from "webpanel-admin";
export var configuratorItemDefinition = function (dataSource) {
    return new Entity({
        name: "ConfiguratorItemDefinition",
        list: {
            initialSorting: [{ columnKey: "name", order: SortInfoOrder.ascend }]
        },
        dataSource: dataSource,
        searchable: true
    }).stringField("name");
};
//# sourceMappingURL=ConfiguratorItemDefinition.js.map