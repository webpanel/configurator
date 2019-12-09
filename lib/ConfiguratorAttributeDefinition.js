var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { SortInfoOrder } from "webpanel-data";
import { Entity } from "webpanel-admin";
export var getConfiguratorAttributeDefinition = function (config) {
    return new Entity(__assign(__assign({}, config), { dataSource: config.dataSource, name: "ConfiguratorAttributeDefinition", list: {
            initialSorting: [{ columnKey: "name", order: SortInfoOrder.ascend }]
        }, searchable: true }))
        .stringField("name")
        .enumField("type", {
        options: [
            { value: "STRING", label: "String" },
            { value: "INT", label: "Int" },
            { value: "FLOAT", label: "Float" }
        ]
    });
};
//# sourceMappingURL=ConfiguratorAttributeDefinition.js.map