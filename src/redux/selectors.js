import { createSelector } from "reselect";

export const reselectlogin_Header = createSelector(
    (state) => state.configValuesReducer.configResponse?.login_Header,
    (login_Header) => {
        return login_Header;
    }
);

export const reselectlogin_SubHeader = createSelector(
    (state) => state.configValuesReducer.configResponse?.login_SubHeader,
    (login_SubHeader) => {
        return login_SubHeader;
    }
);

export const reselectisLoading = createSelector(
    (state) => state.configValuesReducer?.isLoading,
    (isLoading) => {
        return isLoading;
    }
);