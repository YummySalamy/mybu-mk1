import React from "react";
import './assets/Loaders.css';

const CubeLoader = () => {

    return (
        <aside class="loader">
        <div class="side front"></div>
        <div class="side behind"></div>
        <div class="side right"></div>
        <div class="side left"></div>
        <div class="side top"></div>
        <div class="side bottom"></div>
      </aside>
    )
}

export default CubeLoader;