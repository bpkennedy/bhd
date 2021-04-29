import Vue from 'vue'
import {
  BOOKS_LIST_NAME,
  LANGUAGES_LIST_NAME,
  LANGUAGES_VIEW_NAME,
  LIST_NAMES,
  LISTS_VIEW_NAME,
  PODCASTS_LIST_NAME,
  TIMES_LIST_NAME,
  TIMES_VIEW_NAME,
  VIDEOS_LIST_NAME,
  VIEW_NAMES,
} from '../constants'

export const VIEW_LOADED_ACTION = 'VIEW_LOADED_ACTION'
export const LIST_FILTER_SELECTED_ACTION = 'LIST_FILTER_SELECTED_ACTION'

export const SET_LIST_ITEMS_MUTATION = 'SET_LIST_ITEMS_MUTATION'
const SET_LIST_FILTER_MUTATION = 'SET_LIST_FILTER_MUTATION'

export const FILTERED_LIST_ITEMS_GETTER = 'FILTERED_LIST_ITEMS_GETTER'

export const state = () => ({
  [BOOKS_LIST_NAME]: [],
  [PODCASTS_LIST_NAME]: [],
  [VIDEOS_LIST_NAME]: [],
  [TIMES_LIST_NAME]: [],
  [LANGUAGES_LIST_NAME]: [],
  listFilter: BOOKS_LIST_NAME,
})

export const actions = {
  [LIST_FILTER_SELECTED_ACTION] ({ state, commit }, listName) {
    if (!LIST_NAMES.includes(listName)) {
      throw new Error('Attempted to filter a list by unknown value: ' + listName)
    }
    commit(SET_LIST_FILTER_MUTATION, listName)
  },
  async [VIEW_LOADED_ACTION] ({ state, commit }, { viewName, nuxtContent }) {
    if (!VIEW_NAMES.includes(viewName)) {
      throw new Error('Attempted to load an unknown view: ' + viewName)
    }
    if (viewName === LISTS_VIEW_NAME) {
      const books = state[BOOKS_LIST_NAME].length ? state[BOOKS_LIST_NAME] : await listContentQuery(BOOKS_LIST_NAME, nuxtContent)
      const podcasts = state[PODCASTS_LIST_NAME].length ? state[PODCASTS_LIST_NAME] : await listContentQuery(PODCASTS_LIST_NAME, nuxtContent)
      const videos = state[VIDEOS_LIST_NAME].length ? state[VIDEOS_LIST_NAME] : await listContentQuery(VIDEOS_LIST_NAME, nuxtContent)
      commit(SET_LIST_ITEMS_MUTATION, { listName: BOOKS_LIST_NAME, listContent: books })
      commit(SET_LIST_ITEMS_MUTATION, { listName: PODCASTS_LIST_NAME, listContent: podcasts })
      commit(SET_LIST_ITEMS_MUTATION, { listName: VIDEOS_LIST_NAME, listContent: videos })
    }
    if (viewName === TIMES_VIEW_NAME) {
      const times = state[TIMES_LIST_NAME].length ? state[TIMES_LIST_NAME] : await listContentQuery(TIMES_LIST_NAME, nuxtContent)
      commit(SET_LIST_ITEMS_MUTATION, { listName: TIMES_LIST_NAME, listContent: times })
    }
    if (viewName === LANGUAGES_VIEW_NAME) {
      const languages = state[LANGUAGES_LIST_NAME].length ? state[LANGUAGES_LIST_NAME] : await listContentQuery(LANGUAGES_LIST_NAME, nuxtContent)
      commit(SET_LIST_ITEMS_MUTATION, { listName: LANGUAGES_LIST_NAME, listContent: languages })
    }
  },
}

export const mutations = {
  [SET_LIST_ITEMS_MUTATION] (state, { listName, listContent }) {
    Vue.set(state, `${listName}`, listContent)
  },
  [SET_LIST_FILTER_MUTATION] (state, listName) {
    Vue.set(state, 'listFilter', listName)
  },
}

export const getters = {
  [FILTERED_LIST_ITEMS_GETTER] (state) {
    return state.listFilter ? state[state.listFilter] : []
  },
}

async function listContentQuery (listName, nuxtContent) {
  if (!LIST_NAMES.includes(listName)) {
    throw new Error('Attempted to load an unknown content list: ' + listName)
  }
  return await nuxtContent(listName).fetch()
}
