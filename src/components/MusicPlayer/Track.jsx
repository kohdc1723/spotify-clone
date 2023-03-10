import React from 'react';
import { noImage } from "../../assets";

const Track = ({ activeSong }) => (
  <div className="flex flex-1 items-center justify-start">
    <div className="hidden sm:block h-16 w-16 mr-4">
      <img src={activeSong?.images?.coverart ?? noImage} alt="cover art" className="rounded-full bg-zinc-700" />
    </div>
    <div className="w-1/2">
      <p className="truncate text-white font-bold text-lg max-w-[200px]">
        {activeSong?.title ? activeSong?.title : 'No active Song'}
      </p>
      <p className="truncate text-gray-300 max-w-[200px]">
        {activeSong?.subtitle ? activeSong?.subtitle : 'No active Song'}
      </p>
    </div>
  </div>
);

export default Track;
