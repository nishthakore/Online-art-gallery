import { createContext } from "react";

import oilpainting from '../assets/images/images/oil painting/oil-painting-5261775_1280.jpg'
import menFashion1 from '../assets/images/images/oil painting/oil-painting-5268834_1280.jpg'
import menFashion2 from '../assets/images/images/mandala art/mandala-5945231_1280.jpg'
import menFashion3 from '../assets/images/london-5398589_1280.jpg'
import womenFashion from '../assets/images/images/mandala art/mandala-1830349_1280.jpg'
import womenFashion1 from '../assets/images/images/oil painting/oil-painting-5375522_1280.jpg'
import womenFashion2 from '../assets/images/insect-4500348_1280.jpg'
import womenFashion3 from '../assets/images/images/mandala art/monkey-786858_1280.png'
import kidsFashion from '../assets/images/images/watercolor art/butterfly-7699705_1280.jpg'
import kidsFashion1 from '../assets/images/illustration-2016288_1280.jpg'
import kidsFashion2 from '../assets/images/draw-737716_1280.jpg'
import kidsFashion3 from '../assets/images/images/sketches/dog-8179668_1280.jpg'
import sketches from '../assets/images/images/sketches/cat-825718_1280.jpg'
import sketches1 from '../assets/images/famous-paintings-698290_1280.jpg'
import sketches2 from '../assets/images/images/sketches/owl-701522_1280.jpg'
import sketches3 from '../assets/images/images/watercolor art/watercolour-4791738_1280.jpg'
import oilpastel from '../assets/images/again-1757396_1280.jpg'
import oilpastel1 from '../assets/images/eyes.jpg'
import oilpastel2 from '../assets/images/wallpaper-978000_1280.jpg'
import oilpastel3 from '../assets/images/colorful-3256055_1280.jpg'
import art from '../assets/images/fairy.jpg'
import art1 from '../assets/images/man.jpg'
import art2 from '../assets/images/sktch.jpeg'
import art3 from '../assets/images/images/sketches/stag-1897922_1280.jpg'
import paint from '../assets/images/elephants-7726385_1280.jpg'
import paint1 from '../assets/images/images/mandala art/mandala-5834416_1280.png'
import paint2 from '../assets/images/images/background/background-6556413_1280.jpg'
import paint3 from '../assets/images/images/watercolor art/girl-2013447_1280.jpg'

export const FeatureCategoryContext = createContext([
    {
        name: "Oil Painitng",
        image: oilpainting,
        url: '/category/oilpainting',
        id: 1
    },
    {
        name: "Oil Painitng",
        image: menFashion1,
        url: '/category/women',
        id: 2
    },
    {
        name: "Mandala art",
        image: menFashion2,
        url: '/category/kids',
        id: 3
    },
    {
        name: "Watercolor art",
        image: menFashion3,
        url: '/category/men',
        id: 1
    },
    {
        name: "Mandala Art",
        image: womenFashion,
        url: '/category/women',
        id: 2
    },
    {
        name: "Oil painting",
        image: womenFashion1,
        url: '/category/kids',
        id: 3
    },
    {
        name: "Watercolour Art",
        image: womenFashion2,
        url: '/category/men',
        id: 1
    },
    {
        name: "Mandala Art",
        image: womenFashion3,
        url: '/category/women',
        id: 2
    },
    {
        name: "Watercolor painting",
        image: kidsFashion,
        url: '/category/kids',
        id: 3
    },
    {
        name: " sketch",
        image: kidsFashion1,
        url: '/category/kids',
        id: 3
    },
    {
        name: "canvas art",
        image: kidsFashion2,
        url: '/category/kids',
        id: 2
    },
    {
        name: "Dog Sketch",
        image: kidsFashion3,
        url: '/category/kids',
        id: 3
    },

    {
        name: " Cat sketch",
        image: sketches,
        url: '/category/kids',
        id: 3
    },
    {
        name: "Abstract Art",
        image: sketches1,
        url: '/category/kids',
        id: 3
    },
    {
        name: "sketch",
        image:sketches2,
        url: '/category/kids',
        id: 2
    },
    {
        name: "Watercolour Art",
        image: sketches3,
        url: '/category/kids',
        id: 3
    },

    {
        name: "Canvas art",
        image: oilpastel,
        url: '/category/kids',
        id: 3
    },
    {
        name: "3D sketch",
        image: oilpastel1,
        url: '/category/kids',
        id: 3
    },
    {
        name: "Freehand art",
        image:oilpastel2,
        url: '/category/kids',
        id: 2
    },
    {
        name: "Abstract art",
        image:oilpastel3,
        url: '/category/kids',
        id: 3
    },

    {
        name: "Sketch",
        image: art,
        url: '/category/kids',
        id: 3
    },
    {
        name: "Potrait",
        image: art1,
        url: '/category/kids',
        id: 3
    },
    {
        name: "Line Art",
        image:art2,
        url: '/category/kids',
        id: 2
    },
    {
        name: "Abstract art",
        image:art3,
        url: '/category/kids',
        id: 3
    },

    {
        name: "Line art",
        image: paint,
        url: '/category/kids',
        id: 3
    },
    {
        name: "mandala art",
        image: paint1,
        url: '/category/kids',
        id: 3
    },
    {
        name: "Abstract Art",
        image:paint2,
        url: '/category/kids',
        id: 2
    },
    {
        name: "watercolor painting",
        image:paint3,
        url: '/category/kids',
        id: 3
    }


])