System.config({
  "baseURL": "/",
  "transpiler": "babel",
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
    "react": "npm:react@0.13.0-rc2",
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.0.3"
    },
    "github:jspm/nodelibs-events@0.1.0": {
      "events-browserify": "npm:events-browserify@0.0.1"
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
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:amdefine@0.1.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.1",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:buffer@3.0.3": {
      "base64-js": "npm:base64-js@0.0.8",
      "ieee754": "npm:ieee754@1.1.4",
      "is-array": "npm:is-array@1.0.1"
    },
    "npm:core-util-is@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:envify@3.3.0": {
      "jstransform": "npm:jstransform@10.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "through": "npm:through@2.3.6"
    },
    "npm:esprima-fb@13001.1001.0-dev-harmony-fb": {
      "fs": "github:jspm/nodelibs-fs@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:events-browserify@0.0.1": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:jstransform@10.1.0": {
      "base62": "npm:base62@0.1.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "esprima-fb": "npm:esprima-fb@13001.1001.0-dev-harmony-fb",
      "fs": "github:jspm/nodelibs-fs@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "source-map": "npm:source-map@0.1.31"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:react@0.13.0-rc2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "envify": "npm:envify@3.3.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:readable-stream@1.1.13": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.1",
      "events": "github:jspm/nodelibs-events@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "stream": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:source-map@0.1.31": {
      "amdefine": "npm:amdefine@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.1",
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
    "npm:through@2.3.6": {
      "process": "github:jspm/nodelibs-process@0.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.1"
    }
  }
});

