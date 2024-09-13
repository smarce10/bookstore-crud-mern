import z from "zod"

const bookSchema = z.object({
  title: z.string({
    invalid_type_error: 'Book title must be a string',
    required_error: 'Book title is required'
  }),
  author: z.string({
    invalid_type_error: 'Book author must be a string',
    required_error: 'Author is required'
  }),
  publishYear: z.number().int().min(1000).max(2024),
})

export function validateBook (book) {
  return bookSchema.safeParse(book)
}

export function validatePartialBook (book) {
  return bookSchema.partial().safeParse(book)
}
