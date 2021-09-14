import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from './apiactions';

const slice = createSlice({
    name: 'words',
    initialState: {
        list: [],
        loading: false,
        lastfetch: null,
        searchItems: []
    },
    reducers: {
        wordsRequested: (words, action) => {
            words.loading = true
        },

        wordsReceived: (words, action) => {
            words.list = action.payload;
            words.searchItems = action.payload;
            words.loading = false;
            words.lastfetch = Date.now();
        },

        wordsRequestFailed: (words, action) => {
            words.loading = false;
        },
        wordAdded: (words, action) => {
            words.list.push(action.payload)
            words.searchItems.push(action.payload)
        },
        wordsSearch: (words, action) => {
            words.searchItems = words.list.filter(word => word.key.includes(action.payload.toLowerCase().trim()))
        }
    }
})
export const { wordsRequested, wordsReceived, wordsRequestFailed, wordAdded, wordsSearch } = slice.actions
export default slice.reducer

//Action Creators
const url = ''

//Getting List of words from server

export const loadWords = () => (dispatch, getState) => {
    return dispatch(
        apiCallBegan({
            url,
            onStart: wordsRequested.type,
            onSuccess: wordsReceived.type,
            onError: wordsRequestFailed.type,
        })
    );
};