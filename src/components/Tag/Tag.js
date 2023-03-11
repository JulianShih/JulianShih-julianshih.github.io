// region 1. Platform Libraries
import React, { useState } from 'react';
// endregion

// region U. UI Markups
import './Tag.scss';
// endregion


const Tag = ({ label }) => (
  <div className="tag">
    <span className="font-h4">{label}</span>
  </div>
);

export default Tag;
