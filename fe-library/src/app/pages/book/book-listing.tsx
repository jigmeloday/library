import { FetchAPI } from "../../services/api-services/base-api";

export function BookListing() {
    FetchAPI( '', 'GET' );
    return(
        <>Book</>
    )
}

export default BookListing;