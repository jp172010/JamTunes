import { createSlice } from 'redux-starter-kit';

export const player = createSlice({
    slice: 'player',
    initialState: {
        playing: true,
        file: null
    },
    reducers: {
        pause: state => {
            state.playing = false
        },
        continue: state => {
            state.playing = true
        },
        play: (state, action) => {
            state.file = action.payload;
            state.playing = true;
        }
    }
});

export default player.reducer