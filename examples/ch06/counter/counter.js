import {
  createApp,
  h,
  hString,
  hFragment,
} from 'fwk'

const state = { count: 0 }
const reducers = {
  add: (state) => ({ count: state.count + 1 }),
  sub: (state) => ({ count: state.count - 1 }),
}

function View(state, emit) {
  return hFragment([
    h('button', { on: { click: () => emit('sub') } }, ['-']),
    h(
      'span',
      { class: `${state.count < 0 ? 'negative' : 'positive'}` },
      [hString(state.count)]
    ),
    h('button', { on: { click: () => emit('add') } }, ['+']),
  ])
}

createApp({ state, view: View, reducers }).mount(document.body)