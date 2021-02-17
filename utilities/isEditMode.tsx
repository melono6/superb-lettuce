import { useEffect, useState } from 'react';

function editMode() {
    const [isEditMode, setEditMode] = useState(false);

    useEffect(() => {
        if (window.storyblok) {
            setEditMode(true);
        }
    }, []);

    return isEditMode;
}

export default editMode;