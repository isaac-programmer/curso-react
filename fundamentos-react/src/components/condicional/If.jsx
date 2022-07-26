import React from "react";

export default function If({ children, test }) {
    if(test) {
        return children;
    } else {
        return false;
    }
}