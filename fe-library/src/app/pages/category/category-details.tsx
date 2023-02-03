import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { SharedFacade } from '../../services/facade-service/shared-facade';

export function CategoryDetails() {
    const [books, setBooks] = useState<any>();
    const dispatch = useDispatch();
    const id = useParams()['id'];
    useEffect(() => {
        SharedFacade.fetchCategoryByID(id as string).then((resp) => {
            setBooks(resp)
        }).catch((error) => console.log(error))
    }, []);
    console.log(books)
    return(
        <>hello </>
    )
}

export default CategoryDetails;