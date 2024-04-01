import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        nowPlayingMovies: null,
        popularMovies: null,
        topRatedMovies: null,
        upcomingMovies: null,
        horrorMovies: null,
        internationalTVShows: null,
        allTrending: null,
        trendingMovies: null,
        trendingTVShows: null,
        airingTodayTVSeries: null,
        onTheAirTVSeries: null,
        popularTVSeries: null,
        topRatedTVSeries: null,
        trailerVideo: null,
        allTrailerVideo: null,
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload;
        },
        addUpcomingMovies: (state, action) => {
            state.upcomingMovies = action.payload;
        },
        addHorrorMovies: (state, action) => {
            state.horrorMovies = action.payload;
        },
        addInternationalTVShows: (state, action) => {
            state.internationalTVShows = action.payload;
        },
        addAllTrending: (state, action) => {
            state.allTrending = action.payload;
        },
        addTrendingMovies: (state, action) => {
            state.trendingMovies = action.payload;
        },
        addTrendingTVShows: (state, action) => {
            state.trendingTVShows = action.payload;
        },
        addAiringTodayTVSeries: (state, action) => {
            state.airingTodayTVSeries = action.payload;
        },
        addOnTheAirTVSeries: (state, action) => {
            state.onTheAirTVSeries = action.payload;
        },
        addPopularTVSeries: (state, action) => {
            state.popularTVSeries = action.payload;
        },
        addTopRatedTVSeries: (state, action) => {
            state.topRatedTVSeries = action.payload;
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload;
        },
        addAllTrailerVideo: (state, action) => {
            state.allTrailerVideo = action.payload;
        },
    },
});

export const {
    addNowPlayingMovies,
    addPopularMovies,
    addTopRatedMovies,
    addUpcomingMovies,
    addHorrorMovies,
    addInternationalTVShows,
    addAllTrending,
    addTrendingMovies,
    addTrendingTVShows,
    addAiringTodayTVSeries,
    addOnTheAirTVSeries,
    addPopularTVSeries,
    addTopRatedTVSeries,
    addTrailerVideo,
    addAllTrailerVideo,
} = moviesSlice.actions;

export default moviesSlice.reducer;