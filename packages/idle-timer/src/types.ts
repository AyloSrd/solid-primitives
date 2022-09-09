import { Accessor } from 'solid-js';

export type EventTypeName = 'abort'
  | 'afterprint'
  | 'animationend'
  | 'animationiteration'
  | 'animationstart'
  | 'beforeprint'
  | 'beforeunload'
  | 'blur'
  | 'canplay'
  | 'canplaythrough'
  | 'change'
  | 'click'
  | 'contextmenu'
  | 'copy'
  | 'cut'
  | 'dblclick'
  | 'drag'
  | 'dragend'
  | 'dragenter'
  | 'dragleave'
  | 'dragover'
  | 'dragstart'
  | 'drop'
  | 'durationchange'
  | 'ended'
  | 'error'
  | 'focus'
  | 'focusin'
  | 'focusout'
  | 'fullscreenchange'
  | 'fullscreenerror'
  | 'hashchange'
  | 'input'
  | 'invalid'
  | 'keydown'
  | 'keypress'
  | 'keyup'
  | 'load'
  | 'loadeddata'
  | 'loadedmetadata'
  | 'loadstart'
  | 'message'
  | 'mousedown'
  | 'mouseenter'
  | 'mouseleave'
  | 'mousemove'
  | 'mouseover'
  | 'mouseout'
  | 'mouseup'
  | 'mousewheel'
  | 'offline'
  | 'online'
  | 'open'
  | 'pagehide'
  | 'pageshow'
  | 'paste'
  | 'pause'
  | 'play'
  | 'playing'
  | 'pointerdown'
  | 'popstate'
  | 'progress'
  | 'ratechange'
  | 'resize'
  | 'reset'
  | 'scroll'
  | 'search'
  | 'seeked'
  | 'seeking'
  | 'select'
  | 'show'
  | 'stalled'
  | 'storage'
  | 'submit'
  | 'suspend'
  | 'timeupdate'
  | 'toggle'
  | 'touchcancel'
  | 'touchend'
  | 'touchmove'
  | 'touchstart'
  | 'transitionend'
  | 'unload'
  | 'visibilitychange'
  | 'volumechange'
  | 'waiting'
  | 'wheel'
  //webkit
  | 'gesturestart'
  | 'gesturechange'
  | 'gestureend'
  // MS
  | 'msContentZoom'
  | 'MSGestureChange'
  | 'MSGestureEnd'
  | 'MSGestureHold'
  | 'MSGestureStart'
  | 'MSGestureTap'
  | 'MSInertiaStart'
  | 'MSManipulationStateChanged'

export interface IdleTimerOptions {
  events?: EventTypeName[],
  element?: HTMLElement,
  idleTimeout?: number,
  promptTimeout?: number,
  startManually?: boolean,
  onIdle?: (lastEvt: Event) => void,
  onActive?: (activyEvt: Event) => void,
  onPrompt?: (promptEvt: Event) => void,
}

export interface IdleTimerReturn {
  isIdle: Accessor<boolean>,
  isPrompted: Accessor<boolean>,
  reset: () => void,
  start: () => void,
  stop: () => void,
}
