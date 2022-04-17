import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = sanityClient({
    projectId : "fvau70ts",
    dataset:'production',
    apiVersion:'2022-02-01',
    useCdn:true,
    token: "skTGZtyIpp8GDASABRmTHzmyhrgvYJg77AL8YQIiXtM39qGKDwmojfZSg3mJ2GRmYeta7bouPV00dqvlF2oMNdITrmO5YyRsUVPtuC7rMnQUZ54lhYLXfM9ZOrUIT4anDY4CO0PGQjLzEwbgfE3WB5qUNgN0JQba3ZwpW6RSgO4B7xMwUKRE",
});

const builder = imageUrlBuilder(client);



export const urlFor = (source) => builder.image(source)