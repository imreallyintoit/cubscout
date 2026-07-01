"use client";

import Image from "next/image";
import { useState } from "react";

// 12 square grid photos
const GRID_PHOTOS = [
  { src: "https://i.imgur.com/HRf6x1y.jpeg", alt: "Pack 5 scouts", label: "Pack Meeting", category: "Meetings" },
  { src: "https://i.imgur.com/tILWmIs.jpeg", alt: "Pack 5 scouts", label: "Camping", category: "Outdoors" },
  { src: "https://i.imgur.com/3EPTclM.jpeg", alt: "Pack 5 scouts", label: "Community Service", category: "Service" },
  { src: "https://i.imgur.com/P0Tym2B.jpeg", alt: "Pack 5 scouts", label: "Pinewood Derby", category: "Activities" },
  { src: "https://i.imgur.com/1tZCeOk.jpeg", alt: "Pack 5 scouts", label: "Hiking", category: "Outdoors" },
  { src: "https://i.imgur.com/xGQHQoT.jpeg", alt: "Pack 5 scouts", label: "Blue & Gold", category: "Celebrations" },
  { src: "https://i.imgur.com/2BXgTRW.jpeg", alt: "Pack 5 scouts", label: "Den Activities", category: "Activities" },
  { src: "https://i.imgur.com/IebfLaC.jpeg", alt: "Pack 5 scouts", label: "Pack Events", category: "Activities" },
  { src: "https://i.imgur.com/Mm4c4j2.jpeg", alt: "Pack 5 scouts", label: "Outdoor Adventure", category: "Outdoors" },
  { src: "https://i.imgur.com/37WRqv5.jpeg", alt: "Pack 5 scouts", label: "Rank Advancement", category: "Achievements" },
  { src: "https://i.imgur.com/TQIHjH5.jpeg", alt: "Pack 5 scouts", label: "Scout Activities", category: "Activities" },
  { src: "https://i.imgur.com/VizPCqd.jpeg", alt: "Pack 5 scouts", label: "Family Fun", category: "Activities" },
];

// 2 wide feature photos at the bottom
const WIDE_PHOTOS = [
  { src: "https://i.imgur.com/qauGM51.jpeg", alt: "Pack 5 group photo", label: "Pack 5 — The Whole Crew", category: "Pack Life" },
  { src: "https://i.imgur.com/j3y3b8K.jpeg", alt: "Pack 5 scouts at an event", label: "Making Memories", category: "Pack Life" },
];

function PhotoCard({ src, alt, label, category }: (typeof GRID_PHOTOS)[0]) {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="relative overflow-hidden rounded-xl aspect-square group cursor-pointer shadow-sm hover:shadow-lg transition-all duration-300">
      <div className="absolute inset-0 bg-gradient-to-br from-scout-blue-900 via-blue-800 to-blue-700 flex items-center justify-center select-none">
        <span className="text-blue-400 text-xs font-medium opacity-50">{label}</span>
      </div>
      {!hasError && (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          onError={() => setHasError(true)}
        />
      )}
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <p className="text-scout-gold text-xs font-semibold uppercase tracking-wider leading-none">{category}</p>
        <p className="text-white font-bold text-sm leading-tight mt-0.5">{label}</p>
      </div>
    </div>
  );
}

function WideCard({ src, alt, label, category }: (typeof WIDE_PHOTOS)[0]) {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="relative overflow-hidden rounded-xl aspect-[21/9] group cursor-pointer shadow-sm hover:shadow-lg transition-all duration-300">
      <div className="absolute inset-0 bg-gradient-to-br from-scout-blue-900 to-blue-700 flex items-center justify-center select-none">
        <span className="text-blue-400 text-sm font-medium opacity-50">{label}</span>
      </div>
      {!hasError && (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          onError={() => setHasError(true)}
        />
      )}
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <p className="text-scout-gold text-xs font-semibold uppercase tracking-wider">{category}</p>
        <p className="text-white font-bold text-base leading-tight mt-0.5">{label}</p>
      </div>
    </div>
  );
}

export default function PhotoGallery() {
  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="section-heading">Pack 5 in Action</h2>
          <p className="section-subheading">
            From overnight camps and Pinewood Derby races to community service
            and Blue &amp; Gold banquets — every year is packed with memories.
          </p>
        </div>

        {/* 3×4 photo grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-3">
          {GRID_PHOTOS.map((photo) => (
            <PhotoCard key={photo.src} {...photo} />
          ))}
        </div>

        {/* 2 wide feature photos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {WIDE_PHOTOS.map((photo) => (
            <WideCard key={photo.src} {...photo} />
          ))}
        </div>
      </div>
    </section>
  );
}
