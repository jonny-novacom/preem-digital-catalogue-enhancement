import { createGlobalStyle } from "styled-components";

import plus from "../images/icons/plus.svg";
import plusG from "../images/icons/plus-g.svg";
import dash from "../images/icons/dash.svg";
import dashG from "../images/icons/dash-g.svg";

const GlobalStyles = createGlobalStyle`
:root {
    --preemGreen: #006341;
    --preemYellow: #ffac3a;
 }

 @media print
{   
    
    @page {
        size: A4 landscape;
    }

    .no-print, .no-print *
    {
        display: none !important;
    }
    .printer-ml {
        margin-left: 4rem !important;
    }
    .printer-w {
        width: 5rem !important;
    }
    .scale {
        transform: scale(0.45);
        transform-origin: 0 0;
    }
}

.printable {
    display: block;
 }

 a {
    text-decoration: none !important;
    font-family: "Gotham Narrow", "Franklin Gothic Medium", "Tahoma", sans-serif;
}

a:hover {
    color: inherit !important;
}

.t-center{
        text-align: center;
}

.gatsby-image-wrapper-constrained {
    display: block !important;
    vertical-align: top;
}

.accordion-header {
    font-family: "Gotham Narrow", "Franklin Gothic Medium", "Tahoma", sans-serif;
}

.accordion-body {
    padding: 0px !important;
}

.accordion-button {
    padding: 1rem 1.5rem !important;
}


.accordion-item:last-of-type .accordion-collapse {
    border-bottom-right-radius: 0rem !important;
    border-bottom-left-radius: 0rem !important;
}

.accordion-item:last-of-type .accordion-button.collapsed {
    border-bottom-right-radius: 0rem !important;
    border-bottom-left-radius: 0rem !important;
}

.accordion-item:first-of-type .accordion-button {
    border-top-left-radius: 0rem !important;
    border-top-right-radius: 0rem !important;
}

.inner .accordion-body .accordion-item:last-of-type .accordion-button.collapsed {
    background: #efefef;
    }

.accordion-flush .accordion-item .accordion-button {
    background: var(--preemGreen);
    color: white;
    font-family: "Gotham Narrow", "Franklin Gothic Medium", "Tahoma", sans-serif;
    font-size: 0.95rem;
    border-top: 1px solid black;
}

.accordion-button::after {
    background-color: var(--preemYellow);
    border-radius: 100%;
}

.inner .accordion-item .accordion-button {
    background: white;
    color: #4d4d4d;
    
}

.inner .accordion-flush .accordion-item .accordion-button {
    border-top: 1px solid #bfbfbf;
    border-bottom: 1px solid #bfbfbf;
}

.accordion-button::after {
    background-image: url(${plus}) !important;
    color: white;
    background-size: 0.85rem !important;
    border: 1px solid white;
    background: #006341;
    background-position: center;
}

.accordion-button:not(.collapsed)::after {
    background-image: url(${dash}) !important;
}

.accordion-button:focus {
    border: none;
    outline: 0;
    box-shadow: none !important;
}

.accordion-button:not(.collapsed) {
    box-shadow: none !important;
}

.inner .accordion-item .accordion-button[aria-expanded="true"]{
    font-weight: 700;
  }

.inner .accordion-item .accordion-button:not(.collapsed) {
    color: inherit;
    background-color: inherit;
}

.ais-SearchBox {
    border: none !important;
}

.ais-SearchBox form input {
    border: 1px solid #ccc !important;
}

.inner:nth-child(even) .accordion-item .accordion-button {
    background: #efefef;
    color: #4d4d4d;
    border-top: 0px;
}

.accordion-button {
    padding-left: 2.5rem !important;
}

.accordion-item:last-of-type {
    border-bottom-right-radius: 0rem !important;
    border-bottom-left-radius: 0rem !important;
}
.accordion-item:first-of-type {
    border-top-left-radius: 0rem !important;
    border-top-right-radius: 0rem !important;
}

.cats .accordion-item {
    background-color: #fff;
    border: 0px;
    margin-left: -1px;
    margin-right: -1px;

}

.cats .accordion-item .accordion-button {
    background: white;
    color: #4d4d4d;
    border-top: 1px solid #efefef;
}

.cats {
    border-left: 1px solid;
    border-right: 1px solid;
}

.cats .accordion-item:nth-child(odd) .accordion-header .accordion-button {
    background: #efefef;
}

.standards-acc .accordion-item .accordion-button {
    border-top: 1px solid #fff;
}

.cats .accordion-item .accordion-header .accordion-button {
    border-top: 1px solid #bfbfbf;
}

.cats .accordion-button::after, .innersearch .accordion-button::after, .inner .accordion-button::after {
    background-image: url(${plusG}) !important;
    color: #154734;
    background-size: 0.85rem !important;
    border: 1px solid #154734;
    background: transparent;
    background-position: center;
}

.cats .accordion-button:not(.collapsed)::after, .innersearch .accordion-button:not(.collapsed)::after,  .inner .accordion-button:not(.collapsed)::after  {
    background-image: url(${dashG}) !important;
}

.neg-outline-offset {
    outline-offset: -3px;
}

.outline-white {
    outline: 4px solid white !important;
    outline-offset: -2px !important;
}

a[disabled] {
    pointer-events: none !important;
    background: gray;
    opacity: 0.5;
  }

[aria-current] .current {
    color: #154734;
    background: #ffac3a;
    pointer-events: none !important;
}

/* Scrollbar Styles */
body::-webkit-scrollbar {
  width: 15px;
}

html {
  scrollbar-width: thin;
  scrollbar-color: #154734; #efefef;
}

body::-webkit-scrollbar-track {
  background: #efefef;
}

body::-webkit-scrollbar-thumb {
  background-color: #154734;
  border-radius: 0px;
  border: 3px solid #efefef;
}

::-webkit-scrollbar {
    height: 15px;              /* height of horizontal scrollbar */
    width: 6px;               /* width of vertical scrollbar */
    background: rgb(243, 244, 246);
  }

  ::-webkit-scrollbar-thumb:horizontal{
    background-color: #154734;
    border-radius: 0px;
    border-top: 3px solid rgb(243, 244, 246);
    border-bottom: 3px solid rgb(243, 244, 246);
}

::-webkit-scrollbar-thumb:vertical{
    background-color: #154734;
    border-radius: 0px;
    border-top: 3px solid rgb(243, 244, 246);
    border-bottom: 3px solid rgb(243, 244, 246);
}

.modal-content {
    border-radius: 25px !important;
    background-color: #154734 !important;
    padding: 10px !important;
    border: none !important;
}

.modal-title {
    display: inline-block !important;
    margin: 0 auto !important;
    text-align: center !important;
}

.modal-header {
    border-bottom: none !important;
}

.modal-footer {
    border-top: none !important;
}

`;

export default GlobalStyles;
