export default {
  name: 'categories',
  title: 'Categories',
  type: 'document',
  fields: [
    {
      name: 'category',
      title: 'category',
      type: 'document',
      fields: [
        {
          name: 'name',
          title: 'Name',
          type: 'string',
        },
        {
          name: 'products',
          title: 'Products',
          type: 'array',
          of: [
            {
              name: 'product',
              title: 'Product',
              type: 'document',
              fields: [
                {
                  name: 'image',
                  title: 'Image',
                  type: 'array',
                  of: [{type: 'image'}],
                  options: {
                    hotspot: true,
                  },
                },
                {
                  name: 'name',
                  title: 'Name',
                  type: 'string',
                },
                {
                  name: 'slug',
                  title: 'Slug',
                  type: 'slug',
                  options: {
                    source: 'name',
                    maxLength: 90,
                  },
                },
                {
                  name: 'price',
                  title: 'Price',
                  type: 'number',
                },
                {
                  name: 'details',
                  title: 'Details',
                  type: 'string',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
