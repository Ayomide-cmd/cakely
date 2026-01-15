import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAddress } from "../services/apiGeocoding";

export const fetchUserAddress = createAsyncThunk(
  "user/fetchAddress",
  async function () {
    const positionObj = await new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });

    const position = {
      latitude: positionObj.coords.latitude,
      longitude: positionObj.coords.longitude,
    };

    const addressObj = await getAddress(position.latitude, position.longitude);
    const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;

    return { position, address };
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    username: "",
    address: "",
    position: {},
    status: "idle",
    error: null,
  },
  reducers: {
    updateName(state, action) {
      state.username = action.payload;
    },
    setPosition(state, action) {
      state.position = action.payload;
    },
    setAddress(state, action) {
      state.address = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserAddress.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUserAddress.fulfilled, (state, action) => {
        state.position = action.payload.position;
        state.address = action.payload.address;
        state.status = "idle";
      })
      .addCase(fetchUserAddress.rejected, (state) => {
        state.status = "error";
        state.error = "There was a problem getting your address. Make sure to fill this field!";
      });
  },
});

export const { updateName, setPosition, setAddress } = userSlice.actions;
export default userSlice.reducer;