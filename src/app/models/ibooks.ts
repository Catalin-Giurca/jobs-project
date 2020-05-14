export interface IBooks {
    kind?: string;
    id: string;
    etag?: string;
    selfLink?: string;
    volumeInfo?: {
        title?: string;
        subtitle?: string;
        authors?: string[];
        publisher?: string;
        description?: string;
        industryIdentifiers: [{
            type: string;
            identifier: string;
        }];
        readingModes: {
            text: string;
            image: string;
        };
        pageCount: number;
        printType: string;
        categories: string[];
        averageRating: number;
        ratingsCount: number;
        maturityRating: string;
        allowAnonLogging: boolean,
        contentVersion: string;
        imageLinks: {
            smallThumbnail: string;
            thumbnail: string;
        };
        language: string;
        previewLink: string;
        infoLink: string;
        canonicalVolumeLink: string;
    };
    saleInfo: {
        country: string;
        saleability: string;
        isEbook: boolean;
    };
    accessInfo: {
        country: string;
        viewability: string;
        embeddable: boolean;
        publicDomain: boolean;
        textToSpeechPermission: string;
        epub: {
            isAvailable: boolean;
        },
        pdf: {
            isAvailable: boolean;
        },
        webReaderLink: string;
        accessViewStatus: string;
        quoteSharingAllowed: boolean;
    };
    searchInfo:{
        textSnippet: string;
    }

}
