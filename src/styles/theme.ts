import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";
import {
    BREAKPOINT_LG,
    BREAKPOINT_SM,
    BREAKPOINT_MD,
    BREAKPOINT_XL,
} from "../utils/constants";

export default extendTheme({
    breakpoints: createBreakpoints({
        sm: BREAKPOINT_SM,
        md: BREAKPOINT_MD,
        lg: BREAKPOINT_LG,
        xl: BREAKPOINT_XL,
    }),
    styles: {
        global: (props: any) => ({
            body: {
                fontFamily: `'Poppins', sans-serif`,
                fontSize: "1.6rem",
                lineHeight: "tall",
                backgroundColor: props.theme.colors.white[50],
                overflowX: "hidden",
                color: "black",
            },
            "*, *::before, &::after": {
                boxSizing: "border-box",
            },
        }),
    },
});
