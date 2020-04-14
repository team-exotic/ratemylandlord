// build navr bar here and import it into hom.jsx
import React from 'react';

<header class="header">
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="header_content d-flex flex-row align items-center justify-content-start">
          <div class="logo">
            <a href="#"><img src="images/logo.png" alt></img></a>
          </div>
          <nav class="main_nav">
            <ul> == $0
            <li class="active">
                <a href="../../images/index.html">Home</a>
              </li>
              <li class="active">
                {/* need to get the profile button to conditionally render */}
                <a href="../../html_files/profile.html">Profile</a>
              </li>
              <li class="active">
                <a href="../../html_files/properties.html">Properties</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</header>