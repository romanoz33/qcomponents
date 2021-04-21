import React from "react";
import { transformVar } from "@quarkly/atomize";
import { createGlobalStyle } from "styled-components";

const pageStyles = {
    "404": {
        "padding": "",
        "margin": "",
        "display": "",
        "justify-content": "",
        "align-items": ""
    },
    "index": {
        "padding": "",
        "margin": "",
        "display": "",
        "justify-content": "",
        "align-items": ""
    },
    "accordion": {
        "padding": "",
        "margin": "",
        "display": "",
        "justify-content": "",
        "align-items": ""
    },
    "animation": {
        "padding": "",
        "margin": "",
        "display": "",
        "justify-content": "",
        "align-items": ""
    },
    "audio": {
        "padding": "",
        "margin": "",
        "display": "",
        "justify-content": "",
        "align-items": ""
    },
    "backtotop": {
        "padding": "",
        "margin": "",
        "display": "",
        "justify-content": "",
        "align-items": ""
    },
    "beforeafterimage": {
        "padding": "",
        "margin": "",
        "display": "",
        "justify-content": "",
        "align-items": ""
    },
    "bgimageparallax": {
        "padding": "",
        "margin": "",
        "display": "",
        "justify-content": "",
        "align-items": ""
    },
    "burgermenu": {
        "padding": "",
        "margin": "",
        "display": "",
        "justify-content": "",
        "align-items": ""
    },
    "card": {
        "padding": "",
        "margin": "",
        "display": "",
        "justify-content": "",
        "align-items": ""
    },
    "cardflip": {
        "padding": "",
        "margin": "",
        "display": "",
        "justify-content": "",
        "align-items": ""
    },
    "сode": {
        "padding": "",
        "margin": "",
        "display": "",
        "justify-content": "",
        "align-items": ""
    },
    "collapse": {
        "padding": "",
        "margin": "",
        "display": "",
        "justify-content": "",
        "align-items": ""
    },
    "counter": {
        "padding": "",
        "margin": "",
        "display": "",
        "justify-content": "",
        "align-items": ""
    },
    "disqus": {
        "padding": "",
        "margin": "",
        "display": "",
        "justify-content": "",
        "align-items": ""
    },
    "disquscomment": {
        "padding": "",
        "margin": "",
        "display": "",
        "justify-content": "",
        "align-items": ""
    },
    "fblike": {
        "padding": "",
        "margin": "",
        "display": "",
        "justify-content": "",
        "align-items": ""
    },
    "fbcomments": {
        "padding": "",
        "margin": "",
        "display": "",
        "justify-content": "",
        "align-items": ""
    },
    "form": {
        "padding": "",
        "margin": "",
        "display": "",
        "justify-content": "",
        "align-items": ""
    },
    "formspree": {
        "padding": "",
        "margin": "",
        "display": "",
        "justify-content": "",
        "align-items": ""
    },
    "gallery": {
        "padding": "",
        "margin": "",
        "display": "",
        "justify-content": "",
        "align-items": ""
    },
    "googlemap": {
        "padding": "",
        "margin": "",
        "display": "",
        "justify-content": "",
        "align-items": ""
    },
    "lightboximage": {
        "padding": "",
        "margin": "",
        "display": "",
        "justify-content": "",
        "align-items": ""
    },
    "lightboxmap": {
        "padding": "",
        "margin": "",
        "display": "",
        "justify-content": "",
        "align-items": ""
    },
    "lightboxvideo": {
        "padding": "",
        "margin": "",
        "display": "",
        "justify-content": "",
        "align-items": ""
    },
    "livechat": {
        "padding": "",
        "margin": "",
        "display": "",
        "justify-content": "",
        "align-items": ""
    },
    "looptext": {
        "padding": "",
        "margin": "",
        "display": "",
        "justify-content": "",
        "align-items": ""
    },
    "menu": {
        "padding": "",
        "margin": "",
        "display": "",
        "justify-content": "",
        "align-items": ""
    },
    "menuwith": {
        "padding": "",
        "margin": "",
        "display": "",
        "justify-content": "",
        "align-items": ""
    },
    "mobilemenu": {
        "padding": "",
        "margin": "",
        "display": "",
        "justify-content": "",
        "align-items": ""
    },
    "mobilesidepanel": {
        "padding": "",
        "margin": "",
        "display": "",
        "justify-content": "",
        "align-items": ""
    },
    "pricelist": {
        "padding": "",
        "margin": "",
        "display": "",
        "justify-content": "",
        "align-items": ""
    },
    "popup": {
        "padding": "",
        "margin": "",
        "display": "",
        "justify-content": "",
        "align-items": ""
    },
    "progressbar": {
        "padding": "",
        "margin": "",
        "display": "",
        "justify-content": "",
        "align-items": ""
    },
    "picture": {
        "padding": "",
        "margin": "",
        "display": "",
        "justify-content": "",
        "align-items": ""
    },
    "section": {
        "padding": "",
        "margin": "",
        "display": "",
        "justify-content": "",
        "align-items": ""
    },
    "scrollindicator": {
        "padding": "",
        "margin": "",
        "display": "",
        "justify-content": "",
        "align-items": ""
    },
    "soundcloud": {
        "padding": "",
        "margin": "",
        "display": "",
        "justify-content": "",
        "align-items": ""
    },
    "socialmedia": {
        "padding": "",
        "margin": "",
        "display": "",
        "justify-content": "",
        "align-items": ""
    },
    "slider": {
        "padding": "",
        "margin": "",
        "display": "",
        "justify-content": "",
        "align-items": ""
    },
    "slidersimple": {
        "padding": "",
        "margin": "",
        "display": "",
        "justify-content": "",
        "align-items": ""
    },
    "stack": {
        "padding": "",
        "margin": "",
        "display": "",
        "justify-content": "",
        "align-items": ""
    },
    "svgshape": {
        "padding": "",
        "margin": "",
        "display": "",
        "justify-content": "",
        "align-items": ""
    },
    "table": {
        "padding": "",
        "margin": "",
        "display": "",
        "justify-content": "",
        "align-items": ""
    },
    "tabsfull": {
        "padding": "",
        "margin": "",
        "display": "",
        "justify-content": "",
        "align-items": ""
    },
    "tabssimpllist": {
        "padding": "",
        "margin": "",
        "display": "",
        "justify-content": "",
        "align-items": ""
    },
    "tooltip": {
        "padding": "",
        "margin": "",
        "display": "",
        "justify-content": "",
        "align-items": ""
    },
    "timer": {
        "padding": "",
        "margin": "",
        "display": "",
        "justify-content": "",
        "align-items": ""
    },
    "tickertext": {
        "padding": "",
        "margin": "",
        "display": "",
        "justify-content": "",
        "align-items": ""
    },
    "timelinefull": {
        "padding": "",
        "margin": "",
        "display": "",
        "justify-content": "",
        "align-items": ""
    },
    "vkpage": {
        "padding": "",
        "margin": "",
        "display": "",
        "justify-content": "",
        "align-items": ""
    },
    "vkcomments": {
        "padding": "",
        "margin": "",
        "display": "",
        "justify-content": "",
        "align-items": ""
    },
    "video": {
        "padding": "",
        "margin": "",
        "display": "",
        "justify-content": "",
        "align-items": ""
    },
    "vimeo": {
        "padding": "",
        "margin": "",
        "display": "",
        "justify-content": "",
        "align-items": ""
    },
    "yandexmap": {
        "padding": "",
        "margin": "",
        "display": "",
        "justify-content": "",
        "align-items": ""
    },
    "youtube": {
        "padding": "",
        "margin": "",
        "display": "",
        "justify-content": "",
        "align-items": ""
    },
    "yoomoneydonateform": {
        "padding": "",
        "margin": "",
        "display": "",
        "justify-content": "",
        "align-items": ""
    },
    "pdfviewer": {
        "padding": "",
        "margin": "",
        "display": "",
        "justify-content": "",
        "align-items": ""
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
