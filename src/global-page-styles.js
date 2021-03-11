import React from "react";
import { transformVar } from "@quarkly/atomize";
import { createGlobalStyle } from "styled-components";

const pageStyles = {
    "404": {
        "padding": "0px 50px 0px 50px",
        "margin": ""
    },
    "index": {
        "padding": "0px 50px 0px 50px",
        "margin": ""
    },
    "formspree": {
        "padding": "0px 50px 0px 50px",
        "margin": ""
    },
    "picture": {
        "padding": "0px 50px 0px 50px",
        "margin": ""
    },
    "audio": {
        "padding": "0px 50px 0px 50px",
        "margin": ""
    }
};

const PageStyles = createGlobalStyle`
    body {
        ${({ styles }) =>
            Object.entries(styles || {}).map(
                ([prop, value]) => `${prop}: ${transformVar(prop, value)};`
            )}
    }
`;
export const GlobalQuarklyPageStyles = ({ pageUrl }) => <PageStyles styles={pageStyles[pageUrl]} />
