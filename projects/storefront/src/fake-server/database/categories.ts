import { CategoryDef } from '../interfaces/category-def';
import { BaseCategory, BlogCategory, Category, ShopCategory } from '../../app/interfaces/category';

let lastId = 0;

function makeShopCategory(def: CategoryDef, parent: ShopCategory): ShopCategory {
    return {
        id: ++lastId,
        type: 'shop',
        name: def.name,
        slug: def.slug,
        image: def.image,
        items: def.items,
        parent,
        children: [],
        layout: def.layout ? def.layout : 'products',
        customFields: {},
    };
}

function makeBlogCategory(def: CategoryDef, parent: BlogCategory): BlogCategory {
    return {
        id: ++lastId,
        type: 'blog',
        name: def.name,
        slug: def.slug,
        image: def.image,
        items: def.items,
        parent,
        children: [],
        customFields: {},
    };
}

function makeCategories<T extends BaseCategory>(
    makeFn: (def: CategoryDef, parent: T) => T,
    defs: CategoryDef[],
    parent: T = null,
): T[] {
    const categories: T[] = [];

    defs.forEach(def => {
        const category: T = makeFn(def, parent);

        if (def.children) {
            category.children = makeCategories(makeFn, def.children, category);
        }

        categories.push(category);
    });

    return categories;
}

function flatTree<T extends Category>(categories: T[]): T[] {
    let result = [];

    categories.forEach(category => result = [...result, category, ...flatTree(category.children as Category[])]);

    return result;
}

const shopCategoriesDef: CategoryDef[] = [
    
    {
        name: 'Sneakers',
        slug: 'sneakers',
        image: 'assets/images/categories/sneakers.jpg',
        items: 179,
    },
	{
        name: 'Apparel',
        slug: 'apparel',
        image: 'assets/images/categories/sneakers.jpg',
        items: 179,
    },
	{
        name: 'Accessories',
        slug: 'accessories',
        image: 'assets/images/categories/sneakers.jpg',
        items: 179,
    },
];

const blogCategoriesDef: CategoryDef[] = [
    {
        name: 'Latest News',
        slug: 'latest-news',
    },
    {
        name: 'Special Offers',
        slug: 'special-offers',
        children: [
            {
                name: 'Spring Sales',
                slug: 'spring-sales',
            },
            {
                name: 'Summer Sales',
                slug: 'summer-sales',
            },
            {
                name: 'Autumn Sales',
                slug: 'autumn-sales',
            },
            {
                name: 'Christmas Sales',
                slug: 'christmas-sales',
            },
            {
                name: 'Other Sales',
                slug: 'other-sales',
            },
        ],
    },
    {
        name: 'New Arrivals',
        slug: 'new-arrivals',
    },
    {
        name: 'Reviews',
        slug: 'reviews',
    },
    {
        name: 'Wheels & Tires',
        slug: 'wheels-tires',
    },
    {
        name: 'Engine & Drivetrain',
        slug: 'engine-drivetrain',
    },
    {
        name: 'Transmission',
        slug: 'transmission',
    },
    {
        name: 'Performance',
        slug: 'performance',
    },
];

export const shopCategoriesTree: ShopCategory[] = makeCategories(makeShopCategory, shopCategoriesDef);

export const shopCategoriesList: ShopCategory[] = flatTree(shopCategoriesTree);

export const blogCategoriesTree: BlogCategory[] = makeCategories(makeBlogCategory, blogCategoriesDef);

export const blogCategoriesList: BlogCategory[] = flatTree(blogCategoriesTree);
