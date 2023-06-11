import 'photoswipe/dist/photoswipe.css';
import {
  Gallery as GalleryImage,
  GalleryProps as GalleryImagePros,
  Item,
} from 'react-photoswipe-gallery';

import { DataSourceArray } from 'photoswipe';
import clsx from 'clsx';

type GalleryProps = {
  photos: string[] | undefined;
  maxImgs?: number;
};

const uiElements: GalleryImagePros['uiElements'] = [
  {
    name: 'bulletsIndicator',
    order: 9,
    isButton: false,
    appendTo: 'wrapper',
    onInit: (el, pswpInstance) => {
      let prevIndex = -1;
      const thumbnails: HTMLElement[] = [];

      el.style.position = 'absolute';
      el.style.bottom = '20px';
      el.style.left = '10px';
      el.style.right = '0';
      el.style.display = 'grid';
      el.style.gap = '10px';
      el.style.gridTemplateColumns = 'repeat(auto-fit, 40px)';
      el.style.gridTemplateRows = 'repeat(auto-fit, 40px)';
      el.style.justifyContent = 'center';

      const dataSource = pswpInstance.options.dataSource as DataSourceArray;

      for (let i = 0; i < dataSource.length; i++) {
        const slideData = dataSource[i];

        const thumbnail = document.createElement('div');
        thumbnail.style.transition = 'transform 0.15s ease-in';
        thumbnail.style.opacity = '0.6';
        thumbnail.style.cursor = 'pointer';
        thumbnail.onclick = (e: MouseEvent) => {
          const target = e.target as HTMLImageElement | HTMLDivElement;
          const thumbnailEl =
            target.tagName === 'IMG'
              ? target.parentElement
              : (e.target as HTMLImageElement | HTMLDivElement);
          if (thumbnailEl) {
            pswpInstance.goTo(thumbnails.indexOf(thumbnailEl));
          }
        };

        const thumbnailImage = document.createElement('img');
        thumbnailImage.setAttribute('src', slideData.msrc || '');
        thumbnailImage.style.width = '100%';
        thumbnailImage.style.height = '100%';
        thumbnailImage.style.objectFit = 'cover';

        thumbnail.appendChild(thumbnailImage);

        el.appendChild(thumbnail);

        thumbnails.push(thumbnail);
      }

      pswpInstance.on('change', () => {
        if (prevIndex >= 0) {
          const prevThumbnail = thumbnails[prevIndex];
          prevThumbnail.style.opacity = '0.6';
          prevThumbnail.style.cursor = 'pointer';
          prevThumbnail.style.transform = 'scale(1)';
        }

        const currentThumbnail = thumbnails[pswpInstance.currIndex];
        currentThumbnail.style.opacity = '1';
        currentThumbnail.style.cursor = 'unset';
        currentThumbnail.style.transform = 'scale(1.2)';

        prevIndex = pswpInstance.currIndex;
      });
    },
  },
];

export function Gallery({ photos, maxImgs = 5 }: GalleryProps) {
  return (
    <div className="w-full h-full shadow-inner overflow-hidden rounded-md">
      <GalleryImage uiElements={uiElements}>
        <div className="h-full grid grid-flow-col-dense grid-rows-2 gap-2">
          {photos?.map((photo, index) => (
            <Item
              original={`${photo}`}
              thumbnail={`${photo}`}
              key={photo}
              width="1000"
              height="720"
              cropped
            >
              {({ ref, open }) => (
                <>
                  <div
                    className={clsx('overflow-hidden', {
                      // 'row-span-1 col-span-2': index === 0 && photos.length > 3,
                      'row-span-2': index === 0,
                      // 'row-span-1 col-span-2 md:row-span-2': index === 3,
                      // 'col-span-2 md:row-span-2':
                      //   index === 4 && photos.length === maxImgs,
                      hidden: index >= maxImgs,
                    })}
                  >
                    <img
                      ref={ref as React.MutableRefObject<HTMLImageElement>}
                      className="w-full h-full object-cover cursor-pointer hover:scale-125 transition-all"
                      onClick={open}
                      src={`${photo}`}
                    />
                  </div>

                  <div
                    className={clsx('relative overflow-hidden', {
                      hidden: !(index === maxImgs),
                      'row-span-2': index === maxImgs,
                    })}
                  >
                    <img
                      ref={ref as React.MutableRefObject<HTMLImageElement>}
                      className="w-full h-full object-cover cursor-pointer opacity-50 hover:scale-125 transition-all"
                      onClick={open}
                      src={`${photos[index]}`}
                    />
                    <span className="absolute -z-10 text-xl md:text-4xl cursor-pointer font-bold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      {`+ ${photos.length - maxImgs}`}
                    </span>
                  </div>
                </>
              )}
            </Item>
          ))}
        </div>
      </GalleryImage>
    </div>
  );
}
