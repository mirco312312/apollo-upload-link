import { __assign } from '../../../node_modules/tslib/tslib.es6.js';
import { print } from 'graphql/language/printer';

var selectHttpOptionsAndBody = function (operation, fallbackConfig) {
    var configs = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        configs[_i - 2] = arguments[_i];
    }
    var options = __assign(__assign({}, fallbackConfig.options), { headers: fallbackConfig.headers, credentials: fallbackConfig.credentials });
    var http = fallbackConfig.http || {};
    configs.forEach(function (config) {
        options = __assign(__assign(__assign({}, options), config.options), { headers: __assign(__assign({}, options.headers), config.headers) });
        if (config.credentials)
            options.credentials = config.credentials;
        http = __assign(__assign({}, http), config.http);
    });
    var operationName = operation.operationName, extensions = operation.extensions, variables = operation.variables, query = operation.query;
    var body = { operationName: operationName, variables: variables };
    if (http.includeExtensions)
        body.extensions = extensions;
    if (http.includeQuery)
        body.query = print(query);
    return {
        options: options,
        body: body,
    };
};

export { selectHttpOptionsAndBody };
//# sourceMappingURL=selectHttpOptionsAndBody.js.map
