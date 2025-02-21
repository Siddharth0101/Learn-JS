const { createSlice } = require("@reduxjs/toolkit");

const ThemeSlice = createSlice({
    name: "Theme",
    initialState: {
        theme: "DARK" // Default value; don't use localStorage here
    },
    reducers: {
        ChangeTheme(state, action) {
            state.theme = action.payload;
            if (typeof window !== "undefined") {
                localStorage.setItem("theme", action.payload);
            }
        }
    }
});

export const ThemeActions = ThemeSlice.actions;
export default ThemeSlice.reducer;
