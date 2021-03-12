import React from "react";
import { transformVar } from "@quarkly/atomize";
import { createGlobalStyle } from "styled-components";

const pageStyles = {
    "404": {
        "padding": "",
        "margin": ""
    },
    "index": {
        "padding": "",
        "margin": ""
    },
    "formspree": {
        "padding": "",
        "margin": ""
    },
    "picture": {
        "padding": "",
        "margin": ""
    },
    "audio": {
        "padding": "",
        "margin": ""
    },
    "video": {
        "padding": "",
        "margin": ""
    },
    "burgermenu": {
        "padding": "",
        "margin": ""
    },
    "mobilemenu": {
        "padding": "",
        "margin": ""
    },
    "popup": {
        "padding": "",
        "margin": ""
    },
    "tooltip": {
        "padding": "",
        "margin": ""
    },
    "collapse": {
        "padding": "",
        "margin": ""
    },
    "table": {
        "padding": "",
        "margin": ""
    },
    "сode": {
        "padding": "",
        "margin": ""
    },
    "accordion": {
        "padding": "",
        "margin": ""
    },
    "backtotop": {
        "padding": "",
        "margin": ""
    },
    "sfsd11": {
        "padding": "",
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
