import React from 'react';

import * as s from './SideBar.styled';

const SideBar = () => {
  return (
    <s.MainWrraper>
      {/* SideBar */}
      <s.AllPostsButton>
        <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M11.4 5H5.6C5.048 5 5 5.447 5 6C5 6.553 5.048 7 5.6 7H11.4C11.952 7 12 6.553 12 6C12 5.447 11.952 5 11.4 5ZM13.4 10H5.6C5.048 10 5 10.447 5 11C5 11.553 5.048 12 5.6 12H13.4C13.952 12 14 11.553 14 11C14 10.447 13.952 10 13.4 10ZM5.6 2H13.4C13.952 2 14 1.553 14 1C14 0.447 13.952 0 13.4 0H5.6C5.048 0 5 0.447 5 1C5 1.553 5.048 2 5.6 2ZM2.4 5H0.6C0.0479999 5 0 5.447 0 6C0 6.553 0.0479999 7 0.6 7H2.4C2.952 7 3 6.553 3 6C3 5.447 2.952 5 2.4 5ZM2.4 10H0.6C0.0479999 10 0 10.447 0 11C0 11.553 0.0479999 12 0.6 12H2.4C2.952 12 3 11.553 3 11C3 10.447 2.952 10 2.4 10ZM2.4 0H0.6C0.0479999 0 0 0.447 0 1C0 1.553 0.0479999 2 0.6 2H2.4C2.952 2 3 1.553 3 1C3 0.447 2.952 0 2.4 0Z"
            fill="#7C7C7C"
          />
        </svg>
        <h4>All Posts</h4>
      </s.AllPostsButton>
      <s.ReadListButton>
        <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M17.5885 5.44042C17.5272 3.93041 16.8816 2.53201 15.7699 1.50564C15.2447 1.02199 14.6472 0.645585 13.9929 0.387351C13.3386 0.131305 12.647 0 11.9358 0C11.8592 0 11.7804 0.00218842 11.7038 0.00437685C10.1938 0.0656527 8.7976 0.711237 7.76905 1.82514L1.40292 8.6946C1.1994 8.91566 1.21034 9.25924 1.42918 9.46493L1.87125 9.88073C2.09228 10.0886 2.44024 10.0777 2.64814 9.85447L9.01863 2.98063C9.74519 2.1928 10.811 1.7398 11.9402 1.7398C12.9556 1.7398 13.9076 2.10089 14.6166 2.75741C15.3935 3.47522 15.8465 4.45125 15.8881 5.51045C15.9297 6.56746 15.562 7.57413 14.8486 8.34665L6.19559 17.584C5.76228 18.0523 5.12983 18.3215 4.45798 18.3215C3.85398 18.3215 3.28718 18.107 2.86481 17.7153C2.40305 17.2885 2.13607 16.7086 2.10762 16.0783C2.08136 15.4503 2.3002 14.8506 2.72256 14.3933C2.72256 14.3933 10.776 5.79932 10.7891 5.78838C11.4938 5.05745 12.5989 6.12102 11.8943 6.85195C10.6972 8.09279 7.62247 11.4126 6.11683 13.043C5.91328 13.2641 5.92423 13.6076 6.14307 13.8133L6.58513 14.2291C6.80618 14.437 7.15412 14.4261 7.36202 14.2029L13.1592 7.95273C14.0761 6.95919 14.0148 5.40322 13.0191 4.48408C12.5661 4.06609 11.973 3.83412 11.3537 3.83412C11.0189 3.83412 10.695 3.89977 10.3886 4.03108C10.0735 4.16457 9.79336 4.36153 9.56136 4.61538L1.47952 13.2334C-0.0370601 14.8769 0.0679843 17.4483 1.71149 18.9671C2.43367 19.6345 3.40752 20 4.45358 20C5.61564 20 6.70328 19.5426 7.43859 18.746L16.0916 9.50868C17.1158 8.39698 17.6476 6.95262 17.5885 5.44042Z"
            fill="#7C7C7C"
          />
        </svg>
        <h4>Read List</h4>
        <div className="number-lists">15</div>
      </s.ReadListButton>
      <s.PoliticsButton>
        <s.Marker></s.Marker>
        <h4>Politics</h4>
      </s.PoliticsButton>
      <s.EngineeringButton>
        <s.Marker></s.Marker>
        <h4>Engineering</h4>
      </s.EngineeringButton>
      <s.CookingButton>
        <s.Marker></s.Marker>
        <h4>Cooking</h4>
      </s.CookingButton>
      <s.AddPostButton>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 1V15" stroke="#868686" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M1 8H15" stroke="#868686" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <h4>Add new post</h4>
      </s.AddPostButton>
    </s.MainWrraper>
  );
};

export default SideBar;
