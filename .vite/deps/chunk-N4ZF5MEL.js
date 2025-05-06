import {
  DefaultPropsProvider_default,
  GlobalStyles_default,
  defaultTheme_default,
  extendSxProp,
  identifier_default,
  require_jsx_runtime,
  require_prop_types,
  unstable_memoTheme,
  useDefaultProps
} from "./chunk-CJN7B5LS.js";
import {
  __toESM,
  require_react
} from "./chunk-Q462PRL3.js";

// node_modules/@mui/material/esm/zero-styled/index.js
var React2 = __toESM(require_react(), 1);

// node_modules/@mui/material/esm/GlobalStyles/GlobalStyles.js
var React = __toESM(require_react(), 1);
var import_prop_types = __toESM(require_prop_types(), 1);
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
function GlobalStyles(props) {
  return (0, import_jsx_runtime.jsx)(GlobalStyles_default, {
    ...props,
    defaultTheme: defaultTheme_default,
    themeId: identifier_default
  });
}
true ? GlobalStyles.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The styles you want to apply globally.
   */
  styles: import_prop_types.default.oneOfType([import_prop_types.default.array, import_prop_types.default.func, import_prop_types.default.number, import_prop_types.default.object, import_prop_types.default.string, import_prop_types.default.bool])
} : void 0;

// node_modules/@mui/material/esm/zero-styled/index.js
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
function internal_createExtendSxProp() {
  return extendSxProp;
}

// node_modules/@mui/material/esm/utils/memoTheme.js
var memoTheme = unstable_memoTheme;
var memoTheme_default = memoTheme;

// node_modules/@mui/material/esm/DefaultPropsProvider/DefaultPropsProvider.js
var React3 = __toESM(require_react(), 1);
var import_prop_types2 = __toESM(require_prop_types(), 1);
var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
function DefaultPropsProvider(props) {
  return (0, import_jsx_runtime3.jsx)(DefaultPropsProvider_default, {
    ...props
  });
}
true ? DefaultPropsProvider.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: import_prop_types2.default.node,
  /**
   * @ignore
   */
  value: import_prop_types2.default.object.isRequired
} : void 0;
function useDefaultProps2(params) {
  return useDefaultProps(params);
}

export {
  internal_createExtendSxProp,
  memoTheme_default,
  useDefaultProps2 as useDefaultProps
};
//# sourceMappingURL=chunk-N4ZF5MEL.js.map
