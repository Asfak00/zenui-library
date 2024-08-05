// icons
import {FaFacebook, FaHamburger} from "react-icons/fa";
import {BsTwitter} from "react-icons/bs";

export const IconsData = [
    {
        name: 'Bold',
        iconCode: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">\n' +
            '  <path d="M5.33333 7.33335H8.33333C8.77536 7.33335 9.19928 7.15776 9.51184 6.8452C9.82441 6.53264 10 6.10871 10 5.66669C10 5.22466 9.82441 4.80074 9.51184 4.48818C9.19928 4.17561 8.77536 4.00002 8.33333 4.00002H5.33333V7.33335ZM12 10.3334C12 10.7273 11.9224 11.1174 11.7716 11.4814C11.6209 11.8454 11.3999 12.1761 11.1213 12.4547C10.8427 12.7332 10.512 12.9542 10.1481 13.105C9.78407 13.2558 9.39397 13.3334 9 13.3334H4V2.66669H8.33333C8.92064 2.66671 9.49502 2.83912 9.98525 3.16254C10.4755 3.48596 10.86 3.94615 11.0911 4.48607C11.3223 5.02598 11.3898 5.62186 11.2855 6.19982C11.1811 6.77777 10.9094 7.31238 10.504 7.73735C10.9591 8.00088 11.3369 8.37947 11.5995 8.83512C11.862 9.29077 12.0002 9.80746 12 10.3334ZM5.33333 8.66669V12H9C9.44203 12 9.86595 11.8244 10.1785 11.5119C10.4911 11.1993 10.6667 10.7754 10.6667 10.3334C10.6667 9.89133 10.4911 9.4674 10.1785 9.15484C9.86595 8.84228 9.44203 8.66669 9 8.66669H5.33333Z" fill="#616161"/>\n' +
            '</svg>',
    },
    {
        name: 'Italic',
        iconCode: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">\n' +
            '  <path d="M9.99996 13.3334H4.66663V12H6.61796L8.02863 4.00002H5.99996V2.66669H11.3333V4.00002H9.38196L7.97129 12H9.99996V13.3334Z" fill="#616161"/>\n' +
            '</svg>',
    },
    {
        name: 'Underline',
        iconCode: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">\n' +
            '  <path d="M5.33329 2V8C5.33329 8.70724 5.61424 9.38552 6.11434 9.88562C6.61444 10.3857 7.29272 10.6667 7.99996 10.6667C8.7072 10.6667 9.38548 10.3857 9.88558 9.88562C10.3857 9.38552 10.6666 8.70724 10.6666 8V2H12V8C12 9.06087 11.5785 10.0783 10.8284 10.8284C10.0782 11.5786 9.06082 12 7.99996 12C6.93909 12 5.92168 11.5786 5.17153 10.8284C4.42139 10.0783 3.99996 9.06087 3.99996 8V2H5.33329ZM2.66663 13.3333H13.3333V14.6667H2.66663V13.3333Z" fill="#212524"/>\n' +
            '</svg>',
    },
    {
        name: 'Link Outlined',
        iconCode: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">\n' +
            '  <path d="M11.7713 9.88536L10.8287 8.94269L11.7713 8.00002C12.019 7.75239 12.2154 7.45841 12.3494 7.13487C12.4834 6.81133 12.5524 6.46456 12.5524 6.11436C12.5524 5.76416 12.4834 5.41738 12.3494 5.09384C12.2154 4.7703 12.019 4.47632 11.7713 4.22869C11.5237 3.98106 11.2297 3.78463 10.9062 3.65061C10.5826 3.5166 10.2359 3.44762 9.88568 3.44762C9.53547 3.44762 9.1887 3.5166 8.86516 3.65061C8.54162 3.78463 8.24764 3.98106 8.00001 4.22869L7.05734 5.17136L6.11468 4.22869L7.05734 3.28602C7.80955 2.54597 8.82372 2.13313 9.87893 2.13742C10.9341 2.14172 11.9449 2.56281 12.6911 3.30896C13.4372 4.05512 13.8583 5.06589 13.8626 6.1211C13.8669 7.17632 13.4541 8.19048 12.714 8.94269L11.7713 9.88536ZM9.88534 11.7714L8.94268 12.714C8.57236 13.0904 8.13118 13.3898 7.64459 13.5948C7.15799 13.7999 6.63562 13.9065 6.1076 13.9087C5.57957 13.9108 5.05635 13.8084 4.5681 13.6074C4.07986 13.4063 3.63625 13.1105 3.26288 12.7372C2.88951 12.3638 2.59376 11.9202 2.39268 11.4319C2.19161 10.9437 2.08919 10.4205 2.09134 9.89244C2.09349 9.36441 2.20017 8.84204 2.40521 8.35545C2.61025 7.86885 2.90961 7.42768 3.28601 7.05736L4.22868 6.11469L5.17134 7.05736L4.22868 8.00002C3.98105 8.24765 3.78462 8.54163 3.6506 8.86517C3.51658 9.18872 3.44761 9.53549 3.44761 9.88569C3.44761 10.2359 3.51658 10.5827 3.6506 10.9062C3.78462 11.2297 3.98105 11.5237 4.22868 11.7714C4.47631 12.019 4.77028 12.2154 5.09383 12.3494C5.41737 12.4834 5.76414 12.5524 6.11434 12.5524C6.46454 12.5524 6.81131 12.4834 7.13486 12.3494C7.4584 12.2154 7.75238 12.019 8.00001 11.7714L8.94268 10.8287L9.88534 11.7714ZM9.88534 5.17136L10.8287 6.11469L6.11468 10.828L5.17134 9.88536L9.88534 5.17202V5.17136Z" fill="#616161"/>\n' +
            '</svg>',
    },
    {
        name: 'Delete Outlined',
        iconCode: '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">\n' +
            '  <path d="M13.1452 6.23743L12.6557 12.9387C12.5545 14.3249 11.4002 15.399 10.0094 15.399H5.21494C3.82487 15.399 2.66985 14.3249 2.56867 12.9379L2.0791 6.23743" stroke="#5F6161" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>\n' +
            '  <path d="M14.2236 3.72192H1" stroke="#5F6161" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>\n' +
            '  <path d="M10.6274 3.721L10.225 1.74018C10.1083 1.30355 9.71209 1.00001 9.26065 1.00001H5.9637C5.50994 0.998446 5.11222 1.30199 4.99469 1.74018L4.59619 3.721" stroke="#5F6161" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>\n' +
            '  <path d="M6.09277 8.02515V11.6319M8.79709 8.02515V11.6319" stroke="#5F6161" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>\n' +
            '</svg>',
    },
    {
        name: 'Dropdown Bordered',
        iconCode: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">\n' +
    '  <path d="M17.5 12.5786C17.5 14.883 15.9627 16.756 13.6819 16.7503H6.31811C4.0373 16.756 2.5 14.883 2.5 12.5786V7.42761C2.5 5.12571 4.0373 3.25031 6.31811 3.25031H13.6819C15.9627 3.25031 17.5 5.12571 17.5 7.42761V12.5786Z" stroke="#212524" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>\n' +
    '  <path d="M14.4277 7.63818L11.0952 10.3479C10.4677 10.8466 9.57824 10.8466 8.95065 10.3479L5.58984 7.63818" stroke="#212524" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>\n' +
    '</svg>',
    },
    {
        name: 'Image Outlined',
        iconCode: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.5136 2.5H6.48165C4.03527 2.5 2.5 4.23467 2.5 6.68835V13.3077C2.5 15.7622 4.02878 17.496 6.48165 17.496H13.5087C15.9673 17.496 17.4903 15.7622 17.4903 13.3077V6.68835C17.4984 4.23467 15.9705 2.5 13.5136 2.5Z" stroke="#212524" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.96433 7.40538C8.96433 8.23381 8.29238 8.90577 7.46396 8.90577C6.63552 8.90577 5.96436 8.23381 5.96436 7.40538C5.96436 6.57695 6.63552 5.90497 7.46396 5.90497C8.29238 5.90497 8.96358 6.57614 8.96433 7.40376V7.40538Z" stroke="#212524" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M17.5 12.4159C16.7502 11.6442 15.3074 10.0847 13.7389 10.0847C12.1711 10.0847 11.2657 13.5248 9.75723 13.5248C8.2495 13.5248 6.87635 11.9692 5.671 12.9663C4.73962 13.8555 3.94605 14.8777 3.31378 15.9996" stroke="#212524" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>`,
    },
    {
        name: 'Setting Outlined',
        iconCode: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M17.3411 6.35305L16.8224 5.45298C16.3836 4.69138 15.4112 4.42864 14.6485 4.86564C14.2855 5.07949 13.8523 5.14017 13.4445 5.03428C13.0367 4.92839 12.6877 4.66464 12.4746 4.30118C12.3375 4.07017 12.2638 3.80704 12.261 3.53841C12.2734 3.10773 12.1109 2.69038 11.8106 2.38143C11.5103 2.07249 11.0977 1.89826 10.6668 1.89844H9.62182C9.19971 1.89844 8.795 2.06664 8.49724 2.36583C8.19948 2.66502 8.03322 3.07053 8.03525 3.49264C8.02274 4.36415 7.31264 5.06405 6.44104 5.06396C6.17241 5.06117 5.90929 4.98749 5.67827 4.85038C4.91562 4.41339 3.94317 4.67612 3.50435 5.43772L2.94753 6.35305C2.50925 7.1137 2.7684 8.08555 3.52724 8.52697C4.02049 8.81174 4.32435 9.33803 4.32435 9.90759C4.32435 10.4771 4.02049 11.0034 3.52724 11.2882C2.76937 11.7267 2.50993 12.6961 2.94753 13.4545L3.47384 14.3622C3.67944 14.7332 4.02441 15.007 4.4324 15.1229C4.84039 15.2389 5.27777 15.1875 5.64776 14.9801C6.01147 14.7678 6.4449 14.7097 6.85169 14.8185C7.25848 14.9274 7.60493 15.1942 7.81404 15.5598C7.95115 15.7908 8.02483 16.0539 8.02762 16.3225C8.02762 17.203 8.74137 17.9167 9.62182 17.9167H10.6668C11.5443 17.9167 12.2568 17.2076 12.261 16.3302C12.259 15.9067 12.4263 15.5001 12.7257 15.2006C13.0251 14.9012 13.4318 14.7339 13.8552 14.736C14.1232 14.7431 14.3853 14.8165 14.618 14.9495C15.3787 15.3878 16.3505 15.1287 16.7919 14.3698L17.3411 13.4545C17.5537 13.0896 17.612 12.6551 17.5032 12.247C17.3944 11.839 17.1274 11.4912 16.7614 11.2806C16.3954 11.07 16.1284 10.7222 16.0196 10.3142C15.9108 9.90613 15.9691 9.47156 16.1817 9.10668C16.3199 8.86532 16.5201 8.66521 16.7614 8.52697C17.5157 8.08579 17.7742 7.11962 17.3411 6.36068V6.35305Z" stroke="#212524" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M10.1499 12.1045C11.3632 12.1045 12.3467 11.121 12.3467 9.90773C12.3467 8.69448 11.3632 7.71094 10.1499 7.71094C8.93666 7.71094 7.95312 8.69448 7.95312 9.90773C7.95312 11.121 8.93666 12.1045 10.1499 12.1045Z" stroke="#212524" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    },
    {
        name: 'world Outlined',
        iconCode: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M10.7194 2.5C14.8619 2.5 18.2194 5.85757 18.2194 10C18.2194 14.1424 14.8619 17.5 10.7194 17.5C6.57699 17.5 3.21942 14.1424 3.21942 10C3.21942 5.85757 6.57699 2.5 10.7194 2.5Z" stroke="#212524" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M10.7188 2.5C12.261 2.5 13.5105 5.85757 13.5105 10C13.5105 14.1424 12.261 17.5 10.7188 17.5C9.17666 17.5 7.92725 14.1424 7.92725 10C7.92725 5.85757 9.17666 2.5 10.7188 2.5Z" stroke="#212524" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4.06494 6.53644C5.32899 6.92644 6.70251 7.19157 8.11494 7.33995C9.83142 7.51995 11.6031 7.51995 13.3277 7.33995C14.7401 7.19157 16.1136 6.92644 17.3777 6.53644" stroke="#212524" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M17.3777 13.4614C16.1136 13.0714 14.7401 12.8062 13.3277 12.6578C11.6031 12.4778 9.83142 12.4778 8.11494 12.6578C6.70251 12.8062 5.32899 13.0714 4.06494 13.4614" stroke="#212524" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    },
    {
        name: 'Avatar Outlined',
        iconCode: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M5.89188 17.0826C4.62603 17.0826 3.8611 16.2612 3.80695 15.1172C3.80695 13.8218 4.58692 12.7082 5.93285 12.2278C7.00637 11.8447 8.4399 12.7365 10.125 12.7245C11.8077 12.7405 13.2406 11.85 14.3143 12.231C15.6679 12.7113 16.4505 13.8237 16.4429 15.1172C16.382 16.2612 15.6216 17.0826 14.358 17.0826H5.89188Z" stroke="#212524" stroke-width="1.2" stroke-miterlimit="10"/>
  <path d="M10.1316 9.69027C12.0021 9.69027 13.5184 8.17398 13.5184 6.3035C13.5184 4.43301 12.0021 2.91669 10.1316 2.91669C8.26114 2.91669 6.74481 4.43301 6.74481 6.3035C6.74481 8.17398 8.26114 9.69027 10.1316 9.69027Z" stroke="#212524" stroke-width="1.2" stroke-miterlimit="10"/>
</svg>`,
    },
    {
        name: 'Avatar Bordered',
        iconCode: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M6.61044 2.5H13.6394C16.0961 2.5 17.6253 4.23432 17.6253 6.68865V13.3113C17.6253 15.7657 16.0961 17.5 13.6386 17.5H6.61044C4.15368 17.5 2.62531 15.7657 2.62531 13.3113V6.68865C2.62531 4.23432 4.16098 2.5 6.61044 2.5Z" stroke="#212524" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M6.69354 14.3812C6.69354 13.2622 7.57976 11.8652 10.1217 11.8652C12.67 11.8652 13.5563 13.2492 13.5563 14.3682" stroke="#212524" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M12.3146 7.80928C12.3146 9.01898 11.3335 10.0001 10.1237 10.0001C8.91398 10.0001 7.93292 9.01898 7.93292 7.80928C7.93292 6.59874 8.91398 5.61847 10.1237 5.61847C11.3335 5.61847 12.3146 6.59874 12.3146 7.80928Z" stroke="#212524" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    },
    {
        name: 'Announcement Outlined',
        iconCode: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M15.3466 11.7584C15.3466 11.7584 7.67299 12.8879 6.70973 12.9884C5.74648 13.0889 4.22132 12.3333 3.67889 10.8421C3.13644 9.35102 3.81834 7.79184 4.62105 7.25021C5.42377 6.70777 11.9963 2.66016 11.9963 2.66016" stroke="#212524" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M6.91406 12.9615L8.14407 16.341C8.4765 17.254 9.48516 17.7251 10.3982 17.3919C11.3112 17.0603 11.7814 16.0508 11.4497 15.1386L10.4914 12.5059" stroke="#212524" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M15.9185 6.38782C16.838 8.9135 16.6637 11.2965 15.5285 11.7092C14.3933 12.1227 12.7279 10.4095 11.8084 7.88379C10.889 5.35727 11.0642 2.97508 12.1985 2.56157C13.3336 2.14805 14.999 3.86131 15.9185 6.38782Z" stroke="#212524" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    },
    {
        name: 'Arrow Left',
        iconCode: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
  <path d="M11.25 13.5L6.75 9L11.25 4.5" stroke="#212524" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    },
    {
        name: 'Notification Outlined',
        iconCode: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M5.43311 9.56643C5.43311 5.93928 8.37337 3 11.9995 3C15.6257 3 18.566 5.93928 18.566 9.56643L18.567 10.8848C18.567 11.6651 18.7382 12.4347 19.0709 13.1401L19.537 14.1305C20.2492 15.6444 19.1449 17.3851 17.4714 17.3851H6.52768C4.85421 17.3851 3.74991 15.6444 4.46211 14.1305L4.92815 13.1401C5.25993 12.4347 5.43214 11.6651 5.43214 10.8848L5.43311 9.56643Z" stroke="#616161" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M8.89844 17.9004C8.89844 19.6118 10.2858 21.0002 11.9972 21.0002C13.7096 21.0002 15.097 19.6118 15.097 17.9004" stroke="#616161" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    },
    {
        name: 'Arrow Down',
        iconCode: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M6 9L12 15L18 9" stroke="#3E3F3F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    },
    {
        name: 'Menu Outlined',
        iconCode: `<svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18" fill="none">
  <path d="M3.5 13.2484H13.5" stroke="#3E3F3F" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M3.5 5.24837H13.5" stroke="#3E3F3F" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M3.5 9.24837H13.5" stroke="#3E3F3F" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    },
    {
        name: 'Edit Outlined',
        iconCode: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
  <path d="M10.4562 16.0358H16.5" stroke="#212524" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.65001 2.16233C10.2964 1.38982 11.4583 1.27655 12.2469 1.90978C12.2905 1.94413 13.6912 3.03232 13.6912 3.03232C14.5575 3.55599 14.8266 4.66925 14.2912 5.51882C14.2627 5.56432 6.34329 15.4704 6.34329 15.4704C6.07981 15.7991 5.67986 15.9931 5.25242 15.9978L2.21961 16.0358L1.53628 13.1436C1.44055 12.7369 1.53628 12.3098 1.79975 11.9811L9.65001 2.16233Z" stroke="#212524" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M8.18402 4.00073L12.7276 7.49" stroke="#212524" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    },
    {
        name: 'Plus',
        iconCode: `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
  <path d="M1.5 6H10.5H1.5Z" fill="#616161"/>
  <path d="M1.5 6H10.5" stroke="#616161" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M6 1.5V10.5" stroke="#616161" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    },
    {
        name: 'Code Outlined',
        iconCode: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M7.43045 5.06836L2.5 9.99883L7.43045 14.9293" stroke="#3E3F3F" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M12.5703 14.9293L17.5007 9.99883L12.5703 5.06836" stroke="#3E3F3F" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    },
    {
        name: 'Resize Outlined',
        iconCode: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M9.16675 15.8333H4.16675M4.16675 15.8333V10.8333M4.16675 15.8333L7.5 12.5" stroke="#3E3F3F" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M10.8333 4.16667H15.8333M15.8333 4.16667V9.16667M15.8333 4.16667L12.5 8" stroke="#3E3F3F" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    },
    {
        name: 'Send Message Outlined',
        iconCode: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M13.1937 6.81219L8.4242 11.6327L2.99953 8.23973C2.22229 7.75345 2.38397 6.57286 3.2631 6.31577L16.1427 2.54397C16.9477 2.30802 17.6938 3.06069 17.4546 3.86833L13.6442 16.739C13.3832 17.6193 12.2093 17.7766 11.7277 16.996L8.42167 11.6335" stroke="#616161" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    },
    {
        name: 'Order List',
        iconCode: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M10 13.75H18.75V15H10V13.75ZM10 5H18.75V6.25H10V5ZM5 7.5V2.5H3.75V3.125H2.5V4.375H3.75V7.5H2.5V8.75H6.25V7.5H5ZM6.25 17.5H2.5V15C2.5 14.6685 2.6317 14.3505 2.86612 14.1161C3.10054 13.8817 3.41848 13.75 3.75 13.75H5V12.5H2.5V11.25H5C5.33152 11.25 5.64946 11.3817 5.88388 11.6161C6.1183 11.8505 6.25 12.1685 6.25 12.5V13.75C6.25 14.0815 6.1183 14.3995 5.88388 14.6339C5.64946 14.8683 5.33152 15 5 15H3.75V16.25H6.25V17.5Z" fill="#3E3F3F"/>
</svg>`,
    },
    {
        name: 'Un Order List',
        iconCode: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M4.375 7.5C5.41053 7.5 6.25 6.66053 6.25 5.625C6.25 4.58947 5.41053 3.75 4.375 3.75C3.33947 3.75 2.5 4.58947 2.5 5.625C2.5 6.66053 3.33947 7.5 4.375 7.5Z" fill="#3E3F3F"/>
  <path d="M4.375 16.25C5.41053 16.25 6.25 15.4105 6.25 14.375C6.25 13.3395 5.41053 12.5 4.375 12.5C3.33947 12.5 2.5 13.3395 2.5 14.375C2.5 15.4105 3.33947 16.25 4.375 16.25Z" fill="#3E3F3F"/>
  <path d="M10 13.75H18.75V15H10V13.75ZM10 5H18.75V6.25H10V5Z" fill="#3E3F3F"/>
</svg>`,
    },
    {
        name: 'Color Outlined',
        iconCode: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M17.1081 10.833L13.1809 6.90521C12.9963 6.72077 12.7461 6.61716 12.4852 6.61716C12.2243 6.61716 11.974 6.72077 11.7895 6.90521L9.15425 9.54043L7.0561 3.66602H6.07244L3.61328 10.5516H4.59694L5.08828 9.07615H8.03927L8.43421 10.2605L4.88516 13.8095C4.79377 13.9009 4.72128 14.0093 4.67182 14.1287C4.62236 14.2481 4.59691 14.376 4.59691 14.5052C4.59691 14.6344 4.62236 14.7624 4.67182 14.8817C4.72128 15.0011 4.79377 15.1096 4.88516 15.2009L7.12102 17.4373H11.8377L17.1081 12.1663C17.1958 12.0788 17.2653 11.9748 17.3127 11.8604C17.3601 11.7459 17.3845 11.6233 17.3845 11.4994C17.3845 11.3755 17.3601 11.2529 17.3127 11.1384C17.2653 11.024 17.1958 10.92 17.1081 10.8325V10.833ZM5.41584 8.09249L6.5623 4.64968L7.71122 8.09249H5.41584ZM11.4309 16.4536H7.52825L5.5806 14.505L8.68504 11.401L12.5843 15.2998L11.4309 16.4536ZM13.2802 14.6043L9.38098 10.7056L12.4854 7.60066L16.3842 11.4994L13.2802 14.6043Z" fill="#3E3F3F"/>
</svg>`,
    },
    {
        name: 'Reply Outlined',
        iconCode: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.765 11.6383C13.2479 11.6383 15.9442 12.8432 17.4356 16.1372C17.4356 16.1372 18.7248 7.09807 9.765 7.09807C9.765 7.09807 9.76417 5.7668 9.76333 4.62041C9.7625 3.97665 9.00892 3.62836 8.51792 4.04515L2.76942 8.91467C2.42032 9.21008 2.40793 9.74325 2.74714 10.0495C4.01073 11.1917 6.85071 13.7585 8.50467 15.2532C8.99083 15.6931 9.765 15.3457 9.765 14.6895V11.6383Z" stroke="#3E3F3F" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    },
    {
        name: 'Search Outlined',
        iconCode: `<svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M8.51463 1.5C12.3888 1.5 15.5292 4.64039 15.5292 8.51458C15.5292 12.3888 12.3888 15.53 8.51463 15.53C4.64039 15.53 1.5 12.3888 1.5 8.51458C1.5 4.64039 4.64039 1.5 8.51463 1.5Z" stroke="#5F6161" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M13.2887 13.6533L16.1429 16.5002" stroke="#5F6161" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    },
    {
        name: 'Cross Icon',
        iconCode: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M11.0119 9.8335L15.4227 5.42271C15.7485 5.09687 15.7485 4.57021 15.4227 4.24437C15.0969 3.91854 14.5702 3.91854 14.2444 4.24437L9.83353 8.65517L5.42271 4.24437C5.09687 3.91854 4.57021 3.91854 4.24437 4.24437C3.91854 4.57021 3.91854 5.09687 4.24437 5.42271L8.6552 9.8335L4.24437 14.2444C3.91854 14.5702 3.91854 15.0968 4.24437 15.4227C4.40687 15.5852 4.62021 15.6668 4.83354 15.6668C5.04687 15.6668 5.26021 15.5852 5.42271 15.4227L9.83353 11.0119L14.2444 15.4227C14.4069 15.5852 14.6202 15.6668 14.8335 15.6668C15.0469 15.6668 15.2602 15.5852 15.4227 15.4227C15.7485 15.0968 15.7485 14.5702 15.4227 14.2444L11.0119 9.8335Z" fill="#616161"/>
</svg>`,
    },
    {
        name: 'Vertical Dot',
        iconCode: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M10.0007 2.5C9.08398 2.5 8.33398 3.25 8.33398 4.16667C8.33398 5.08333 9.08398 5.83333 10.0007 5.83333C10.9173 5.83333 11.6673 5.08333 11.6673 4.16667C11.6673 3.25 10.9173 2.5 10.0007 2.5ZM10.0007 14.1667C9.08398 14.1667 8.33398 14.9167 8.33398 15.8333C8.33398 16.75 9.08398 17.5 10.0007 17.5C10.9173 17.5 11.6673 16.75 11.6673 15.8333C11.6673 14.9167 10.9173 14.1667 10.0007 14.1667ZM10.0007 8.33333C9.08398 8.33333 8.33398 9.08333 8.33398 10C8.33398 10.9167 9.08398 11.6667 10.0007 11.6667C10.9173 11.6667 11.6673 10.9167 11.6673 10C11.6673 9.08333 10.9173 8.33333 10.0007 8.33333Z" fill="#616161"/>
</svg>`,
    },
    {
        name: 'Json Code',
        iconCode: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="15" viewBox="0 0 18 15" fill="none">
  <path d="M5.57061 1C0.999024 1 5.57061 7.28576 0.999023 7.28576C5.57061 7.28576 0.999024 13.5715 5.57061 13.5715" stroke="#616161" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M12.4268 1C16.9984 1 12.4268 7.28576 16.9984 7.28576C12.4268 7.28576 16.9984 13.5715 12.4268 13.5715" stroke="#616161" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    },
    {
        name: 'Data Store Outlined',
        iconCode: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M3.6875 5V9.99975C3.6875 9.99975 3.6875 12.4995 10.003 12.4995C16.3186 12.4995 16.3186 9.99975 16.3186 9.99975V5" stroke="#212524" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M3.6875 10V14.9997C3.6875 14.9997 3.6875 17.5003 10.003 17.5003C16.3186 17.5003 16.3186 14.9997 16.3186 14.9997V10" stroke="#212524" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M10.003 7.53138C13.491 7.53138 16.3186 6.40507 16.3186 5.01569C16.3186 3.62631 13.491 2.5 10.003 2.5C6.51507 2.5 3.6875 3.62631 3.6875 5.01569C3.6875 6.40507 6.51507 7.53138 10.003 7.53138Z" stroke="#212524" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    },
    {
        name: 'Minus Icon',
        iconCode: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
  <path d="M4.5 9H13.5" stroke="#3E3F3F" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    },
    {
        name: 'Position Outlined',
        iconCode: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
  <path d="M8.74057 11.6588L6.99985 13.3996M6.99985 13.3996L5.25977 11.6588M6.99985 13.3996L6.99961 8.96899" stroke="#616161" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M5.25781 2.34111L6.9986 0.600342M6.9986 0.600342L8.73868 2.34111M6.9986 0.600342L6.99836 5.03096" stroke="#616161" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M2.34038 8.74065L0.599609 7.00057M0.599609 7.00057L2.34038 5.25977M0.599609 7.00057L5.03039 7.00025" stroke="#616161" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M11.6586 5.25977L13.3994 7.00057M13.3994 7.00057L11.6586 8.74065M13.3994 7.00057L8.96875 7.00065" stroke="#616161" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    },
    {
        name: 'Draw Outlined',
        iconCode: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M14.3367 2.63908C13.6056 2.05455 12.5474 2.13774 11.9154 2.82736L7.81864 7.06428C6.90791 8.0604 7.02905 9.61912 8.08354 10.462C9.13804 11.3048 10.6851 11.0794 11.4557 9.97162L14.6863 5.04215C15.2205 4.27372 15.068 3.22288 14.3367 2.63908Z" stroke="#616161" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M10.1484 7.57422L12.0371 9.08404" stroke="#616161" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M3.40522 15.7476C3.40522 15.7476 3.87226 15.1323 6.76863 15.0528C9.66502 14.974 9.9423 11.9485 7.97122 10.373C6.52198 9.21409 4.36045 9.94091 3.90583 11.7398L3.0075 15.2915C2.94475 15.541 3.1498 15.776 3.40522 15.7476Z" stroke="#616161" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    },
    {
        name: 'Draw Color Outlined',
        iconCode: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M13.9727 15.8424C13.5801 16.1598 13.0182 16.1598 12.6256 15.8424C11.6026 15.0148 11.0078 13.7699 11.0078 12.4542V4.91758C11.0078 3.65223 12.0338 2.62695 13.2991 2.62695C14.5645 2.62695 15.5905 3.65223 15.5905 4.91758V12.4542C15.5905 13.7699 14.9958 15.0148 13.9727 15.8424Z" stroke="#616161" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M11.0234 6.62109H15.6054" stroke="#616161" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M8.67147 13.9767V4.77332C8.67147 3.58678 7.70974 2.625 6.52317 2.625H4.82801C3.64147 2.625 2.67969 3.58678 2.67969 4.77406V13.9767C2.67969 15.1632 3.64147 16.125 4.82801 16.125H6.52317C7.70974 16.125 8.67147 15.1632 8.67147 13.9767Z" stroke="#616161" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M2.67969 5.32812H5.21112" stroke="#616161" stroke-width="1.125" stroke-linecap="round"/>
  <path d="M2.67969 13.4258H4.53612" stroke="#616161" stroke-width="1.125" stroke-linecap="round"/>
  <path d="M2.67969 10.6934L5.21112 10.7255" stroke="#616161" stroke-width="1.125" stroke-linecap="round"/>
  <path d="M2.67969 8.02539H3.86112" stroke="#616161" stroke-width="1.125" stroke-linecap="round"/>
</svg>`,
    },
    {
        name: 'Bookmark Outlined',
        iconCode: `<svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M16.949 5.12738C16.949 2.83498 15.3818 1.91602 13.1253 1.91602H7.82623C5.6391 1.91602 4 2.77232 4 4.9745V17.2443C4 17.8492 4.65079 18.2301 5.17794 17.9344L10.4962 14.9511L15.7686 17.9294C16.2966 18.2268 16.949 17.8458 16.949 17.2402V5.12738Z" stroke="#616161" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M7.39258 7.52344H13.4912" stroke="#616161" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    },
    {
        name: 'Arrow Left',
        iconCode: `<svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
  <path d="M9.91667 10.209L17.375 10.209" stroke="#616161" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.91602 6.04102L3.30185 10.2085L9.91602 14.376L9.91602 6.04102Z" stroke="#616161" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    },
    {
        name: 'Arrow Left',
        iconCode: `<svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
  <path d="M4.04102 10.2285L16.541 10.2285" stroke="#616161" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M9.08203 15.2498L4.04036 10.2298L9.08203 5.20898" stroke="#616161" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    },
    {
        name: 'Arrow Right',
        iconCode: `<svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
  <path d="M11.0833 9.79102H3.625" stroke="#616161" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M11.084 13.959L17.6982 9.79148L11.084 5.62398V13.959Z" stroke="#616161" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    },
    {
        name: 'Arrow Right',
        iconCode: `<svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
  <path d="M16.959 9.77319L4.45898 9.77319" stroke="#616161" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M11.918 4.75189L16.9596 9.77189L11.918 14.7927" stroke="#616161" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    },
    {
        name: 'Arrow Top',
        iconCode: `<svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
  <path d="M10.291 9.41667L10.291 16.875" stroke="#616161" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M14.459 9.41602L10.2915 2.80185L6.12398 9.41602L14.459 9.41602Z" stroke="#616161" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    },
    {
        name: 'Arrow Top',
        iconCode: `<svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
  <path d="M4.66536 12.918L10.4987 7.08464L16.332 12.918" stroke="#616161" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    },
    {
        name: 'Arrow Down',
        iconCode: `<svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
  <path d="M10.7285 16.459V3.95898" stroke="#616161" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M15.7498 11.418L10.7298 16.4596L5.70898 11.418" stroke="#616161" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    },
    {
        name: 'Arrow Down',
        iconCode: `<svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
  <path d="M10.709 10.5833V3.125" stroke="#616161" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M6.54102 10.584L10.7085 17.1982L14.876 10.584H6.54102Z" stroke="#616161" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    },
    {
        name: 'Cart Bag',
        iconCode: `<svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M14.2605 17.9168H7.30397C4.74867 17.9168 2.78834 16.9939 3.34516 13.2791L3.99352 8.24481C4.33677 6.39127 5.51908 5.68188 6.55645 5.68188H15.0385C16.0912 5.68188 17.2048 6.44466 17.6015 8.24481L18.2498 13.2791C18.7227 16.5743 16.8158 17.9168 14.2605 17.9168Z" stroke="#616161" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M14.3741 5.49881C14.3741 3.51041 12.7622 1.89847 10.7738 1.89847C9.81626 1.89444 8.89659 2.27197 8.2181 2.9476C7.5396 3.62323 7.1582 4.5413 7.1582 5.49881" stroke="#616161" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M13.2452 9.25195H13.207" stroke="#616161" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M8.38775 9.25195H8.34961" stroke="#616161" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    },
    {
        name: 'Arrow Left Bordered',
        iconCode: `<svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M10.4987 2.29102C6.24203 2.29102 2.79036 5.74185 2.79036 9.99935C2.79036 14.256 6.24203 17.7077 10.4987 17.7077C14.7554 17.7077 18.207 14.256 18.207 9.99935C18.207 5.74185 14.7554 2.29102 10.4987 2.29102Z" stroke="#616161" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M11.7012 7.10742L8.79617 9.99992L11.7012 12.8924" stroke="#616161" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    },
    {
        name: 'Arrow Down Bordered',
        iconCode: `<svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M2.79102 9.99935C2.79102 14.256 6.24185 17.7077 10.4993 17.7077C14.756 17.7077 18.2077 14.256 18.2077 9.99935C18.2077 5.74268 14.756 2.29102 10.4993 2.29102C6.24185 2.29102 2.79102 5.74268 2.79102 9.99935Z" stroke="#616161" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M7.60742 8.79688L10.4999 11.7019L13.3924 8.79688" stroke="#616161" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    },
    {
        name: 'Arrow Right Bordered',
        iconCode: `<svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M10.4993 17.707C14.756 17.707 18.2077 14.2562 18.2077 9.9987C18.2077 5.74203 14.756 2.29036 10.4993 2.29036C6.24268 2.29036 2.79102 5.74203 2.79102 9.9987C2.79102 14.2562 6.24268 17.707 10.4993 17.707Z" stroke="#616161" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M9.29688 12.8906L12.2019 9.99812L9.29688 7.10563" stroke="#616161" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    },
    {
        name: 'Arrow Top Bordered',
        iconCode: `<svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M18.207 9.9987C18.207 5.74203 14.7562 2.29036 10.4987 2.29036C6.24203 2.29036 2.79036 5.74203 2.79036 9.9987C2.79036 14.2554 6.24203 17.707 10.4987 17.707C14.7562 17.707 18.207 14.2554 18.207 9.9987Z" stroke="#616161" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M13.3906 11.2012L10.4981 8.29617L7.60563 11.2012" stroke="#616161" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    },
    {
        name: 'Shopping Cart Bag',
        iconCode: `<svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
  <path d="M13.6435 7.75488V5.22821C13.6435 3.49154 12.236 2.08401 10.5001 2.08401C8.76346 2.07654 7.3493 3.47738 7.3418 5.21404V5.22821V7.75488" stroke="#616161" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M14.4518 17.5008H6.54815C4.58808 17.5008 3 15.9133 3 13.955V9.35833C3 7.4 4.58808 5.8125 6.54815 5.8125H14.4518C16.4119 5.8125 18 7.4 18 9.35833V13.955C18 15.9133 16.4119 17.5008 14.4518 17.5008Z" stroke="#616161" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    },
    {
        name: 'Team Outlined',
        iconCode: `<svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
  <path d="M15.4062 9.08044C16.5688 8.91711 17.4638 7.92044 17.4663 6.71294C17.4663 5.52294 16.5988 4.53628 15.4612 4.34961" stroke="#616161" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M16.9414 11.875C18.0672 12.0433 18.8531 12.4375 18.8531 13.25C18.8531 13.8092 18.4831 14.1725 17.8847 14.4008" stroke="#616161" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M10.4072 12.2188C7.72891 12.2188 5.44141 12.6246 5.44141 14.2454C5.44141 15.8654 7.71474 16.2829 10.4072 16.2829C13.0856 16.2829 15.3722 15.8812 15.3722 14.2596C15.3722 12.6379 13.0997 12.2188 10.4072 12.2188Z" stroke="#616161" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M10.4072 9.90602C12.1647 9.90602 13.5897 8.48185 13.5897 6.72352C13.5897 4.96602 12.1647 3.54102 10.4072 3.54102C8.64966 3.54102 7.22463 4.96602 7.22463 6.72352C7.21799 8.47518 8.63216 9.90018 10.3838 9.90602H10.4072Z" stroke="#616161" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M5.4057 9.08044C4.24237 8.91711 3.3482 7.92044 3.3457 6.71294C3.3457 5.52294 4.2132 4.53628 5.3507 4.34961" stroke="#616161" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M3.87065 11.875C2.74482 12.0433 1.95898 12.4375 1.95898 13.25C1.95898 13.8092 2.32898 14.1725 2.92732 14.4008" stroke="#616161" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    },
    {
        name: 'Team Outlined',
        iconCode: `<svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M8.49268 12.6738C11.5668 12.6738 14.1943 13.1397 14.1943 15.0005C14.1943 16.8613 11.5843 17.3405 8.49268 17.3405C5.41768 17.3405 2.79102 16.8788 2.79102 15.0172C2.79102 13.1555 5.40018 12.6738 8.49268 12.6738Z" stroke="#616161" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M8.49289 10.0173C6.47456 10.0173 4.83789 8.38148 4.83789 6.36315C4.83789 4.34482 6.47456 2.70898 8.49289 2.70898C10.5104 2.70898 12.1471 4.34482 12.1471 6.36315C12.1546 8.37398 10.5296 10.0098 8.51872 10.0173H8.49289Z" stroke="#616161" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M14.2363 9.06839C15.5705 8.88089 16.598 7.73589 16.6005 6.35005C16.6005 4.98422 15.6047 3.85089 14.2988 3.63672" stroke="#616161" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M15.9961 12.2773C17.2886 12.4698 18.1911 12.9232 18.1911 13.8565C18.1911 14.499 17.7661 14.9157 17.0794 15.1765" stroke="#616161" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    },
    {
        name: 'Copy Outlined',
        iconCode: `<svg xmlns="http://www.w3.org/2000/svg" width="13" height="14" viewBox="0 0 13 14" fill="none">
  <path d="M8.67581 2.83201C8.50621 1.73837 7.71868 1 6.53188 1H2.68211C1.34191 1 0.5 1.95192 0.5 3.29665V6.92247C0.5 8.14753 1.20019 9.05027 2.34819 9.1926" stroke="#616161" stroke-linecap="round" stroke-linejoin="round"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M10.2903 4.78662H6.44186C5.10103 4.78662 4.25977 5.73596 4.25977 7.08003V10.7059C4.25977 12.05 5.0965 12.9993 6.44186 12.9993H10.2897C11.6357 12.9993 12.4725 12.05 12.4725 10.7059V7.08003C12.4725 5.73596 11.6357 4.78662 10.2903 4.78662Z" stroke="#616161" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    },
    {
        name: 'Eye Outlined',
        iconCode: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M10.3712 7.03996C10.3712 8.34946 9.30916 9.41071 7.99966 9.41071C6.69016 9.41071 5.62891 8.34946 5.62891 7.03996C5.62891 5.72971 6.69016 4.66846 7.99966 4.66846C9.30916 4.66846 10.3712 5.72971 10.3712 7.03996Z" stroke="#616161" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M7.9985 12.5162C10.8545 12.5162 13.4668 10.4627 14.9375 7.03973C13.4668 3.61673 10.8545 1.56323 7.9985 1.56323H8.0015C5.1455 1.56323 2.53325 3.61673 1.0625 7.03973C2.53325 10.4627 5.1455 12.5162 8.0015 12.5162H7.9985Z" stroke="#616161" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    },
    {
        name: 'Timer Outlined',
        iconCode: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M14.9375 8.00049C14.9375 11.8322 11.8318 14.938 8 14.938C4.16825 14.938 1.0625 11.8322 1.0625 8.00049C1.0625 4.16874 4.16825 1.06299 8 1.06299C11.8318 1.06299 14.9375 4.16874 14.9375 8.00049Z" stroke="#616161" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M10.5736 10.2073L7.74609 8.5205V4.88525" stroke="#616161" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    },
    {
        name: 'Mobile Outlined',
        iconCode: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M15.312 14.4846L15.3112 5.51459C15.3112 3.85 13.9612 2.5 12.2966 2.5H7.70015C6.03555 2.5 4.68555 3.85 4.68555 5.51541L4.68636 14.4854C4.68636 16.15 6.03636 17.5 7.70095 17.5H12.2966C13.962 17.5 15.312 16.15 15.312 14.4846Z" stroke="#616161" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M9.99952 14.4422V14.4021M9.99952 14.1912C9.88435 14.1912 9.79102 14.2845 9.79102 14.3993C9.79102 14.5145 9.88435 14.6078 9.99952 14.6078C10.1148 14.6078 10.2081 14.5145 10.2081 14.3993C10.2081 14.2845 10.1148 14.1912 9.99952 14.1912Z" stroke="#616161" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    },
    {
        name: 'Tablet Outlined',
        iconCode: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M17.187 14.4846L17.1862 5.51459C17.1862 3.85 15.8362 2.5 14.1716 2.5H5.82515C4.16055 2.5 2.81055 3.85 2.81055 5.51541L2.81136 14.4854C2.81136 16.15 4.16136 17.5 5.82595 17.5H14.1716C15.837 17.5 17.187 16.15 17.187 14.4846Z" stroke="#616161" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M10.0015 14.4422V14.4021M10.0015 14.1912C9.8863 14.1912 9.79297 14.2845 9.79297 14.3993C9.79297 14.5145 9.8863 14.6078 10.0015 14.6078C10.1166 14.6078 10.21 14.5145 10.21 14.3993C10.21 14.2845 10.1166 14.1912 10.0015 14.1912Z" stroke="#616161" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    },
    {
        name: 'Desktop Outlined',
        iconCode: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M14.1424 2.73608H5.85676C4.00324 2.73608 2.5 4.23933 2.5 6.09365V10.6407C2.5 12.495 4.00324 13.9983 5.85676 13.9983H14.1424C15.9967 13.9983 17.5 12.495 17.5 10.6407V6.09365C17.5 4.23933 15.9967 2.73608 14.1424 2.73608Z" stroke="#616161" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M5.87891 17.2639H14.1192" stroke="#616161" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M8.23616 14.0007L7.70508 17.2651" stroke="#616161" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M11.7617 14.0007L12.2928 17.2651" stroke="#616161" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    },
    {
        name: 'Undo',
        iconCode: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M7.25137 11.2216C6.10659 10.0769 5.46508 9.43459 4.32031 8.28982C5.46508 7.14595 6.10659 6.50341 7.25137 5.35864" stroke="#616161" stroke-width="1.44" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4.32031 8.29126H14.7434C17.4693 8.29126 19.6803 10.5022 19.6803 13.2281C19.6803 15.955 17.4693 18.1659 14.7434 18.1659H6.64328" stroke="#616161" stroke-width="1.44" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    },
    {
        name: 'Redo',
        iconCode: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M16.748 11.2216C17.8928 10.0769 18.5344 9.43459 19.6792 8.28982C18.5344 7.14595 17.8928 6.50341 16.748 5.35864" stroke="#616161" stroke-width="1.44" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M19.6803 8.29126H9.2572C6.53125 8.29126 4.32031 10.5022 4.32031 13.2281C4.32031 15.955 6.53125 18.1659 9.2572 18.1659H17.3573" stroke="#616161" stroke-width="1.44" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    },
    {
        name: 'Star Outlined',
        iconCode: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M11.7499 4.5C11.6589 4.5 11.4349 4.525 11.3159 4.763L9.48992 8.414C9.20092 8.991 8.64392 9.392 7.99992 9.484L3.91192 10.073C3.64192 10.112 3.54992 10.312 3.52192 10.396C3.49692 10.477 3.45692 10.683 3.64292 10.861L6.59892 13.701C7.06992 14.154 7.28392 14.807 7.17192 15.446L6.47592 19.456C6.43292 19.707 6.58992 19.853 6.65992 19.903C6.73392 19.959 6.93192 20.07 7.17692 19.942L10.8319 18.047C11.4079 17.75 12.0939 17.75 12.6679 18.047L16.3219 19.941C16.5679 20.068 16.7659 19.957 16.8409 19.903C16.9109 19.853 17.0679 19.707 17.0249 19.456L16.3269 15.446C16.2149 14.807 16.4289 14.154 16.8999 13.701L19.8559 10.861C20.0429 10.683 20.0029 10.476 19.9769 10.396C19.9499 10.312 19.8579 10.112 19.5879 10.073L15.4999 9.484C14.8569 9.392 14.2999 8.991 14.0109 8.413L12.1829 4.763C12.0649 4.525 11.8409 4.5 11.7499 4.5ZM6.94692 21.5C6.53392 21.5 6.12392 21.37 5.77292 21.114C5.16692 20.67 4.86992 19.937 4.99892 19.199L5.69492 15.189C5.72092 15.04 5.66992 14.889 5.55992 14.783L2.60392 11.943C2.05992 11.422 1.86492 10.652 2.09492 9.937C2.32692 9.214 2.94092 8.697 3.69792 8.589L7.78592 8C7.94392 7.978 8.07992 7.881 8.14792 7.743L9.97492 4.091C10.3119 3.418 10.9919 3 11.7499 3C12.5079 3 13.1879 3.418 13.5249 4.091L15.3529 7.742C15.4219 7.881 15.5569 7.978 15.7139 8L19.8019 8.589C20.5589 8.697 21.1729 9.214 21.4049 9.937C21.6349 10.652 21.4389 11.422 20.8949 11.943L17.9389 14.783C17.8289 14.889 17.7789 15.04 17.8049 15.188L18.5019 19.199C18.6299 19.938 18.3329 20.671 17.7259 21.114C17.1109 21.565 16.3099 21.626 15.6309 21.272L11.9779 19.379C11.8349 19.305 11.6639 19.305 11.5209 19.379L7.86792 21.273C7.57592 21.425 7.26092 21.5 6.94692 21.5Z" fill="#212524"/>
</svg>`,
    },
    {
        name: 'Align Left',
        iconCode: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M2 2.66699H14V4.00033H2V2.66699ZM2 12.667H11.3333V14.0003H2V12.667ZM2 9.33366H14V10.667H2V9.33366ZM2 6.00033H11.3333V7.33366H2V6.00033Z" fill="#616161"/>
</svg>`,
    },
    {
        name: 'Align Center',
        iconCode: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M2 2.66699H14V4.00033H2V2.66699ZM3.33333 12.667H12.6667V14.0003H3.33333V12.667ZM2 9.33366H14V10.667H2V9.33366ZM3.33333 6.00033H12.6667V7.33366H3.33333V6.00033Z" fill="#616161"/>
</svg>`,
    },
    {
        name: 'Align Right',
        iconCode: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M2 2.66699H14V4.00033H2V2.66699ZM4.66667 12.667H14V14.0003H4.66667V12.667ZM2 9.33366H14V10.667H2V9.33366ZM4.66667 6.00033H14V7.33366H4.66667V6.00033Z" fill="#616161"/>
</svg>`,
    },
    {
        name: 'Video Outlined',
        iconCode: `<svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
  <path d="M13 6.66667V13.3333H4.66667V6.66667H13ZM14.6667 8.75V5.83333C14.6667 5.61232 14.5789 5.40036 14.4226 5.24408C14.2663 5.0878 14.0543 5 13.8333 5H3.83333C3.61232 5 3.40036 5.0878 3.24408 5.24408C3.0878 5.40036 3 5.61232 3 5.83333V14.1667C3 14.3877 3.0878 14.5996 3.24408 14.7559C3.40036 14.9122 3.61232 15 3.83333 15H13.8333C14.0543 15 14.2663 14.9122 14.4226 14.7559C14.5789 14.5996 14.6667 14.3877 14.6667 14.1667V11.25L16.575 13.1583C16.6916 13.2759 16.8405 13.356 17.0028 13.3886C17.1651 13.4211 17.3334 13.4046 17.4862 13.3411C17.6391 13.2777 17.7696 13.1701 17.8611 13.0322C17.9526 12.8942 18.001 12.7322 18 12.5667V7.425C18.001 7.25948 17.9526 7.09742 17.8611 6.95949C17.7696 6.82156 17.6391 6.714 17.4862 6.65052C17.3334 6.58705 17.1651 6.57054 17.0028 6.6031C16.8405 6.63566 16.6916 6.71581 16.575 6.83333L14.6667 8.75Z" fill="#616161"/>
</svg>`,
    },
]