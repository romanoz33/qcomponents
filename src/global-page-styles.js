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
    "vkpage": {
        "padding": "",
        "margin": ""
    },
    "vkcomments": {
        "padding": "",
        "margin": ""
    },
    "fblike": {
        "padding": "",
        "margin": ""
    },
    "fbcomments": {
        "padding": "",
        "margin": ""
    },
    "vimeo": {
        "padding": "",
        "margin": ""
    },
    "card": {
        "padding": "",
        "margin": ""
    },
    "youtube": {
        "padding": "",
        "margin": ""
    },
    "yandexmap": {
        "padding": "",
        "margin": ""
    },
    "svgshape": {
        "padding": "",
        "margin": ""
    },
    "soundcloud": {
        "padding": "",
        "margin": ""
    },
    "slidersimple": {
        "padding": "",
        "margin": ""
    },
    "pricelist": {
        "padding": "",
        "margin": ""
    },
    "progressbar": {
        "padding": "",
        "margin": ""
    },
    "looptext": {
        "padding": "",
        "margin": ""
    },
    "tickertext": {
        "padding": "",
        "margin": ""
    },
    "livechat": {
        "padding": "",
        "margin": ""
    },
    "lightbox": {
        "padding": "",
        "margin": ""
    },
    "bgimageparallax": {
        "padding": "",
        "margin": ""
    },
    "gallery": {
        "padding": "",
        "margin": ""
    },
    "tabsfull": {
        "padding": "",
        "margin": ""
    },
    "tabssimpllist": {
        "padding": "",
        "margin": ""
    },
    "timelinefull": {
        "padding": "",
        "margin": ""
    },
    "form": {
        "padding": "",
        "margin": ""
    },
    "formspree": {
        "padding": "",
        "margin": ""
    },
    "googlemap": {
        "padding": "",
        "margin": ""
    },
    "menu": {
        "padding": "",
        "margin": ""
    },
    "section": {
        "padding": "",
        "margin": ""
    },
    "socialmedia": {
        "padding": "",
        "margin": ""
    },
    "stack": {
        "padding": "",
        "margin": ""
    },
    "picture": {
        "padding": "",
        "margin": ""
    },
    "mobilesidepanel": {
        "padding": "",
        "margin": ""
    },
    "menuwith": {
        "padding": "",
        "margin": ""
    },
    "animation": {
        "padding": "",
        "margin": ""
    },
    "beforeafterimage": {
        "padding": "",
        "margin": ""
    },
    "disqus": {
        "padding": "",
        "margin": ""
    },
    "disquscomment": {
        "padding": "",
        "margin": ""
    },
    "sfsd1111111111111111111111111111111111111": {
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
