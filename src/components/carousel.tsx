import React, { useEffect, useState } from "react";

type Item = {
  name: string;
  image: string; // Add image URL to the item type
  file: string;
};

interface CarouselProps {
  items: Item[];
}

export function Carousel({ items }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItemCount, setVisibleItemCount] = useState(3);
  const [canClick, setCanClick] = useState(true);

  const updateVisibleItemCount = () => {
    const width = window.innerWidth;
    if (width > 1080) {
      setVisibleItemCount(3); // Show 3 items for large screens
    } else if (width > 860) {
      setVisibleItemCount(2); // Show 2 items for medium screens
    } else {
      setVisibleItemCount(1); // Show 1 item for small screens
    }
  };

  useEffect(() => {
    updateVisibleItemCount();
    window.addEventListener("resize", updateVisibleItemCount);
    return () => {
      window.removeEventListener("resize", updateVisibleItemCount);
    };
  }, []);

  const nextItem = () => {
    if (currentIndex < items.length - visibleItemCount) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevItem = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleClick = (callback: () => void) => {
    if (canClick) {
      setCanClick(false);
      callback();
      setTimeout(() => {
        setCanClick(true);
      }, 500);
    }
  };

  const handlePdfClick = () => {
    setTimeout(() => {
      window.location.reload();
    }, 1000); // Adjust the delay as needed
  };

  const visibleItems = items.slice(
    currentIndex,
    currentIndex + visibleItemCount
  ); // Only get visible items
  const itemWidth = 16 + 1.25; // 16rem + 1.25rem spacing

  return (
    <div className="flex items-center justify-center">
      <button
        className="text-3xl bg-transparent border-none cursor-pointer mx-4"
        onClick={() => handleClick(prevItem)}
        disabled={currentIndex === 0 || !canClick}
      >
        {"<"}
      </button>
      <div
        className={`overflow-hidden w-[calc(${visibleItemCount}*16rem+${
          visibleItemCount - 1
        }*1.25rem)]`}
      >
        <div
          className="flex gap-5 transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(-${currentIndex * itemWidth}rem)`,
          }}
        >
          {visibleItems.map((item, index) => (
            <div className="text-center w-64 shrink-0" key={index}>
              <a
                href={item.file}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
                onClick={handlePdfClick}
              >
                <div className="w-full h-80 bg-blue-500 mb-2 cursor-pointer">
                  <img
                    src={item.image} // Use image URL from JSON
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </a>
              <p className="text-sm font-arial text-transform: uppercase">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
      <button
        className="text-3xl bg-transparent border-none cursor-pointer mx-4"
        onClick={() => handleClick(nextItem)}
        disabled={currentIndex >= items.length - visibleItemCount || !canClick}
      >
        {">"}
      </button>
    </div>
  );
}
