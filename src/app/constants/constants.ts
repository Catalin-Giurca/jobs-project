export const jobsApi = 'https://api.dataatwork.org/v1';
export const booksApi ='https://www.googleapis.com/books/v1';

export const serviceUrl = {
    jobService: {
        startsWith: `${jobsApi}/jobs/autocomplete?contains=`,
    },
    bookService: {
        findBooks: `${booksApi}/volumes?q=`
    }
}