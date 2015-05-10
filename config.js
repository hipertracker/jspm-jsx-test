System.config({
  "baseURL": "/",
  "transpiler": "babel",
  "babelOptions": {
    "optional": [
      "runtime"
    ],
    stage: 1
  },
  "paths": {
    "*": "*.js",
    "github:*": "jspm_packages/github/*.js",
    "npm:*": "jspm_packages/npm/*.js"
  }
});

System.config({
  "depCache": {
    "npm:react@0.13.0-rc2/lib/PooledClass": [
      "npm:react@0.13.0-rc2/lib/invariant",
      "github:jspm/nodelibs-process@0.1.1"
    ],
    "npm:react@0.13.0-rc2/lib/emptyObject": [
      "github:jspm/nodelibs-process@0.1.1"
    ],
    "npm:react@0.13.0-rc2/lib/ReactLifeCycle": [
      "github:jspm/nodelibs-process@0.1.1"
    ],
    "npm:react@0.13.0-rc2/lib/CallbackQueue": [
      "npm:react@0.13.0-rc2/lib/PooledClass",
      "npm:react@0.13.0-rc2/lib/Object.assign",
      "npm:react@0.13.0-rc2/lib/invariant",
      "github:jspm/nodelibs-process@0.1.1"
    ],
    "npm:react@0.13.0-rc2/lib/ReactPerf": [
      "github:jspm/nodelibs-process@0.1.1"
    ],
    "npm:react@0.13.0-rc2/lib/ReactOwner": [
      "npm:react@0.13.0-rc2/lib/invariant",
      "github:jspm/nodelibs-process@0.1.1"
    ],
    "npm:react@0.13.0-rc2/lib/ReactPropTypeLocations": [
      "npm:react@0.13.0-rc2/lib/keyMirror"
    ],
    "npm:react@0.13.0-rc2/lib/ReactPropTypeLocationNames": [
      "github:jspm/nodelibs-process@0.1.1"
    ],
    "npm:react@0.13.0-rc2/lib/ReactNativeComponent": [
      "npm:react@0.13.0-rc2/lib/Object.assign",
      "npm:react@0.13.0-rc2/lib/invariant",
      "github:jspm/nodelibs-process@0.1.1"
    ],
    "npm:react@0.13.0-rc2/lib/Transaction": [
      "npm:react@0.13.0-rc2/lib/invariant",
      "github:jspm/nodelibs-process@0.1.1"
    ],
    "npm:react@0.13.0-rc2/lib/DOMProperty": [
      "npm:react@0.13.0-rc2/lib/invariant",
      "github:jspm/nodelibs-process@0.1.1"
    ],
    "npm:react@0.13.0-rc2/lib/dangerousStyleValue": [
      "npm:react@0.13.0-rc2/lib/CSSProperty"
    ],
    "npm:react@0.13.0-rc2/lib/toArray": [
      "npm:react@0.13.0-rc2/lib/invariant",
      "github:jspm/nodelibs-process@0.1.1"
    ],
    "npm:react@0.13.0-rc2/lib/getMarkupWrap": [
      "npm:react@0.13.0-rc2/lib/ExecutionEnvironment",
      "npm:react@0.13.0-rc2/lib/invariant",
      "github:jspm/nodelibs-process@0.1.1"
    ],
    "npm:react@0.13.0-rc2/lib/ReactMultiChildUpdateTypes": [
      "npm:react@0.13.0-rc2/lib/keyMirror"
    ],
    "npm:react@0.13.0-rc2/lib/setInnerHTML": [
      "npm:react@0.13.0-rc2/lib/ExecutionEnvironment",
      "github:jspm/nodelibs-process@0.1.1"
    ],
    "npm:react@0.13.0-rc2/lib/EventPluginRegistry": [
      "npm:react@0.13.0-rc2/lib/invariant",
      "github:jspm/nodelibs-process@0.1.1"
    ],
    "npm:react@0.13.0-rc2/lib/accumulateInto": [
      "npm:react@0.13.0-rc2/lib/invariant",
      "github:jspm/nodelibs-process@0.1.1"
    ],
    "npm:react@0.13.0-rc2/lib/ReactEventEmitterMixin": [
      "npm:react@0.13.0-rc2/lib/EventPluginHub"
    ],
    "npm:react@0.13.0-rc2/lib/isEventSupported": [
      "npm:react@0.13.0-rc2/lib/ExecutionEnvironment"
    ],
    "npm:react@0.13.0-rc2/lib/ReactEmptyComponent": [
      "npm:react@0.13.0-rc2/lib/ReactElement",
      "npm:react@0.13.0-rc2/lib/ReactInstanceMap",
      "npm:react@0.13.0-rc2/lib/invariant",
      "github:jspm/nodelibs-process@0.1.1"
    ],
    "npm:react@0.13.0-rc2/lib/ReactComponentEnvironment": [
      "npm:react@0.13.0-rc2/lib/invariant",
      "github:jspm/nodelibs-process@0.1.1"
    ],
    "npm:react@0.13.0-rc2/lib/shouldUpdateReactComponent": [
      "npm:react@0.13.0-rc2/lib/warning",
      "github:jspm/nodelibs-process@0.1.1"
    ],
    "npm:react@0.13.0-rc2/lib/flattenChildren": [
      "npm:react@0.13.0-rc2/lib/traverseAllChildren",
      "npm:react@0.13.0-rc2/lib/warning",
      "github:jspm/nodelibs-process@0.1.1"
    ],
    "npm:react@0.13.0-rc2/lib/EventPropagators": [
      "npm:react@0.13.0-rc2/lib/EventConstants",
      "npm:react@0.13.0-rc2/lib/EventPluginHub",
      "npm:react@0.13.0-rc2/lib/accumulateInto",
      "npm:react@0.13.0-rc2/lib/forEachAccumulated",
      "github:jspm/nodelibs-process@0.1.1"
    ],
    "npm:react@0.13.0-rc2/lib/getTextContentAccessor": [
      "npm:react@0.13.0-rc2/lib/ExecutionEnvironment"
    ],
    "npm:react@0.13.0-rc2/lib/SyntheticInputEvent": [
      "npm:react@0.13.0-rc2/lib/SyntheticEvent"
    ],
    "npm:react@0.13.0-rc2/lib/DefaultEventPluginOrder": [
      "npm:react@0.13.0-rc2/lib/keyOf"
    ],
    "npm:react@0.13.0-rc2/lib/SyntheticUIEvent": [
      "npm:react@0.13.0-rc2/lib/SyntheticEvent",
      "npm:react@0.13.0-rc2/lib/getEventTarget"
    ],
    "npm:react@0.13.0-rc2/lib/HTMLDOMPropertyConfig": [
      "npm:react@0.13.0-rc2/lib/DOMProperty",
      "npm:react@0.13.0-rc2/lib/ExecutionEnvironment"
    ],
    "npm:react@0.13.0-rc2/lib/MobileSafariClickEventPlugin": [
      "npm:react@0.13.0-rc2/lib/EventConstants",
      "npm:react@0.13.0-rc2/lib/emptyFunction"
    ],
    "npm:react@0.13.0-rc2/lib/findDOMNode": [
      "npm:react@0.13.0-rc2/lib/ReactCurrentOwner",
      "npm:react@0.13.0-rc2/lib/ReactInstanceMap",
      "npm:react@0.13.0-rc2/lib/ReactMount",
      "npm:react@0.13.0-rc2/lib/invariant",
      "npm:react@0.13.0-rc2/lib/isNode",
      "npm:react@0.13.0-rc2/lib/warning",
      "github:jspm/nodelibs-process@0.1.1"
    ],
    "npm:react@0.13.0-rc2/lib/ReactDefaultBatchingStrategy": [
      "npm:react@0.13.0-rc2/lib/ReactUpdates",
      "npm:react@0.13.0-rc2/lib/Transaction",
      "npm:react@0.13.0-rc2/lib/Object.assign",
      "npm:react@0.13.0-rc2/lib/emptyFunction"
    ],
    "npm:react@0.13.0-rc2/lib/LocalEventTrapMixin": [
      "npm:react@0.13.0-rc2/lib/ReactBrowserEventEmitter",
      "npm:react@0.13.0-rc2/lib/accumulateInto",
      "npm:react@0.13.0-rc2/lib/forEachAccumulated",
      "npm:react@0.13.0-rc2/lib/invariant",
      "github:jspm/nodelibs-process@0.1.1"
    ],
    "npm:react@0.13.0-rc2/lib/ReactDOMImg": [
      "npm:react@0.13.0-rc2/lib/EventConstants",
      "npm:react@0.13.0-rc2/lib/LocalEventTrapMixin",
      "npm:react@0.13.0-rc2/lib/ReactBrowserComponentMixin",
      "npm:react@0.13.0-rc2/lib/ReactClass",
      "npm:react@0.13.0-rc2/lib/ReactElement"
    ],
    "npm:react@0.13.0-rc2/lib/ReactDOMIframe": [
      "npm:react@0.13.0-rc2/lib/EventConstants",
      "npm:react@0.13.0-rc2/lib/LocalEventTrapMixin",
      "npm:react@0.13.0-rc2/lib/ReactBrowserComponentMixin",
      "npm:react@0.13.0-rc2/lib/ReactClass",
      "npm:react@0.13.0-rc2/lib/ReactElement"
    ],
    "npm:react@0.13.0-rc2/lib/ReactPropTypes": [
      "npm:react@0.13.0-rc2/lib/ReactElement",
      "npm:react@0.13.0-rc2/lib/ReactFragment",
      "npm:react@0.13.0-rc2/lib/ReactPropTypeLocationNames",
      "npm:react@0.13.0-rc2/lib/emptyFunction"
    ],
    "npm:react@0.13.0-rc2/lib/ReactDOMOption": [
      "npm:react@0.13.0-rc2/lib/ReactBrowserComponentMixin",
      "npm:react@0.13.0-rc2/lib/ReactClass",
      "npm:react@0.13.0-rc2/lib/ReactElement",
      "npm:react@0.13.0-rc2/lib/warning",
      "github:jspm/nodelibs-process@0.1.1"
    ],
    "npm:react@0.13.0-rc2/lib/ReactDOMSelect": [
      "npm:react@0.13.0-rc2/lib/AutoFocusMixin",
      "npm:react@0.13.0-rc2/lib/LinkedValueUtils",
      "npm:react@0.13.0-rc2/lib/ReactBrowserComponentMixin",
      "npm:react@0.13.0-rc2/lib/ReactClass",
      "npm:react@0.13.0-rc2/lib/ReactElement",
      "npm:react@0.13.0-rc2/lib/ReactUpdates",
      "npm:react@0.13.0-rc2/lib/Object.assign"
    ],
    "npm:react@0.13.0-rc2/lib/ReactDOMTextarea": [
      "npm:react@0.13.0-rc2/lib/AutoFocusMixin",
      "npm:react@0.13.0-rc2/lib/DOMPropertyOperations",
      "npm:react@0.13.0-rc2/lib/LinkedValueUtils",
      "npm:react@0.13.0-rc2/lib/ReactBrowserComponentMixin",
      "npm:react@0.13.0-rc2/lib/ReactClass",
      "npm:react@0.13.0-rc2/lib/ReactElement",
      "npm:react@0.13.0-rc2/lib/ReactUpdates",
      "npm:react@0.13.0-rc2/lib/Object.assign",
      "npm:react@0.13.0-rc2/lib/invariant",
      "npm:react@0.13.0-rc2/lib/warning",
      "github:jspm/nodelibs-process@0.1.1"
    ],
    "npm:react@0.13.0-rc2/lib/EventListener": [
      "npm:react@0.13.0-rc2/lib/emptyFunction",
      "github:jspm/nodelibs-process@0.1.1"
    ],
    "npm:react@0.13.0-rc2/lib/ReactInjection": [
      "npm:react@0.13.0-rc2/lib/DOMProperty",
      "npm:react@0.13.0-rc2/lib/EventPluginHub",
      "npm:react@0.13.0-rc2/lib/ReactComponentEnvironment",
      "npm:react@0.13.0-rc2/lib/ReactClass",
      "npm:react@0.13.0-rc2/lib/ReactEmptyComponent",
      "npm:react@0.13.0-rc2/lib/ReactBrowserEventEmitter",
      "npm:react@0.13.0-rc2/lib/ReactNativeComponent",
      "npm:react@0.13.0-rc2/lib/ReactDOMComponent",
      "npm:react@0.13.0-rc2/lib/ReactPerf",
      "npm:react@0.13.0-rc2/lib/ReactRootIndex",
      "npm:react@0.13.0-rc2/lib/ReactUpdates"
    ],
    "npm:react@0.13.0-rc2/lib/ReactPutListenerQueue": [
      "npm:react@0.13.0-rc2/lib/PooledClass",
      "npm:react@0.13.0-rc2/lib/ReactBrowserEventEmitter",
      "npm:react@0.13.0-rc2/lib/Object.assign"
    ],
    "npm:react@0.13.0-rc2/lib/SyntheticClipboardEvent": [
      "npm:react@0.13.0-rc2/lib/SyntheticEvent"
    ],
    "npm:react@0.13.0-rc2/lib/SyntheticFocusEvent": [
      "npm:react@0.13.0-rc2/lib/SyntheticUIEvent"
    ],
    "npm:react@0.13.0-rc2/lib/getEventKey": [
      "npm:react@0.13.0-rc2/lib/getEventCharCode"
    ],
    "npm:react@0.13.0-rc2/lib/SyntheticDragEvent": [
      "npm:react@0.13.0-rc2/lib/SyntheticMouseEvent"
    ],
    "npm:react@0.13.0-rc2/lib/SyntheticTouchEvent": [
      "npm:react@0.13.0-rc2/lib/SyntheticUIEvent",
      "npm:react@0.13.0-rc2/lib/getEventModifierState"
    ],
    "npm:react@0.13.0-rc2/lib/SyntheticWheelEvent": [
      "npm:react@0.13.0-rc2/lib/SyntheticMouseEvent"
    ],
    "npm:react@0.13.0-rc2/lib/SVGDOMPropertyConfig": [
      "npm:react@0.13.0-rc2/lib/DOMProperty"
    ],
    "npm:react@0.13.0-rc2/lib/createFullPageComponent": [
      "npm:react@0.13.0-rc2/lib/ReactClass",
      "npm:react@0.13.0-rc2/lib/ReactElement",
      "npm:react@0.13.0-rc2/lib/invariant",
      "github:jspm/nodelibs-process@0.1.1"
    ],
    "npm:react@0.13.0-rc2/lib/ReactDefaultPerfAnalysis": [
      "npm:react@0.13.0-rc2/lib/Object.assign"
    ],
    "npm:react@0.13.0-rc2/lib/performance": [
      "npm:react@0.13.0-rc2/lib/ExecutionEnvironment"
    ],
    "npm:react@0.13.0-rc2/lib/ReactServerRenderingTransaction": [
      "npm:react@0.13.0-rc2/lib/PooledClass",
      "npm:react@0.13.0-rc2/lib/CallbackQueue",
      "npm:react@0.13.0-rc2/lib/ReactPutListenerQueue",
      "npm:react@0.13.0-rc2/lib/Transaction",
      "npm:react@0.13.0-rc2/lib/Object.assign",
      "npm:react@0.13.0-rc2/lib/emptyFunction"
    ],
    "npm:react@0.13.0-rc2/lib/onlyChild": [
      "npm:react@0.13.0-rc2/lib/ReactElement",
      "npm:react@0.13.0-rc2/lib/invariant",
      "github:jspm/nodelibs-process@0.1.1"
    ],
    "npm:react@0.13.0-rc2/lib/ReactLink": [
      "npm:react@0.13.0-rc2/lib/React"
    ],
    "npm:react@0.13.0-rc2/lib/ReactComponentWithPureRenderMixin": [
      "npm:react@0.13.0-rc2/lib/shallowEqual"
    ],
    "npm:react@0.13.0-rc2/lib/ReactTransitionChildMapping": [
      "npm:react@0.13.0-rc2/lib/ReactChildren",
      "npm:react@0.13.0-rc2/lib/ReactFragment"
    ],
    "npm:react@0.13.0-rc2/lib/CSSCore": [
      "npm:react@0.13.0-rc2/lib/invariant",
      "github:jspm/nodelibs-process@0.1.1"
    ],
    "npm:react@0.13.0-rc2/lib/ReactTransitionEvents": [
      "npm:react@0.13.0-rc2/lib/ExecutionEnvironment"
    ],
    "npm:react@0.13.0-rc2/lib/cx": [
      "npm:react@0.13.0-rc2/lib/warning",
      "github:jspm/nodelibs-process@0.1.1"
    ],
    "npm:react@0.13.0-rc2/lib/update": [
      "npm:react@0.13.0-rc2/lib/Object.assign",
      "npm:react@0.13.0-rc2/lib/keyOf",
      "npm:react@0.13.0-rc2/lib/invariant",
      "github:jspm/nodelibs-process@0.1.1"
    ],
    "npm:react@0.13.0-rc2/lib/ReactTestUtils": [
      "npm:react@0.13.0-rc2/lib/EventConstants",
      "npm:react@0.13.0-rc2/lib/EventPluginHub",
      "npm:react@0.13.0-rc2/lib/EventPropagators",
      "npm:react@0.13.0-rc2/lib/React",
      "npm:react@0.13.0-rc2/lib/ReactElement",
      "npm:react@0.13.0-rc2/lib/ReactEmptyComponent",
      "npm:react@0.13.0-rc2/lib/ReactBrowserEventEmitter",
      "npm:react@0.13.0-rc2/lib/ReactCompositeComponent",
      "npm:react@0.13.0-rc2/lib/ReactInstanceHandles",
      "npm:react@0.13.0-rc2/lib/ReactInstanceMap",
      "npm:react@0.13.0-rc2/lib/ReactMount",
      "npm:react@0.13.0-rc2/lib/ReactUpdates",
      "npm:react@0.13.0-rc2/lib/SyntheticEvent",
      "npm:react@0.13.0-rc2/lib/Object.assign"
    ],
    "npm:process@0.10.1": [
      "npm:process@0.10.1/browser"
    ],
    "npm:react@0.13.0-rc2/lib/warning": [
      "npm:react@0.13.0-rc2/lib/emptyFunction",
      "github:jspm/nodelibs-process@0.1.1"
    ],
    "npm:react@0.13.0-rc2/lib/ReactInstanceHandles": [
      "npm:react@0.13.0-rc2/lib/ReactRootIndex",
      "npm:react@0.13.0-rc2/lib/invariant",
      "github:jspm/nodelibs-process@0.1.1"
    ],
    "npm:react@0.13.0-rc2/lib/ReactRef": [
      "npm:react@0.13.0-rc2/lib/ReactOwner",
      "github:jspm/nodelibs-process@0.1.1"
    ],
    "npm:react@0.13.0-rc2/lib/ReactElementValidator": [
      "npm:react@0.13.0-rc2/lib/ReactElement",
      "npm:react@0.13.0-rc2/lib/ReactFragment",
      "npm:react@0.13.0-rc2/lib/ReactPropTypeLocations",
      "npm:react@0.13.0-rc2/lib/ReactPropTypeLocationNames",
      "npm:react@0.13.0-rc2/lib/ReactCurrentOwner",
      "npm:react@0.13.0-rc2/lib/ReactNativeComponent",
      "npm:react@0.13.0-rc2/lib/getIteratorFn",
      "npm:react@0.13.0-rc2/lib/invariant",
      "npm:react@0.13.0-rc2/lib/warning",
      "github:jspm/nodelibs-process@0.1.1"
    ],
    "npm:react@0.13.0-rc2/lib/ReactClass": [
      "npm:react@0.13.0-rc2/lib/ReactComponent",
      "npm:react@0.13.0-rc2/lib/ReactCurrentOwner",
      "npm:react@0.13.0-rc2/lib/ReactElement",
      "npm:react@0.13.0-rc2/lib/ReactErrorUtils",
      "npm:react@0.13.0-rc2/lib/ReactInstanceMap",
      "npm:react@0.13.0-rc2/lib/ReactLifeCycle",
      "npm:react@0.13.0-rc2/lib/ReactPropTypeLocations",
      "npm:react@0.13.0-rc2/lib/ReactPropTypeLocationNames",
      "npm:react@0.13.0-rc2/lib/ReactUpdateQueue",
      "npm:react@0.13.0-rc2/lib/Object.assign",
      "npm:react@0.13.0-rc2/lib/invariant",
      "npm:react@0.13.0-rc2/lib/keyMirror",
      "npm:react@0.13.0-rc2/lib/keyOf",
      "npm:react@0.13.0-rc2/lib/warning",
      "github:jspm/nodelibs-process@0.1.1"
    ],
    "npm:react@0.13.0-rc2/lib/ReactDOM": [
      "npm:react@0.13.0-rc2/lib/ReactElement",
      "npm:react@0.13.0-rc2/lib/ReactElementValidator",
      "npm:react@0.13.0-rc2/lib/mapObject",
      "github:jspm/nodelibs-process@0.1.1"
    ],
    "npm:react@0.13.0-rc2/lib/quoteAttributeValueForBrowser": [
      "npm:react@0.13.0-rc2/lib/escapeTextContentForBrowser"
    ],
    "npm:react@0.13.0-rc2/lib/camelizeStyleName": [
      "npm:react@0.13.0-rc2/lib/camelize"
    ],
    "npm:react@0.13.0-rc2/lib/hyphenateStyleName": [
      "npm:react@0.13.0-rc2/lib/hyphenate"
    ],
    "npm:react@0.13.0-rc2/lib/createArrayFromMixed": [
      "npm:react@0.13.0-rc2/lib/toArray"
    ],
    "npm:react@0.13.0-rc2/lib/setTextContent": [
      "npm:react@0.13.0-rc2/lib/ExecutionEnvironment",
      "npm:react@0.13.0-rc2/lib/escapeTextContentForBrowser",
      "npm:react@0.13.0-rc2/lib/setInnerHTML"
    ],
    "npm:react@0.13.0-rc2/lib/EventPluginHub": [
      "npm:react@0.13.0-rc2/lib/EventPluginRegistry",
      "npm:react@0.13.0-rc2/lib/EventPluginUtils",
      "npm:react@0.13.0-rc2/lib/accumulateInto",
      "npm:react@0.13.0-rc2/lib/forEachAccumulated",
      "npm:react@0.13.0-rc2/lib/invariant",
      "github:jspm/nodelibs-process@0.1.1"
    ],
    "npm:react@0.13.0-rc2/lib/ReactMarkupChecksum": [
      "npm:react@0.13.0-rc2/lib/adler32"
    ],
    "npm:react@0.13.0-rc2/lib/isTextNode": [
      "npm:react@0.13.0-rc2/lib/isNode"
    ],
    "npm:react@0.13.0-rc2/lib/ReactCompositeComponent": [
      "npm:react@0.13.0-rc2/lib/ReactComponentEnvironment",
      "npm:react@0.13.0-rc2/lib/ReactContext",
      "npm:react@0.13.0-rc2/lib/ReactCurrentOwner",
      "npm:react@0.13.0-rc2/lib/ReactElement",
      "npm:react@0.13.0-rc2/lib/ReactElementValidator",
      "npm:react@0.13.0-rc2/lib/ReactInstanceMap",
      "npm:react@0.13.0-rc2/lib/ReactLifeCycle",
      "npm:react@0.13.0-rc2/lib/ReactNativeComponent",
      "npm:react@0.13.0-rc2/lib/ReactPerf",
      "npm:react@0.13.0-rc2/lib/ReactPropTypeLocations",
      "npm:react@0.13.0-rc2/lib/ReactPropTypeLocationNames",
      "npm:react@0.13.0-rc2/lib/ReactReconciler",
      "npm:react@0.13.0-rc2/lib/ReactUpdates",
      "npm:react@0.13.0-rc2/lib/Object.assign",
      "npm:react@0.13.0-rc2/lib/emptyObject",
      "npm:react@0.13.0-rc2/lib/invariant",
      "npm:react@0.13.0-rc2/lib/shouldUpdateReactComponent",
      "npm:react@0.13.0-rc2/lib/warning",
      "github:jspm/nodelibs-process@0.1.1"
    ],
    "npm:react@0.13.0-rc2/lib/ReactChildReconciler": [
      "npm:react@0.13.0-rc2/lib/ReactReconciler",
      "npm:react@0.13.0-rc2/lib/flattenChildren",
      "npm:react@0.13.0-rc2/lib/instantiateReactComponent",
      "npm:react@0.13.0-rc2/lib/shouldUpdateReactComponent"
    ],
    "npm:react@0.13.0-rc2/lib/FallbackCompositionState": [
      "npm:react@0.13.0-rc2/lib/PooledClass",
      "npm:react@0.13.0-rc2/lib/Object.assign",
      "npm:react@0.13.0-rc2/lib/getTextContentAccessor"
    ],
    "npm:react@0.13.0-rc2/lib/SyntheticEvent": [
      "npm:react@0.13.0-rc2/lib/PooledClass",
      "npm:react@0.13.0-rc2/lib/Object.assign",
      "npm:react@0.13.0-rc2/lib/emptyFunction",
      "npm:react@0.13.0-rc2/lib/getEventTarget"
    ],
    "npm:react@0.13.0-rc2/lib/ChangeEventPlugin": [
      "npm:react@0.13.0-rc2/lib/EventConstants",
      "npm:react@0.13.0-rc2/lib/EventPluginHub",
      "npm:react@0.13.0-rc2/lib/EventPropagators",
      "npm:react@0.13.0-rc2/lib/ExecutionEnvironment",
      "npm:react@0.13.0-rc2/lib/ReactUpdates",
      "npm:react@0.13.0-rc2/lib/SyntheticEvent",
      "npm:react@0.13.0-rc2/lib/isEventSupported",
      "npm:react@0.13.0-rc2/lib/isTextInputElement",
      "npm:react@0.13.0-rc2/lib/keyOf",
      "github:jspm/nodelibs-process@0.1.1"
    ],
    "npm:react@0.13.0-rc2/lib/SyntheticMouseEvent": [
      "npm:react@0.13.0-rc2/lib/SyntheticUIEvent",
      "npm:react@0.13.0-rc2/lib/ViewportMetrics",
      "npm:react@0.13.0-rc2/lib/getEventModifierState"
    ],
    "npm:react@0.13.0-rc2/lib/ReactBrowserComponentMixin": [
      "npm:react@0.13.0-rc2/lib/findDOMNode"
    ],
    "npm:react@0.13.0-rc2/lib/AutoFocusMixin": [
      "npm:react@0.13.0-rc2/lib/focusNode"
    ],
    "npm:react@0.13.0-rc2/lib/ReactDOMForm": [
      "npm:react@0.13.0-rc2/lib/EventConstants",
      "npm:react@0.13.0-rc2/lib/LocalEventTrapMixin",
      "npm:react@0.13.0-rc2/lib/ReactBrowserComponentMixin",
      "npm:react@0.13.0-rc2/lib/ReactClass",
      "npm:react@0.13.0-rc2/lib/ReactElement"
    ],
    "npm:react@0.13.0-rc2/lib/LinkedValueUtils": [
      "npm:react@0.13.0-rc2/lib/ReactPropTypes",
      "npm:react@0.13.0-rc2/lib/invariant",
      "github:jspm/nodelibs-process@0.1.1"
    ],
    "npm:react@0.13.0-rc2/lib/ReactEventListener": [
      "npm:react@0.13.0-rc2/lib/EventListener",
      "npm:react@0.13.0-rc2/lib/ExecutionEnvironment",
      "npm:react@0.13.0-rc2/lib/PooledClass",
      "npm:react@0.13.0-rc2/lib/ReactInstanceHandles",
      "npm:react@0.13.0-rc2/lib/ReactMount",
      "npm:react@0.13.0-rc2/lib/ReactUpdates",
      "npm:react@0.13.0-rc2/lib/Object.assign",
      "npm:react@0.13.0-rc2/lib/getEventTarget",
      "npm:react@0.13.0-rc2/lib/getUnboundedScrollPosition",
      "github:jspm/nodelibs-process@0.1.1"
    ],
    "npm:react@0.13.0-rc2/lib/ReactDOMSelection": [
      "npm:react@0.13.0-rc2/lib/ExecutionEnvironment",
      "npm:react@0.13.0-rc2/lib/getNodeForCharacterOffset",
      "npm:react@0.13.0-rc2/lib/getTextContentAccessor"
    ],
    "npm:react@0.13.0-rc2/lib/SelectEventPlugin": [
      "npm:react@0.13.0-rc2/lib/EventConstants",
      "npm:react@0.13.0-rc2/lib/EventPropagators",
      "npm:react@0.13.0-rc2/lib/ReactInputSelection",
      "npm:react@0.13.0-rc2/lib/SyntheticEvent",
      "npm:react@0.13.0-rc2/lib/getActiveElement",
      "npm:react@0.13.0-rc2/lib/isTextInputElement",
      "npm:react@0.13.0-rc2/lib/keyOf",
      "npm:react@0.13.0-rc2/lib/shallowEqual"
    ],
    "npm:react@0.13.0-rc2/lib/SyntheticKeyboardEvent": [
      "npm:react@0.13.0-rc2/lib/SyntheticUIEvent",
      "npm:react@0.13.0-rc2/lib/getEventCharCode",
      "npm:react@0.13.0-rc2/lib/getEventKey",
      "npm:react@0.13.0-rc2/lib/getEventModifierState"
    ],
    "npm:react@0.13.0-rc2/lib/performanceNow": [
      "npm:react@0.13.0-rc2/lib/performance"
    ],
    "npm:react@0.13.0-rc2/lib/ReactServerRendering": [
      "npm:react@0.13.0-rc2/lib/ReactElement",
      "npm:react@0.13.0-rc2/lib/ReactInstanceHandles",
      "npm:react@0.13.0-rc2/lib/ReactMarkupChecksum",
      "npm:react@0.13.0-rc2/lib/ReactServerRenderingTransaction",
      "npm:react@0.13.0-rc2/lib/emptyObject",
      "npm:react@0.13.0-rc2/lib/instantiateReactComponent",
      "npm:react@0.13.0-rc2/lib/invariant",
      "github:jspm/nodelibs-process@0.1.1"
    ],
    "npm:react@0.13.0-rc2/lib/LinkedStateMixin": [
      "npm:react@0.13.0-rc2/lib/ReactLink",
      "npm:react@0.13.0-rc2/lib/ReactStateSetters"
    ],
    "npm:react@0.13.0-rc2/lib/ReactPropTransferer": [
      "npm:react@0.13.0-rc2/lib/Object.assign",
      "npm:react@0.13.0-rc2/lib/emptyFunction",
      "npm:react@0.13.0-rc2/lib/joinClasses"
    ],
    "npm:react@0.13.0-rc2/lib/ReactCSSTransitionGroupChild": [
      "npm:react@0.13.0-rc2/lib/React",
      "npm:react@0.13.0-rc2/lib/CSSCore",
      "npm:react@0.13.0-rc2/lib/ReactTransitionEvents",
      "npm:react@0.13.0-rc2/lib/onlyChild",
      "npm:react@0.13.0-rc2/lib/warning",
      "github:jspm/nodelibs-process@0.1.1"
    ],
    "github:jspm/nodelibs-process@0.1.1/index": [
      "npm:process@0.10.1"
    ],
    "npm:react@0.13.0-rc2/lib/ReactContext": [
      "npm:react@0.13.0-rc2/lib/Object.assign",
      "npm:react@0.13.0-rc2/lib/emptyObject",
      "npm:react@0.13.0-rc2/lib/warning",
      "github:jspm/nodelibs-process@0.1.1"
    ],
    "npm:react@0.13.0-rc2/lib/traverseAllChildren": [
      "npm:react@0.13.0-rc2/lib/ReactElement",
      "npm:react@0.13.0-rc2/lib/ReactFragment",
      "npm:react@0.13.0-rc2/lib/ReactInstanceHandles",
      "npm:react@0.13.0-rc2/lib/getIteratorFn",
      "npm:react@0.13.0-rc2/lib/invariant",
      "npm:react@0.13.0-rc2/lib/warning",
      "github:jspm/nodelibs-process@0.1.1"
    ],
    "npm:react@0.13.0-rc2/lib/ReactReconciler": [
      "npm:react@0.13.0-rc2/lib/ReactRef",
      "npm:react@0.13.0-rc2/lib/ReactElementValidator",
      "github:jspm/nodelibs-process@0.1.1"
    ],
    "npm:react@0.13.0-rc2/lib/DOMPropertyOperations": [
      "npm:react@0.13.0-rc2/lib/DOMProperty",
      "npm:react@0.13.0-rc2/lib/quoteAttributeValueForBrowser",
      "npm:react@0.13.0-rc2/lib/warning",
      "github:jspm/nodelibs-process@0.1.1"
    ],
    "npm:react@0.13.0-rc2/lib/CSSPropertyOperations": [
      "npm:react@0.13.0-rc2/lib/CSSProperty",
      "npm:react@0.13.0-rc2/lib/ExecutionEnvironment",
      "npm:react@0.13.0-rc2/lib/camelizeStyleName",
      "npm:react@0.13.0-rc2/lib/dangerousStyleValue",
      "npm:react@0.13.0-rc2/lib/hyphenateStyleName",
      "npm:react@0.13.0-rc2/lib/memoizeStringOnly",
      "npm:react@0.13.0-rc2/lib/warning",
      "github:jspm/nodelibs-process@0.1.1"
    ],
    "npm:react@0.13.0-rc2/lib/createNodesFromMarkup": [
      "npm:react@0.13.0-rc2/lib/ExecutionEnvironment",
      "npm:react@0.13.0-rc2/lib/createArrayFromMixed",
      "npm:react@0.13.0-rc2/lib/getMarkupWrap",
      "npm:react@0.13.0-rc2/lib/invariant",
      "github:jspm/nodelibs-process@0.1.1"
    ],
    "npm:react@0.13.0-rc2/lib/ReactBrowserEventEmitter": [
      "npm:react@0.13.0-rc2/lib/EventConstants",
      "npm:react@0.13.0-rc2/lib/EventPluginHub",
      "npm:react@0.13.0-rc2/lib/EventPluginRegistry",
      "npm:react@0.13.0-rc2/lib/ReactEventEmitterMixin",
      "npm:react@0.13.0-rc2/lib/ViewportMetrics",
      "npm:react@0.13.0-rc2/lib/Object.assign",
      "npm:react@0.13.0-rc2/lib/isEventSupported",
      "github:jspm/nodelibs-process@0.1.1"
    ],
    "npm:react@0.13.0-rc2/lib/containsNode": [
      "npm:react@0.13.0-rc2/lib/isTextNode"
    ],
    "npm:react@0.13.0-rc2/lib/instantiateReactComponent": [
      "npm:react@0.13.0-rc2/lib/ReactCompositeComponent",
      "npm:react@0.13.0-rc2/lib/ReactEmptyComponent",
      "npm:react@0.13.0-rc2/lib/ReactNativeComponent",
      "npm:react@0.13.0-rc2/lib/Object.assign",
      "npm:react@0.13.0-rc2/lib/invariant",
      "npm:react@0.13.0-rc2/lib/warning",
      "github:jspm/nodelibs-process@0.1.1"
    ],
    "npm:react@0.13.0-rc2/lib/ReactMultiChild": [
      "npm:react@0.13.0-rc2/lib/ReactComponentEnvironment",
      "npm:react@0.13.0-rc2/lib/ReactMultiChildUpdateTypes",
      "npm:react@0.13.0-rc2/lib/ReactReconciler",
      "npm:react@0.13.0-rc2/lib/ReactChildReconciler",
      "github:jspm/nodelibs-process@0.1.1"
    ],
    "npm:react@0.13.0-rc2/lib/SyntheticCompositionEvent": [
      "npm:react@0.13.0-rc2/lib/SyntheticEvent"
    ],
    "npm:react@0.13.0-rc2/lib/EnterLeaveEventPlugin": [
      "npm:react@0.13.0-rc2/lib/EventConstants",
      "npm:react@0.13.0-rc2/lib/EventPropagators",
      "npm:react@0.13.0-rc2/lib/SyntheticMouseEvent",
      "npm:react@0.13.0-rc2/lib/ReactMount",
      "npm:react@0.13.0-rc2/lib/keyOf"
    ],
    "npm:react@0.13.0-rc2/lib/ReactDOMButton": [
      "npm:react@0.13.0-rc2/lib/AutoFocusMixin",
      "npm:react@0.13.0-rc2/lib/ReactBrowserComponentMixin",
      "npm:react@0.13.0-rc2/lib/ReactClass",
      "npm:react@0.13.0-rc2/lib/ReactElement",
      "npm:react@0.13.0-rc2/lib/keyMirror"
    ],
    "npm:react@0.13.0-rc2/lib/ReactDOMInput": [
      "npm:react@0.13.0-rc2/lib/AutoFocusMixin",
      "npm:react@0.13.0-rc2/lib/DOMPropertyOperations",
      "npm:react@0.13.0-rc2/lib/LinkedValueUtils",
      "npm:react@0.13.0-rc2/lib/ReactBrowserComponentMixin",
      "npm:react@0.13.0-rc2/lib/ReactClass",
      "npm:react@0.13.0-rc2/lib/ReactElement",
      "npm:react@0.13.0-rc2/lib/ReactMount",
      "npm:react@0.13.0-rc2/lib/ReactUpdates",
      "npm:react@0.13.0-rc2/lib/Object.assign",
      "npm:react@0.13.0-rc2/lib/invariant",
      "github:jspm/nodelibs-process@0.1.1"
    ],
    "npm:react@0.13.0-rc2/lib/ReactInputSelection": [
      "npm:react@0.13.0-rc2/lib/ReactDOMSelection",
      "npm:react@0.13.0-rc2/lib/containsNode",
      "npm:react@0.13.0-rc2/lib/focusNode",
      "npm:react@0.13.0-rc2/lib/getActiveElement"
    ],
    "npm:react@0.13.0-rc2/lib/SimpleEventPlugin": [
      "npm:react@0.13.0-rc2/lib/EventConstants",
      "npm:react@0.13.0-rc2/lib/EventPluginUtils",
      "npm:react@0.13.0-rc2/lib/EventPropagators",
      "npm:react@0.13.0-rc2/lib/SyntheticClipboardEvent",
      "npm:react@0.13.0-rc2/lib/SyntheticEvent",
      "npm:react@0.13.0-rc2/lib/SyntheticFocusEvent",
      "npm:react@0.13.0-rc2/lib/SyntheticKeyboardEvent",
      "npm:react@0.13.0-rc2/lib/SyntheticMouseEvent",
      "npm:react@0.13.0-rc2/lib/SyntheticDragEvent",
      "npm:react@0.13.0-rc2/lib/SyntheticTouchEvent",
      "npm:react@0.13.0-rc2/lib/SyntheticUIEvent",
      "npm:react@0.13.0-rc2/lib/SyntheticWheelEvent",
      "npm:react@0.13.0-rc2/lib/getEventCharCode",
      "npm:react@0.13.0-rc2/lib/invariant",
      "npm:react@0.13.0-rc2/lib/keyOf",
      "npm:react@0.13.0-rc2/lib/warning",
      "github:jspm/nodelibs-process@0.1.1"
    ],
    "npm:react@0.13.0-rc2/lib/ReactDefaultPerf": [
      "npm:react@0.13.0-rc2/lib/DOMProperty",
      "npm:react@0.13.0-rc2/lib/ReactDefaultPerfAnalysis",
      "npm:react@0.13.0-rc2/lib/ReactMount",
      "npm:react@0.13.0-rc2/lib/ReactPerf",
      "npm:react@0.13.0-rc2/lib/performanceNow"
    ],
    "npm:react@0.13.0-rc2/lib/cloneWithProps": [
      "npm:react@0.13.0-rc2/lib/ReactElement",
      "npm:react@0.13.0-rc2/lib/ReactPropTransferer",
      "npm:react@0.13.0-rc2/lib/keyOf",
      "npm:react@0.13.0-rc2/lib/warning",
      "github:jspm/nodelibs-process@0.1.1"
    ],
    "github:jspm/nodelibs-process@0.1.1": [
      "github:jspm/nodelibs-process@0.1.1/index"
    ],
    "npm:react@0.13.0-rc2/lib/ReactElement": [
      "npm:react@0.13.0-rc2/lib/ReactContext",
      "npm:react@0.13.0-rc2/lib/ReactCurrentOwner",
      "npm:react@0.13.0-rc2/lib/Object.assign",
      "npm:react@0.13.0-rc2/lib/warning",
      "github:jspm/nodelibs-process@0.1.1"
    ],
    "npm:react@0.13.0-rc2/lib/ReactUpdates": [
      "npm:react@0.13.0-rc2/lib/CallbackQueue",
      "npm:react@0.13.0-rc2/lib/PooledClass",
      "npm:react@0.13.0-rc2/lib/ReactCurrentOwner",
      "npm:react@0.13.0-rc2/lib/ReactPerf",
      "npm:react@0.13.0-rc2/lib/ReactReconciler",
      "npm:react@0.13.0-rc2/lib/Transaction",
      "npm:react@0.13.0-rc2/lib/Object.assign",
      "npm:react@0.13.0-rc2/lib/invariant",
      "npm:react@0.13.0-rc2/lib/warning",
      "github:jspm/nodelibs-process@0.1.1"
    ],
    "npm:react@0.13.0-rc2/lib/Danger": [
      "npm:react@0.13.0-rc2/lib/ExecutionEnvironment",
      "npm:react@0.13.0-rc2/lib/createNodesFromMarkup",
      "npm:react@0.13.0-rc2/lib/emptyFunction",
      "npm:react@0.13.0-rc2/lib/getMarkupWrap",
      "npm:react@0.13.0-rc2/lib/invariant",
      "github:jspm/nodelibs-process@0.1.1"
    ],
    "npm:react@0.13.0-rc2/lib/ReactMount": [
      "npm:react@0.13.0-rc2/lib/DOMProperty",
      "npm:react@0.13.0-rc2/lib/ReactBrowserEventEmitter",
      "npm:react@0.13.0-rc2/lib/ReactCurrentOwner",
      "npm:react@0.13.0-rc2/lib/ReactElement",
      "npm:react@0.13.0-rc2/lib/ReactElementValidator",
      "npm:react@0.13.0-rc2/lib/ReactEmptyComponent",
      "npm:react@0.13.0-rc2/lib/ReactInstanceHandles",
      "npm:react@0.13.0-rc2/lib/ReactInstanceMap",
      "npm:react@0.13.0-rc2/lib/ReactMarkupChecksum",
      "npm:react@0.13.0-rc2/lib/ReactPerf",
      "npm:react@0.13.0-rc2/lib/ReactReconciler",
      "npm:react@0.13.0-rc2/lib/ReactUpdateQueue",
      "npm:react@0.13.0-rc2/lib/ReactUpdates",
      "npm:react@0.13.0-rc2/lib/emptyObject",
      "npm:react@0.13.0-rc2/lib/containsNode",
      "npm:react@0.13.0-rc2/lib/getReactRootElementInContainer",
      "npm:react@0.13.0-rc2/lib/instantiateReactComponent",
      "npm:react@0.13.0-rc2/lib/invariant",
      "npm:react@0.13.0-rc2/lib/setInnerHTML",
      "npm:react@0.13.0-rc2/lib/shouldUpdateReactComponent",
      "npm:react@0.13.0-rc2/lib/warning",
      "github:jspm/nodelibs-process@0.1.1"
    ],
    "npm:react@0.13.0-rc2/lib/ReactDOMComponent": [
      "npm:react@0.13.0-rc2/lib/CSSPropertyOperations",
      "npm:react@0.13.0-rc2/lib/DOMProperty",
      "npm:react@0.13.0-rc2/lib/DOMPropertyOperations",
      "npm:react@0.13.0-rc2/lib/ReactBrowserEventEmitter",
      "npm:react@0.13.0-rc2/lib/ReactComponentBrowserEnvironment",
      "npm:react@0.13.0-rc2/lib/ReactMount",
      "npm:react@0.13.0-rc2/lib/ReactMultiChild",
      "npm:react@0.13.0-rc2/lib/ReactPerf",
      "npm:react@0.13.0-rc2/lib/Object.assign",
      "npm:react@0.13.0-rc2/lib/escapeTextContentForBrowser",
      "npm:react@0.13.0-rc2/lib/invariant",
      "npm:react@0.13.0-rc2/lib/isEventSupported",
      "npm:react@0.13.0-rc2/lib/keyOf",
      "npm:react@0.13.0-rc2/lib/warning",
      "github:jspm/nodelibs-process@0.1.1"
    ],
    "npm:react@0.13.0-rc2/lib/BeforeInputEventPlugin": [
      "npm:react@0.13.0-rc2/lib/EventConstants",
      "npm:react@0.13.0-rc2/lib/EventPropagators",
      "npm:react@0.13.0-rc2/lib/ExecutionEnvironment",
      "npm:react@0.13.0-rc2/lib/FallbackCompositionState",
      "npm:react@0.13.0-rc2/lib/SyntheticCompositionEvent",
      "npm:react@0.13.0-rc2/lib/SyntheticInputEvent",
      "npm:react@0.13.0-rc2/lib/keyOf"
    ],
    "npm:react@0.13.0-rc2/lib/ReactReconcileTransaction": [
      "npm:react@0.13.0-rc2/lib/CallbackQueue",
      "npm:react@0.13.0-rc2/lib/PooledClass",
      "npm:react@0.13.0-rc2/lib/ReactBrowserEventEmitter",
      "npm:react@0.13.0-rc2/lib/ReactInputSelection",
      "npm:react@0.13.0-rc2/lib/ReactPutListenerQueue",
      "npm:react@0.13.0-rc2/lib/Transaction",
      "npm:react@0.13.0-rc2/lib/Object.assign"
    ],
    "npm:react@0.13.0-rc2/lib/ReactTransitionGroup": [
      "npm:react@0.13.0-rc2/lib/React",
      "npm:react@0.13.0-rc2/lib/ReactTransitionChildMapping",
      "npm:react@0.13.0-rc2/lib/Object.assign",
      "npm:react@0.13.0-rc2/lib/cloneWithProps",
      "npm:react@0.13.0-rc2/lib/emptyFunction"
    ],
    "npm:react@0.13.0-rc2/lib/invariant": [
      "github:jspm/nodelibs-process@0.1.1"
    ],
    "npm:react@0.13.0-rc2/lib/ReactFragment": [
      "npm:react@0.13.0-rc2/lib/ReactElement",
      "npm:react@0.13.0-rc2/lib/warning",
      "github:jspm/nodelibs-process@0.1.1"
    ],
    "npm:react@0.13.0-rc2/lib/ReactUpdateQueue": [
      "npm:react@0.13.0-rc2/lib/ReactLifeCycle",
      "npm:react@0.13.0-rc2/lib/ReactCurrentOwner",
      "npm:react@0.13.0-rc2/lib/ReactElement",
      "npm:react@0.13.0-rc2/lib/ReactInstanceMap",
      "npm:react@0.13.0-rc2/lib/ReactUpdates",
      "npm:react@0.13.0-rc2/lib/Object.assign",
      "npm:react@0.13.0-rc2/lib/invariant",
      "npm:react@0.13.0-rc2/lib/warning",
      "github:jspm/nodelibs-process@0.1.1"
    ],
    "npm:react@0.13.0-rc2/lib/DOMChildrenOperations": [
      "npm:react@0.13.0-rc2/lib/Danger",
      "npm:react@0.13.0-rc2/lib/ReactMultiChildUpdateTypes",
      "npm:react@0.13.0-rc2/lib/setTextContent",
      "npm:react@0.13.0-rc2/lib/invariant",
      "github:jspm/nodelibs-process@0.1.1"
    ],
    "npm:react@0.13.0-rc2/lib/ReactDefaultInjection": [
      "npm:react@0.13.0-rc2/lib/BeforeInputEventPlugin",
      "npm:react@0.13.0-rc2/lib/ChangeEventPlugin",
      "npm:react@0.13.0-rc2/lib/ClientReactRootIndex",
      "npm:react@0.13.0-rc2/lib/DefaultEventPluginOrder",
      "npm:react@0.13.0-rc2/lib/EnterLeaveEventPlugin",
      "npm:react@0.13.0-rc2/lib/ExecutionEnvironment",
      "npm:react@0.13.0-rc2/lib/HTMLDOMPropertyConfig",
      "npm:react@0.13.0-rc2/lib/MobileSafariClickEventPlugin",
      "npm:react@0.13.0-rc2/lib/ReactBrowserComponentMixin",
      "npm:react@0.13.0-rc2/lib/ReactClass",
      "npm:react@0.13.0-rc2/lib/ReactComponentBrowserEnvironment",
      "npm:react@0.13.0-rc2/lib/ReactDefaultBatchingStrategy",
      "npm:react@0.13.0-rc2/lib/ReactDOMComponent",
      "npm:react@0.13.0-rc2/lib/ReactDOMButton",
      "npm:react@0.13.0-rc2/lib/ReactDOMForm",
      "npm:react@0.13.0-rc2/lib/ReactDOMImg",
      "npm:react@0.13.0-rc2/lib/ReactDOMIDOperations",
      "npm:react@0.13.0-rc2/lib/ReactDOMIframe",
      "npm:react@0.13.0-rc2/lib/ReactDOMInput",
      "npm:react@0.13.0-rc2/lib/ReactDOMOption",
      "npm:react@0.13.0-rc2/lib/ReactDOMSelect",
      "npm:react@0.13.0-rc2/lib/ReactDOMTextarea",
      "npm:react@0.13.0-rc2/lib/ReactDOMTextComponent",
      "npm:react@0.13.0-rc2/lib/ReactElement",
      "npm:react@0.13.0-rc2/lib/ReactEventListener",
      "npm:react@0.13.0-rc2/lib/ReactInjection",
      "npm:react@0.13.0-rc2/lib/ReactInstanceHandles",
      "npm:react@0.13.0-rc2/lib/ReactMount",
      "npm:react@0.13.0-rc2/lib/ReactReconcileTransaction",
      "npm:react@0.13.0-rc2/lib/SelectEventPlugin",
      "npm:react@0.13.0-rc2/lib/ServerReactRootIndex",
      "npm:react@0.13.0-rc2/lib/SimpleEventPlugin",
      "npm:react@0.13.0-rc2/lib/SVGDOMPropertyConfig",
      "npm:react@0.13.0-rc2/lib/createFullPageComponent",
      "npm:react@0.13.0-rc2/lib/ReactDefaultPerf",
      "github:jspm/nodelibs-process@0.1.1"
    ],
    "npm:react@0.13.0-rc2/lib/ReactCSSTransitionGroup": [
      "npm:react@0.13.0-rc2/lib/React",
      "npm:react@0.13.0-rc2/lib/Object.assign",
      "npm:react@0.13.0-rc2/lib/ReactTransitionGroup",
      "npm:react@0.13.0-rc2/lib/ReactCSSTransitionGroupChild"
    ],
    "npm:react@0.13.0-rc2/lib/keyMirror": [
      "npm:react@0.13.0-rc2/lib/invariant",
      "github:jspm/nodelibs-process@0.1.1"
    ],
    "npm:react@0.13.0-rc2/lib/ReactChildren": [
      "npm:react@0.13.0-rc2/lib/PooledClass",
      "npm:react@0.13.0-rc2/lib/ReactFragment",
      "npm:react@0.13.0-rc2/lib/traverseAllChildren",
      "npm:react@0.13.0-rc2/lib/warning",
      "github:jspm/nodelibs-process@0.1.1"
    ],
    "npm:react@0.13.0-rc2/lib/ReactComponent": [
      "npm:react@0.13.0-rc2/lib/ReactUpdateQueue",
      "npm:react@0.13.0-rc2/lib/invariant",
      "npm:react@0.13.0-rc2/lib/warning",
      "github:jspm/nodelibs-process@0.1.1"
    ],
    "npm:react@0.13.0-rc2/lib/ReactDOMIDOperations": [
      "npm:react@0.13.0-rc2/lib/CSSPropertyOperations",
      "npm:react@0.13.0-rc2/lib/DOMChildrenOperations",
      "npm:react@0.13.0-rc2/lib/DOMPropertyOperations",
      "npm:react@0.13.0-rc2/lib/ReactMount",
      "npm:react@0.13.0-rc2/lib/ReactPerf",
      "npm:react@0.13.0-rc2/lib/invariant",
      "npm:react@0.13.0-rc2/lib/setInnerHTML",
      "github:jspm/nodelibs-process@0.1.1"
    ],
    "npm:react@0.13.0-rc2/lib/ReactWithAddons": [
      "npm:react@0.13.0-rc2/lib/LinkedStateMixin",
      "npm:react@0.13.0-rc2/lib/React",
      "npm:react@0.13.0-rc2/lib/ReactComponentWithPureRenderMixin",
      "npm:react@0.13.0-rc2/lib/ReactCSSTransitionGroup",
      "npm:react@0.13.0-rc2/lib/ReactFragment",
      "npm:react@0.13.0-rc2/lib/ReactTransitionGroup",
      "npm:react@0.13.0-rc2/lib/ReactUpdates",
      "npm:react@0.13.0-rc2/lib/cx",
      "npm:react@0.13.0-rc2/lib/cloneWithProps",
      "npm:react@0.13.0-rc2/lib/update",
      "npm:react@0.13.0-rc2/lib/ReactDefaultPerf",
      "npm:react@0.13.0-rc2/lib/ReactTestUtils",
      "github:jspm/nodelibs-process@0.1.1"
    ],
    "npm:react@0.13.0-rc2/lib/EventConstants": [
      "npm:react@0.13.0-rc2/lib/keyMirror"
    ],
    "npm:react@0.13.0-rc2/lib/ReactComponentBrowserEnvironment": [
      "npm:react@0.13.0-rc2/lib/ReactDOMIDOperations",
      "npm:react@0.13.0-rc2/lib/ReactMount",
      "github:jspm/nodelibs-process@0.1.1"
    ],
    "npm:react@0.13.0-rc2/addons": [
      "npm:react@0.13.0-rc2/lib/ReactWithAddons"
    ],
    "npm:react@0.13.0-rc2/lib/EventPluginUtils": [
      "npm:react@0.13.0-rc2/lib/EventConstants",
      "npm:react@0.13.0-rc2/lib/invariant",
      "github:jspm/nodelibs-process@0.1.1"
    ],
    "npm:react@0.13.0-rc2/lib/ReactDOMTextComponent": [
      "npm:react@0.13.0-rc2/lib/DOMPropertyOperations",
      "npm:react@0.13.0-rc2/lib/ReactComponentBrowserEnvironment",
      "npm:react@0.13.0-rc2/lib/ReactDOMComponent",
      "npm:react@0.13.0-rc2/lib/Object.assign",
      "npm:react@0.13.0-rc2/lib/escapeTextContentForBrowser"
    ],
    "src/components/App": [
      "npm:react@0.13.0-rc2/addons"
    ],
    "npm:react@0.13.0-rc2/lib/React": [
      "npm:react@0.13.0-rc2/lib/EventPluginUtils",
      "npm:react@0.13.0-rc2/lib/ReactChildren",
      "npm:react@0.13.0-rc2/lib/ReactComponent",
      "npm:react@0.13.0-rc2/lib/ReactClass",
      "npm:react@0.13.0-rc2/lib/ReactContext",
      "npm:react@0.13.0-rc2/lib/ReactCurrentOwner",
      "npm:react@0.13.0-rc2/lib/ReactElement",
      "npm:react@0.13.0-rc2/lib/ReactElementValidator",
      "npm:react@0.13.0-rc2/lib/ReactDOM",
      "npm:react@0.13.0-rc2/lib/ReactDOMTextComponent",
      "npm:react@0.13.0-rc2/lib/ReactDefaultInjection",
      "npm:react@0.13.0-rc2/lib/ReactInstanceHandles",
      "npm:react@0.13.0-rc2/lib/ReactMount",
      "npm:react@0.13.0-rc2/lib/ReactPerf",
      "npm:react@0.13.0-rc2/lib/ReactPropTypes",
      "npm:react@0.13.0-rc2/lib/ReactReconciler",
      "npm:react@0.13.0-rc2/lib/ReactServerRendering",
      "npm:react@0.13.0-rc2/lib/Object.assign",
      "npm:react@0.13.0-rc2/lib/findDOMNode",
      "npm:react@0.13.0-rc2/lib/onlyChild",
      "npm:react@0.13.0-rc2/lib/ExecutionEnvironment",
      "github:jspm/nodelibs-process@0.1.1"
    ],
    "npm:react@0.13.0-rc2/react": [
      "npm:react@0.13.0-rc2/lib/React"
    ],
    "npm:react@0.13.0-rc2": [
      "npm:react@0.13.0-rc2/react"
    ],
    "src/main": [
      "npm:react@0.13.0-rc2",
      "src/components/App"
    ]
  }
});

System.config({
  "map": {
    "babel": "npm:babel-core@5.2.17",
    "babel-runtime": "npm:babel-runtime@5.2.17",
    "core-js": "npm:core-js@0.9.7",
    "floatdrop/plugin-jsx": "github:floatdrop/plugin-jsx@1.1.0",
    "jsx": "github:floatdrop/plugin-jsx@1.0.1",
    "react": "npm:react@0.13.3",
    "github:floatdrop/plugin-jsx@1.0.1": {
      "react-tools": "npm:react-tools@0.12.2"
    },
    "github:floatdrop/plugin-jsx@1.1.0": {
      "react-tools": "npm:react-tools@0.13.3"
    },
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.2.2"
    },
    "github:jspm/nodelibs-constants@0.1.0": {
      "constants-browserify": "npm:constants-browserify@0.0.1"
    },
    "github:jspm/nodelibs-crypto@0.1.0": {
      "crypto-browserify": "npm:crypto-browserify@3.9.14"
    },
    "github:jspm/nodelibs-events@0.1.0": {
      "events-browserify": "npm:events-browserify@0.0.1"
    },
    "github:jspm/nodelibs-http@1.7.1": {
      "Base64": "npm:Base64@0.2.1",
      "events": "github:jspm/nodelibs-events@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-string_decoder@0.1.0": {
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "github:jspm/nodelibs-url@0.1.0": {
      "url": "npm:url@0.10.3"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "npm:amdefine@0.1.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:asn1.js@1.0.4": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "bn.js": "npm:bn.js@1.3.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:ast-types@0.6.16": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:browserify-aes@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:browserify-rsa@2.0.0": {
      "bn.js": "npm:bn.js@1.3.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "randombytes": "npm:randombytes@2.0.1"
    },
    "npm:browserify-sign@3.0.1": {
      "bn.js": "npm:bn.js@1.3.0",
      "browserify-rsa": "npm:browserify-rsa@2.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.1",
      "create-hmac": "npm:create-hmac@1.1.3",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@1.0.1",
      "inherits": "npm:inherits@2.0.1",
      "parse-asn1": "npm:parse-asn1@3.0.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:buffer@3.2.2": {
      "base64-js": "npm:base64-js@0.0.8",
      "ieee754": "npm:ieee754@1.1.5",
      "is-array": "npm:is-array@1.0.1"
    },
    "npm:commander@2.5.1": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:commoner@0.10.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "commander": "npm:commander@2.5.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "glob": "npm:glob@4.2.2",
      "graceful-fs": "npm:graceful-fs@3.0.6",
      "iconv-lite": "npm:iconv-lite@0.4.8",
      "install": "npm:install@0.1.8",
      "mkdirp": "npm:mkdirp@0.5.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "private": "npm:private@0.1.6",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "q": "npm:q@1.1.2",
      "recast": "npm:recast@0.9.18",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:constants-browserify@0.0.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:core-js@0.9.7": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:core-util-is@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:create-ecdh@2.0.0": {
      "bn.js": "npm:bn.js@1.3.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@1.0.1"
    },
    "npm:create-hash@1.1.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "ripemd160": "npm:ripemd160@1.0.1",
      "sha.js": "npm:sha.js@2.4.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:create-hmac@1.1.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:crypto-browserify@3.9.14": {
      "browserify-aes": "npm:browserify-aes@1.0.0",
      "browserify-sign": "npm:browserify-sign@3.0.1",
      "create-ecdh": "npm:create-ecdh@2.0.0",
      "create-hash": "npm:create-hash@1.1.1",
      "create-hmac": "npm:create-hmac@1.1.3",
      "diffie-hellman": "npm:diffie-hellman@3.0.1",
      "inherits": "npm:inherits@2.0.1",
      "pbkdf2": "npm:pbkdf2@3.0.4",
      "public-encrypt": "npm:public-encrypt@2.0.0",
      "randombytes": "npm:randombytes@2.0.1"
    },
    "npm:diffie-hellman@3.0.1": {
      "bn.js": "npm:bn.js@1.3.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "miller-rabin": "npm:miller-rabin@1.1.5",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "randombytes": "npm:randombytes@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:elliptic@1.0.1": {
      "bn.js": "npm:bn.js@1.3.0",
      "brorand": "npm:brorand@1.0.5",
      "hash.js": "npm:hash.js@1.0.2",
      "inherits": "npm:inherits@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:envify@3.4.0": {
      "jstransform": "npm:jstransform@10.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "through": "npm:through@2.3.7"
    },
    "npm:esprima-fb@10001.1.0-dev-harmony-fb": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:esprima-fb@13001.1001.0-dev-harmony-fb": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:esprima-fb@8001.1001.0-dev-harmony-fb": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:events-browserify@0.0.1": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:glob@4.2.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inflight": "npm:inflight@1.0.4",
      "inherits": "npm:inherits@2.0.1",
      "minimatch": "npm:minimatch@1.0.0",
      "once": "npm:once@1.3.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:graceful-fs@3.0.6": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:hash.js@1.0.2": {
      "inherits": "npm:inherits@2.0.1"
    },
    "npm:iconv-lite@0.4.8": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:inflight@1.0.4": {
      "once": "npm:once@1.3.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "wrappy": "npm:wrappy@1.0.1"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:install@0.1.8": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:jstransform@10.1.0": {
      "base62": "npm:base62@0.1.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "esprima-fb": "npm:esprima-fb@13001.1001.0-dev-harmony-fb",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "source-map": "npm:source-map@0.1.31"
    },
    "npm:jstransform@8.2.0": {
      "base62": "npm:base62@0.1.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "esprima-fb": "npm:esprima-fb@8001.1001.0-dev-harmony-fb",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "source-map": "npm:source-map@0.1.31"
    },
    "npm:miller-rabin@1.1.5": {
      "bn.js": "npm:bn.js@1.3.0",
      "brorand": "npm:brorand@1.0.5"
    },
    "npm:minimatch@1.0.0": {
      "lru-cache": "npm:lru-cache@2.6.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "sigmund": "npm:sigmund@1.0.0"
    },
    "npm:mkdirp@0.5.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "minimist": "npm:minimist@0.0.8",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:once@1.3.2": {
      "wrappy": "npm:wrappy@1.0.1"
    },
    "npm:parse-asn1@3.0.0": {
      "asn1.js": "npm:asn1.js@1.0.4",
      "browserify-aes": "npm:browserify-aes@1.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.1",
      "pbkdf2-compat": "npm:pbkdf2-compat@3.0.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:pbkdf2-compat@3.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "create-hmac": "npm:create-hmac@1.1.3",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:pbkdf2@3.0.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "create-hmac": "npm:create-hmac@1.1.3",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:public-encrypt@2.0.0": {
      "bn.js": "npm:bn.js@1.3.0",
      "browserify-rsa": "npm:browserify-rsa@2.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "parse-asn1": "npm:parse-asn1@3.0.0",
      "randombytes": "npm:randombytes@2.0.1"
    },
    "npm:punycode@1.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:q@1.1.2": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:randombytes@2.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:react-tools@0.12.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "commoner": "npm:commoner@0.10.1",
      "jstransform": "npm:jstransform@8.2.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:react-tools@0.13.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "commoner": "npm:commoner@0.10.1",
      "jstransform": "npm:jstransform@10.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:react@0.13.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "envify": "npm:envify@3.4.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:readable-stream@1.1.13": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.1",
      "events": "github:jspm/nodelibs-events@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:recast@0.9.18": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "ast-types": "npm:ast-types@0.6.16",
      "esprima-fb": "npm:esprima-fb@10001.1.0-dev-harmony-fb",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "private": "npm:private@0.1.6",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "source-map": "npm:source-map@0.1.43"
    },
    "npm:ripemd160@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:sha.js@2.4.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:sigmund@1.0.0": {
      "http": "github:jspm/nodelibs-http@1.7.1",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:source-map@0.1.31": {
      "amdefine": "npm:amdefine@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:source-map@0.1.43": {
      "amdefine": "npm:amdefine@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.13"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:through@2.3.7": {
      "process": "github:jspm/nodelibs-process@0.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:url@0.10.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "npm:querystring@0.2.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    }
  }
});

