import { ProductAttributesDef, ProductDef } from '../interfaces/product-def';
import { Product, ProductAttribute } from '../../app/interfaces/product';
import { Brand } from '../../app/interfaces/brand';
import { brands } from './brands';
import { ShopCategory } from '../../app/interfaces/category';
import { shopCategoriesList } from './categories';
import { prepareCategory } from '../endpoints/categories';
import { nameToSlug } from '../utils';

let lastId = 0;

function resolveProductAttributesDef(attributesDef: ProductAttributesDef): ProductAttribute[] {
    const attributes: ProductAttribute[] = [];

    for (const attributeName of Object.keys(attributesDef)) {
        const attribute: ProductAttribute = {
            name: attributeName,
            slug: nameToSlug(attributeName),
            featured: false,
            values: [],
        };

        const valuesDef = attributesDef[attributeName];
        let valueNames: string[] = [];

        if (typeof valuesDef === 'string') {
            valueNames = [valuesDef];
        } else {
            if (valuesDef[0] === true) {
                attribute.featured = true;
                valuesDef.splice(0, 1);
            }

            valueNames = valuesDef as string[];
        }

        valueNames.forEach(valueName => {
            attribute.values.push({
                name: valueName,
                slug: nameToSlug(valueName),
            });
        });

        if (attribute.values.length > 0) {
            attributes.push(attribute);
        }
    }

    return attributes;
}

function makeProducts(defs: ProductDef[]): Product[] {
    return defs.map(def => {
        let badges = [];

        if (def.badges) {
            if (typeof def.badges === 'string') {
                badges = [def.badges];
            } else {
                badges = def.badges.slice(0);
            }
        }

        let brand: Brand = {
            slug: 'brandix',
            name: 'Brandix',
            image: '',
            country: 'JP',
        };

        if (def.brand) {
            brand = brands.find(x => x.slug === def.brand) || brand;
        }

        const categorySlugs: string[] = def.categories || ['sneakers'];
        const categories: ShopCategory[] = categorySlugs.map(categorySlug => {
            return shopCategoriesList.find(x => x.slug === categorySlug);
        }).map(x => prepareCategory(x));


        const attributesDef: ProductAttributesDef = {
            Speed: [true, '750 RPM'],
            'Power Source': [true, 'Cordless-Electric'],
            'Battery Cell Type': [true, 'Lithium'],
            Voltage: [true, '20 Volts'],
            'Battery Capacity': [true, '2 Ah'],
            Material: ['Aluminium', 'Plastic'],
            'Engine Type': 'Brushless',
            Length: '99 mm',
            Width: '207 mm',
            Height: '208 mm',
        };

        return {
            id: ++lastId,
            name: def.name,
            excerpt: `
                Many philosophical debates that began in ancient times are still debated today. In one general sense,
                philosophy is associated with wisdom, intellectual culture and a search for knowledge.
            `,
            description: `
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum, diam non iaculis finibus,
                    ipsum arcu sollicitudin dolor, ut cursus sapien sem sed purus. Donec vitae fringilla tortor, sed
                    fermentum nunc. Suspendisse sodales turpis dolor, at rutrum dolor tristique id. Quisque pellentesque
                    ullamcorper felis, eget gravida mi elementum a. Maecenas consectetur volutpat ante, sit amet molestie
                    urna luctus in. Nulla eget dolor semper urna malesuada dictum. Duis eleifend pellentesque dui et
                    finibus. Pellentesque dapibus dignissim augue. Etiam odio est, sodales ac aliquam id, iaculis eget
                    lacus. Aenean porta, ante vitae suscipit pulvinar, purus dui interdum tellus, sed dapibus mi mauris
                    vitae tellus.
                </p>
                <h4>Etiam lacus lacus mollis in mattis</h4>
                <p>
                    Praesent mattis eget augue ac elementum. Maecenas vel ante ut enim mollis accumsan. Vestibulum vel
                    eros at mi suscipit feugiat. Sed tortor purus, vulputate et eros a, rhoncus laoreet orci. Proin sapien
                    neque, commodo at porta in, vehicula eu elit. Vestibulum ante ipsum primis in faucibus orci luctus et
                    ultrices posuere cubilia Curae; Curabitur porta vulputate augue, at sollicitudin nisl molestie eget.
                </p>
                <p>
                    Nunc sollicitudin, nunc id accumsan semper, libero nunc aliquet nulla, nec pretium ipsum risus ac
                    neque. Morbi eu facilisis purus. Quisque mi tortor, cursus in nulla ut, laoreet commodo quam.
                    Pellentesque et ornare sapien. In ac est tempus urna tincidunt finibus. Integer erat ipsum, tristique
                    ac lobortis sit amet, dapibus sit amet purus. Nam sed lorem nisi. Vestibulum ultrices tincidunt turpis,
                    sit amet fringilla odio scelerisque non.
                </p>
            `,
            slug: def.slug,
            sku: def.sku,
			colorway: def.colorway,
			retailprice: def.retailprice,
			releasedate: def.releasedate,
			indiarelease: def.indiarelease,
            stock: 'in-stock',
            price: def.price,
            compareAtPrice: def.compareAtPrice || null,
            images: def.images.slice(0),
            badges,
            rating: def.rating,
            reviews: def.reviews,
            availability: def.availability,
            compatibility: def.compatibility || 'all',
            brand,
            type: {
                slug: 'default',
                name: 'Default',
                attributeGroups: [
                    {
                        name: 'General',
                        slug: 'general',
                        attributes: [
                            'speed',
                            'power-source',
                            'battery-cell-type',
                            'voltage',
                            'battery-capacity',
                            'material',
                            'engine-type',
                        ],
                    },
                    {
                        name: 'Dimensions',
                        slug: 'dimensions',
                        attributes: [
                            'length',
                            'width',
                            'height',
                        ],
                    },
                ],
            },
            attributes: resolveProductAttributesDef(
                Object.assign({}, attributesDef, def.attributes),
            ),
            options: [
                {
                    type: 'default',
                    slug: 'size',
                    name: 'Size',
                    values: [
                        {slug: '11.5', name: '11.5'},
                        {slug: '12', name: '12'},
                    ],
                },
            ],
            tags: ['Brake Kit', 'Brandix', 'Filter', 'Bumper', 'Transmission', 'Hood'],
            categories,
            customFields: {},
        };
    });
}

const productsDef: ProductDef[] = [
    {
        name: 'Air Jordan 1 retro high Off- White Chicago',
        slug: 'brandix-spark-plug-kit-asr-400',
        sku: '140-10440-B',
		colorway: 'white/metallic silver-midnight navy',
		retailprice: 170,
		releasedate: '11/11/2020',
		indiarelease: '11/11/2020',
        price: 2680,
        images: [
            'assets/images/products/product-1-1.png',
        ],
        badges: ['sale', 'new', 'hot'],
        rating: 4,
        reviews: 3,
        availability: 'in-stock',
        compatibility: [1, 2],
        attributes: {
            Size: '11.5',
        },
    },
    {
        name: 'Nike Adapt BB “MAG”',
        slug: 'brandix-brake-kit-bdx-750z370-s',
        sku: '573-23743-C',
		colorway: 'white/metallic silver-midnight navy',
		retailprice: 170,
		releasedate: '11/11/2020',
		indiarelease: '11/11/2020',
        price: 2650,
        images: [
            'assets/images/products/product-2-1.png',
        ],
        rating: 5,
        reviews: 22,
        availability: 'in-stock',
        compatibility: [1],
        
    },
    {
        name: 'Air Jordan 4 Retro “Doernbecher”',
        slug: 'left-headlight-of-brandix-z54',
        sku: '009-50078-Z',
		colorway: 'white/metallic silver-midnight navy',
		retailprice: 170,
		releasedate: '11/11/2020',
		indiarelease: '11/11/2020',
        price: 2680,
        compareAtPrice: 415,
        images: [
            'assets/images/products/product-3-1.png',
			'assets/images/products/product-7-1.png',
			'assets/images/products/product-8-1.png',
        ],
        badges: ['sale'],
        rating: 3,
        reviews: 14,
        availability: 'in-stock',
        attributes: {
            Size: 'Red',
        },
    },
    {
        name: 'Air Jordan 4 Retro “Doernbecher”',
        slug: 'glossy-gray-19-aluminium-wheel-ar-19',
        sku: 'A43-44328-B',
		colorway: 'white/metallic silver-midnight navy',
		retailprice: 170,
		releasedate: '11/11/2020',
		indiarelease: '11/11/2020',
        price: 2680,
        images: [
            'assets/images/products/product-4-1.png',
			'assets/images/products/product-7-1.png',
			'assets/images/products/product-8-1.png',
        ],
        badges: ['hot'],
        rating: 4,
        reviews: 26,
        availability: 'in-stock',
        compatibility: 'unknown',
        attributes: {
            Size: 'Black',
        },
    },
    {
        name: 'Air Jordan 1 retro high Off- White Chicago',
        slug: 'twin-exhaust-pipe-from-brandix-z54',
        sku: '729-51203-B',
		colorway: 'white/metallic silver-midnight navy',
		retailprice: 170,
		releasedate: '11/11/2020',
		indiarelease: '11/11/2020',
        price: 749,
        images: [
            'assets/images/products/product-5-1.png',
        ],
        rating: 4,
        reviews: 9,
        availability: 'in-stock',
        brand: 'red-gate',
        attributes: {
            Size: 'Light Gray',
        },
    },
    {
        name: 'Nike Adapt BB “MAG”',
        slug: 'motor-oil-level-5',
        sku: '573-49386-C',
		colorway: 'white/metallic silver-midnight navy',
		retailprice: 170,
		releasedate: '11/11/2020',
		indiarelease: '11/11/2020',
        price: 23,
        images: [
            'assets/images/products/product-6-1.png',
        ],
        rating: 5,
        reviews: 2,
        availability: 'in-stock',
        brand: 'sunset',
        attributes: {
            Size: 'Gray',
        },
    },
    {
        name: 'Air Jordan 4 Retro “Doernbecher”',
        slug: 'brandix-engine-block-z4',
        sku: '753-38573-B',
		colorway: 'white/metallic silver-midnight navy',
		retailprice: 170,
		releasedate: '11/11/2020',
		indiarelease: '11/11/2020',
        price: 452,
        compareAtPrice: 573,
        images: [
            'assets/images/products/product-7-1.png',
			'assets/images/products/product-7-1.png',
			'assets/images/products/product-8-1.png',
        ],
        rating: 0,
        reviews: 0,
        availability: 'in-stock',
        brand: 'red-gate',
        attributes: {
            Size: 'Dark Gray',
        },
    },
    {
        name: 'Air Jordan 4 Retro “Doernbecher”',
        slug: 'brandix-clutch-discs-z175',
        sku: '472-67382-Z',
		colorway: 'white/metallic silver-midnight navy',
		retailprice: 170,
		releasedate: '11/11/2020',
		indiarelease: '11/11/2020',
        price: 345,
        images: [
            'assets/images/products/product-8-1.png',
			'assets/images/products/product-7-1.png',
			'assets/images/products/product-8-1.png',
        ],
        rating: 3,
        reviews: 7,
        availability: 'in-stock',
        brand: 'sunset',
        attributes: {
            Size: 'Coal',
        },
    },
    {
        name: 'Air Jordan 1 retro high Off- White Chicago',
        slug: 'brandix-manual-five-speed-gearbox',
        sku: '855-78336-G',
		colorway: 'white/metallic silver-midnight navy',
		retailprice: 170,
		releasedate: '11/11/2020',
		indiarelease: '11/11/2020',
        price: 879,
        images: [
            'assets/images/products/product-1-1.png',
        ],
        rating: 4,
        reviews: 6,
        availability: 'in-stock',
        brand: 'sunset',
        attributes: {
            Size: 'Orange',
        },
    },
    {
        name: 'Nike Adapt BB “MAG”',
        slug: 'set-of-car-floor-mats-brandix-z4',
        sku: '473-75662-R',
		colorway: 'white/metallic silver-midnight navy',
		retailprice: 170,
		releasedate: '11/11/2020',
		indiarelease: '11/11/2020',
        price: 78,
        compareAtPrice: 94,
        images: [
            'assets/images/products/product-2-1.png',
        ],
        rating: 4,
        reviews: 16,
        availability: 'in-stock',
        brand: 'red-gate',
        attributes: {
            Size: 'Yellow',
        },
    },
    {
        name: 'Air Jordan 4 Retro “Doernbecher”',
        slug: 'taillights-brandix-z54',
        sku: '521-57812-H',
		colorway: 'white/metallic silver-midnight navy',
		retailprice: 170,
		releasedate: '11/11/2020',
		indiarelease: '11/11/2020',
        price: 60,
        images: [
            'assets/images/products/product-3-1.png',
			'assets/images/products/product-7-1.png',
			'assets/images/products/product-8-1.png',
        ],
        rating: 2,
        reviews: 8,
        availability: 'in-stock',
        brand: 'red-gate',
        attributes: {
            Size: 'Pear Green',
        },
    },
    {
        name: 'Air Jordan 4 Retro “Doernbecher”',
        slug: 'wiper-blades-brandix-wl2',
        sku: '994-34346-B',
		colorway: 'white/metallic silver-midnight navy',
		retailprice: 170,
		releasedate: '11/11/2020',
		indiarelease: '11/11/2020',
        price: 12,
        images: [
            'assets/images/products/product-4-1.png',
			'assets/images/products/product-7-1.png',
			'assets/images/products/product-8-1.png',
        ],
        rating: 5,
        reviews: 41,
        availability: 'in-stock',
        attributes: {
            Size: 'Green',
        },
    },
    {
        name: 'Air Jordan 1 retro high Off- White Chicago',
        slug: 'fantastic-12-stroke-engine-with-a-power-of-1991-hp',
        sku: '985-00884-S',
		colorway: 'white/metallic silver-midnight navy',
		retailprice: 170,
		releasedate: '11/11/2020',
		indiarelease: '11/11/2020',
        price: 2579,
        images: [
            'assets/images/products/product-5-1.png',
        ],
        rating: 3,
        reviews: 17,
        availability: 'in-stock',
        attributes: {
            Size: 'Emerald',
        },
    },
    {
        name: 'Nike Adapt BB “MAG”',
        slug: 'set-of-four-19-inch-spiked-tires',
        sku: '855-56888-U',
		colorway: 'white/metallic silver-midnight navy',
		retailprice: 170,
		releasedate: '11/11/2020',
		indiarelease: '11/11/2020',
        price: 327,
        images: [
            'assets/images/products/product-6-1.png',
        ],
        rating: 4,
        reviews: 9,
        availability: 'in-stock',
        brand: 'sunset',
        attributes: {
            Size: 'Shamrock',
        },
    },
    {
        name: 'Air Jordan 4 Retro “Doernbecher”',
        slug: '40-megawatt-low-beam-lamp',
        sku: '345-99553-E',
		colorway: 'white/metallic silver-midnight navy',
		retailprice: 170,
		releasedate: '11/11/2020',
		indiarelease: '11/11/2020',
        price: 4,
        compareAtPrice: 8,
        images: [
            'assets/images/products/product-7-1.png',
			'assets/images/products/product-7-1.png',
			'assets/images/products/product-8-1.png',
        ],
        rating: 4,
        reviews: 31,
        availability: 'in-stock',
        brand: 'no-name',
        attributes: {
            Size: 'Shakespeare',
        },
    },
    {
        name: 'Air Jordan 4 Retro “Doernbecher”',
        slug: 'brandix-drivers-seat',
        sku: '563-73744-Q',
		colorway: 'white/metallic silver-midnight navy',
		retailprice: 170,
		releasedate: '11/11/2020',
		indiarelease: '11/11/2020',
        price: 78,
        images: [
            'assets/images/products/product-8-1.png',
			'assets/images/products/product-7-1.png',
			'assets/images/products/product-8-1.png',
        ],
        rating: 3,
        reviews: 4,
        availability: 'in-stock',
        brand: 'sunset',
        attributes: {
            Size: 'Blue',
        },
    },
    {
        name: 'Air Jordan 1 retro high Off- White Chicago',
        slug: 'air-filter-from-ashs-chainsaw',
        sku: '999-60606-X',
		colorway: 'white/metallic silver-midnight navy',
		retailprice: 170,
		releasedate: '11/11/2020',
		indiarelease: '11/11/2020',
        price: 666.99,
        images: [
            'assets/images/products/product-1-1.png',
        ],
        rating: 5,
        reviews: 66,
        availability: 'in-stock',
        brand: 'turbo-electric',
        attributes: {
            Size: 'Dark Blue',
        },
    },
    {
        name: 'Nike Adapt BB “MAG”',
        slug: 'side-rearview-mirror',
        sku: '545-74573-D',
		colorway: 'white/metallic silver-midnight navy',
		retailprice: 170,
		releasedate: '11/11/2020',
		indiarelease: '11/11/2020',
        price: 40,
        compareAtPrice: 60,
        images: [
            'assets/images/products/product-2-1.png',
        ],
        rating: 4,
        reviews: 25,
        availability: 'in-stock',
        brand: 'turbo-electric',
        attributes: {
            Size: 'Violet',
        },
    },
    {
        name: 'Air Jordan 4 Retro “Doernbecher”',
        slug: 'brandix-car-door-lock',
        sku: '965-73344-F',
		colorway: 'white/metallic silver-midnight navy',
		retailprice: 170,
		releasedate: '11/11/2020',
		indiarelease: '11/11/2020',
        price: 21,
        compareAtPrice: 31,
        images: [
            'assets/images/products/product-3-1.png',
			'assets/images/products/product-7-1.png',
			'assets/images/products/product-8-1.png',
        ],
        badges: ['sale'],
        rating: 3,
        reviews: 24,
        availability: 'in-stock',
        brand: 'turbo-electric',
        attributes: {
            Size: 'Purple',
        },
    },
    {
        name: 'Air Jordan 4 Retro “Doernbecher”',
        slug: 'air-suspension-for-brandix-car',
        sku: '365-32667-P',
		colorway: 'white/metallic silver-midnight navy',
		retailprice: 170,
		releasedate: '11/11/2020',
		indiarelease: '11/11/2020',
        price: 162,
        compareAtPrice: 174,
        images: [
            'assets/images/products/product-4-1.png',
			'assets/images/products/product-7-1.png',
			'assets/images/products/product-8-1.png',
        ],
        rating: 5,
        reviews: 7,
        availability: 'in-stock',
        brand: 'sunset',
        attributes: {
            Size: 'Cerise',
        },
    },
    {
        name: 'Air Jordan 1 retro high Off- White Chicago',
        slug: 'sunset-brake-kit',
        sku: 'SSX-780B390-S',
		colorway: 'white/metallic silver-midnight navy',
		retailprice: 170,
		releasedate: '11/11/2020',
		indiarelease: '11/11/2020',
        price: 1259,
        images: [
            'assets/images/products/product-5-1.png',
        ],
        rating: 4,
        reviews: 7,
        availability: 'in-stock',
        brand: 'sunset',
        attributes: {
            Size: 'Orange',
        },
    },
    {
        name: 'Nike Adapt BB “MAG”',
        slug: 'specter-brake-kit',
        sku: 'SCT-123A380-S',
		colorway: 'white/metallic silver-midnight navy',
		retailprice: 170,
		releasedate: '11/11/2020',
		indiarelease: '11/11/2020',
        price: 799,
        images: [
            'assets/images/products/product-6-1.png',
        ],
        rating: 5,
        reviews: 3,
        availability: 'in-stock',
        brand: 'specter',
        attributes: {
            Size: 'Green',
        },
    },
    {
        name: 'Air Jordan 4 Retro “Doernbecher”',
        slug: 'brake-kit',
        sku: 'NNO-120K643-S',
		colorway: 'white/metallic silver-midnight navy',
		retailprice: 170,
		releasedate: '11/11/2020',
		indiarelease: '11/11/2020',
        price: 569,
        images: [
            'assets/images/products/product-7-1.png',
			'assets/images/products/product-7-1.png',
			'assets/images/products/product-8-1.png',
        ],
        rating: 3,
        reviews: 9,
        availability: 'in-stock',
        brand: 'no-name',
        attributes: {
            Size: 'Shamrock',
        },
    },
    {
        name: 'Air Jordan 4 Retro “Doernbecher”',
        slug: 'stp-generator-platinum',
        sku: 'STP-577843-E',
		colorway: 'white/metallic silver-midnight navy',
		retailprice: 170,
		releasedate: '11/11/2020',
		indiarelease: '11/11/2020',
        price: 379,
        images: [
            'assets/images/products/product-8-1.png',
        ],
        rating: 5,
        reviews: 22,
        availability: 'in-stock',
        brand: 'red-gate',
        attributes: {
            Size: 'Dark Blue',
        },
    },
];

export const products: Product[] = makeProducts(productsDef);
