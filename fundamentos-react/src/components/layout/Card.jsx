import React from "react";
import "./card.css";

export default function Card({ titulo, children }) {
    return (
        <div className="card">
            <div className="title">
                { titulo }
            </div>
            <div className="content">
                { children }
            </div>
        </div>
    );
}