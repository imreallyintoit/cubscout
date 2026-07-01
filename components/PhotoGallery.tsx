"use client";

import Image from "next/image";
import { useState } from "react";

const PHOTOS = [
  {
    src: "/images/camping.jpg",
    alt: "Scouts at overnight camp at Camp Owasippe",
    label: "Camp Owasippe",
    category: "Camping",
    gradient: "from-emerald-900 via-green-800 to-emerald-700",
    emoji: "⛺",
  },
  {
    src: "/images/hiking.jpg",
    alt: "Pack 5 family hike at Illinois Beach State Park",
    label: "Day Hike",
    category: "Outdoors",
    gradient: "from-sky-900 via-blue-800 to-sky-700",
    emoji: "🥾",
  },
  {
    src: "/images/pinewood.jpg",
    alt: "Pinewood Derby race day at Wilmette Park District",
    label: "Pinewood Derby",
    category: "Activities",
    gradient: "from-amber-900 via-yellow-800 to-amber-700",
    emoji: "🏎️",
  },
  {
    src: "/images/meeting.jpg",
    alt: "Monthly pack meeting at Central Elementary",
    label: "Pack Meeting",
    category: "Meetings",
    gradient: "from-scout-blue-900 via-blue-800 to-blue-700",
    emoji: "🤝",
  },
  {
    src: "/images/service.jpg",
    alt: "Scouts volunteering at the Wilmette community food pantry",
    label: "Community Service",
    category: "Service",
    gradient: "from-rose-900 via-red-800 to-rose-700",
    emoji: "❤️",
  },
  {
    src: "/images/crossover.jpg",
    alt: "Arrow of Light crossover ceremony at Blue & Gold Banquet",
    label: "Blue & Gold Banquet",
    category: "Celebrations",
    gradient: "from-indigo-900 via-violet-800 to-indigo-700",
    emoji: "⚜️",
  },
];

function PhotoCard({
  src,
  alt,
  label,
  category,
  gradient,
  emoji,
}: (typeof PHOTOS)[0]) {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="relative overflow-hidden rounded-2xl aspect-[4/3] group cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-300">
      {/* Placeholder — always rendered underneath; real photo overlays when present */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${gradient} flex flex-col items-center justify-center gap-2 select-none`}
      >
        <span className="text-5xl opacity-70">{emoji}</span>
        <span className="text-white/60 text-sm font-medium">{label}</span>
      </div>

      {/* Real photo */}
      {!hasError && (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          onError={() => setHasError(true)}
        />
      )}

      {/* Caption — slides up on hover */}
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <p className="text-scout-gold text-xs font-semibold uppercase tracking-wider">
          {category}
        </p>
        <p className="text-white font-bold text-sm leading-tight">{label}</p>
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PHOTOS.map((photo) => (
            <PhotoCard key={photo.src} {...photo} />
          ))}
        </div>

        {/* Wide feature row — two landscape photos */}
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
          {[
            {
              src: "/images/group-wide.jpg",
              alt: "Full Pack 5 group photo",
              label: "Pack 5 — The Whole Crew",
              category: "Pack Life",
              gradient: "from-scout-blue-900 to-blue-700",
              emoji: "📸",
            },
            {
              src: "/images/awards.jpg",
              alt: "Rank advancement ceremony",
              label: "Rank Advancements",
              category: "Achievements",
              gradient: "from-amber-900 to-scout-blue-900",
              emoji: "🏅",
            },
          ].map((photo) => (
            <div
              key={photo.src}
              className="relative overflow-hidden rounded-2xl aspect-[16/7] group shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${photo.gradient} flex flex-col items-center justify-center gap-2 select-none`}
              >
                <span className="text-5xl opacity-70">{photo.emoji}</span>
                <span className="text-white/60 text-sm font-medium">
                  {photo.label}
                </span>
              </div>
              <WidePhotoCard src={photo.src} alt={photo.alt} label={photo.label} category={photo.category} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WidePhotoCard({
  src,
  alt,
  label,
  category,
}: {
  src: string;
  alt: string;
  label: string;
  category: string;
}) {
  const [hasError, setHasError] = useState(false);
  return (
    <>
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
        <p className="text-scout-gold text-xs font-semibold uppercase tracking-wider">
          {category}
        </p>
        <p className="text-white font-bold text-sm">{label}</p>
      </div>
    </>
  );
}
